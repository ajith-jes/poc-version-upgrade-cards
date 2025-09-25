
import React, { useState } from 'react';

import { DropZoneProps } from './index.interface';

import { DragEvent, FC, RefObject, useMemo, useRef } from "react"


export const DropZone: FC<DropZoneProps> = (_props) => {

  const ele = useRef(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };


  const handleDrop = (e: DragEvent<HTMLDivElement>, ele: RefObject<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && !!files.length) {
      _onUpload(files)
    }
  };


  const handleDragExit = (e: DragEvent<HTMLDivElement>, ele: RefObject<HTMLDivElement>) => {
    ele.current?.classList.remove("bg-slate-200 ")
  }
  const handleDragEnter = (e: DragEvent<HTMLDivElement>, ele: RefObject<HTMLDivElement>) => {
    ele.current?.classList.add("bg-slate-200 ")
  }

  const id = useMemo(() => String(Math.random() * 10000), [])

  const inputEle = useRef<HTMLInputElement | null>(null)

  const getAllowedFileTypes = (types: string[]) => {
    let allowed: string[] = []
    types.forEach(e => {
      switch(e) {
        case "pdf":
          allowed.push("application/pdf")
          break
        case "png":
          allowed.push("image/png")
          break
        case "jpg":
        case "jpeg":
          allowed.push("image/jpeg")
          break
      }
    })
    return allowed
  }

  const _onUpload = (files: FileList | null) => {
    if (!!files) {
      let fileList: File[] = [];
      const allowedFileTypes = getAllowedFileTypes(_props.extensions)
      for(let i=0; i < files.length; i++) {
        const file = files.item(i)
        if (!!file) {
          if(allowedFileTypes.includes(file?.type)) {
            fileList.push(file)
          }
        }
      }
      _props.onUploadFile(fileList)
    }
    if (inputEle.current) {
      inputEle.current.value = ""
    }
  }

  const allowedExtensions = (extensions: string[]) => {
    return extensions.map((v) => `.${v}`).join(',')
  }
    return (
      <label htmlFor={id} style={{
        pointerEvents: _props.disabled ? "none" : "all",
        cursor: _props.disabled ? "not-allowed" : "pointer",
      }}>
        <input style={{
          visibility: "hidden",
          height: "0px",
          width: "0px",
          position: "absolute",
        }} type="file" id={id} multiple={!!_props.multiple ? _props.multiple : false} 
        onChange={(e) => _onUpload(e.target.files)} ref={inputEle} accept={allowedExtensions(_props.extensions)} />
        <div
            id={id}
            className={`border-2 border-dashed p-4 rounded-md border-[#A9A9A9] my-4 ${_props.className}`}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, ele)}
            onDragEnter={(e) => handleDragEnter(e, ele)}
            onDragOverCapture={(e) => handleDragEnter(e, ele)}
            onDragExit={(e) => handleDragExit(e, ele)}
        >{_props.children}</div>
      </label>
    )
}