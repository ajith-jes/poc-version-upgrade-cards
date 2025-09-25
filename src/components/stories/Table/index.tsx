import { FC, useEffect, useMemo, useRef, useState } from "react"
import { CopyText } from "../CopyText";
import { Loader } from "../Loader";
import { TableProps } from "./index.interface";
import style from './table.module.scss'

export const Table: FC<TableProps> = (_props) => {
  const list = useRef<HTMLInputElement[] | null[]>([])
  const selectAll = useRef<HTMLInputElement | null>(null)

  const _changeHandler = () => {
    const data: any = [];
    list.current.forEach((e, k) => {
      const da = list.current[k];
      if (e?.checked) {
        data.push(JSON.parse(`${da?.getAttribute("data-value")}`))
      } else {

      }
    })
    if (_props.onSelectChange) {
      _props.onSelectChange(data);
    }
    if (selectAll.current && _props.selected) {
      selectAll.current.checked = _props.items.length == data.length
    }
  }

  const _selectAll = (checked: boolean) => {
    list.current.forEach((e, k) => {
      if (e) {
        e.checked = checked
      }
      if (_props.onSelectChange) {
        _props.onSelectChange(checked ? _props.items : [])
      }
    })

  }

  useEffect(() => {
    if (!!!_props.selected?.length) {
      list.current.forEach((e, k) => {
        if (e) {
          e.checked = false
        }
      })
      if (selectAll.current?.checked) {
        selectAll.current.checked = false
      }
    }
  }, [_props.selected])

  const tableData = (ele: any, key: string, i: number) => {
    if (!!_props.tdElement) {
      if (_props.tdElement[key]) {
        return _props.tdElement[key](ele, i)
      }
    }
    if (!!_props.maxTextWidthForCell) {
      if (_props.maxTextWidthForCell[key]) {
        return <CopyText
          text={ele[key]}
          max={_props.maxTextWidthForCell[key].char}
          noCopy={_props.maxTextWidthForCell[key].noCopy}
        />
      }
    }
    return ele[key]
  }

  const eleRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseActive, setMouseActive] = useState(false);

  const onMouseDown = (e: MouseEvent) => {
    setMouseActive(true)
    setMousePosition({ x: e.screenX, y: e.screenY })
  }

  const onMouseLeave = (e: MouseEvent) => {
    setMouseActive(false)
  }

  const onMouseUp = (e: MouseEvent) => {
    setMouseActive(false)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (mouseActive) {
      setMousePosition({ x: e.screenX, y: e.screenY })
    }
  }

  const _items = useMemo(() => {
    return _props.items
      .map((e) => [e, !!_props.expandableData ? _props.expandableData(e) : ""])
      .flat().filter(e => !!e)
  }, [_props.items])

  return (
    <div className={style.tableContainer} ref={eleRef}>
      {!_props.loading ? (
        <table className={style[`bst-table-type-${_props.variant}`]}>
          <thead style={{ fontSize: `${_props.headerFontSize ?? 14}px` }}>
            <tr>
              {_props.withCheckbox && (
                <th className={style.checkbox}>
                  <input
                    ref={selectAll}
                    type="checkbox"
                    onChange={(v) => _selectAll(v.target.checked)}
                  />
                </th>
              )}

              {_props.headers.map((e, k) => (
                <th key={k}>
                  <span>{e.label}</span>
                </th>
              ))}

              {!!_props.itemAction && (
                <th className={_props.stickyAction ? style.stickyAction : ""}>
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody
            onChange={_changeHandler}
            style={{
              maxHeight: _props.maxHeight ?? "auto",
              overflow: _props.scrollable ? "scroll" : "",
              fontSize: `${_props.dataFontSize ?? 14}px`,
            }}
          >
            {_items?.map((e, k) =>
              [
                <tr key={k}>
                  {_props.withCheckbox && (
                    <td
                      className={`${style.checkbox} ${_props.tdClass || ""}`}
                      style={{ width: `calc(100%/${_props.headers.length})` }}
                    >
                      <input
                        data-value={JSON.stringify(e)}
                        ref={(el) => {list.current[k] = el}}
                        type="checkbox"
                      />
                    </td>
                  )}
                  {_props.headers.map((el, y) => (
                    <td key={`${k}-${y}`}>{tableData(e, el.key, k)}</td>
                  ))}
                  {!!_props.itemAction && (
                    <td
                      className={`${style.bgButtonText} ${_props.stickyAction ? style.stickyAction : ""
                        }`}
                    >
                      {_props.itemAction(e, k)}
                    </td>
                  )}
                </tr>,
                _props.expandableData ? _props.expandableData(e, k) : null,
              ].flat()
            )}
          </tbody>
        </table>
      ) : (
        <Loader center height={200} />
      )}
    </div>

  )
}
