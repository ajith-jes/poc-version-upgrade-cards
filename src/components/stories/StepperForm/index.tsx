import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import "./StepperForm.scss";
import {
  BooleanInputProps,
  OptionInputProps,
  StepperContentProps,
  StepperFormProps,
  TextInputProps,
} from "./index.interface";
import "../InputField/InputField.scss";
import { Button } from "../Button";
import { InputField } from "../InputField";
import classNames from "classnames";
import { DropZone } from "../DropZone";
import { Select } from "../Select";
import { Iconx } from "../Iconx";
import { PhotoProvider, PhotoView } from "react-photo-view"
import 'react-photo-view/dist/react-photo-view.css';
import { CloseModel, Model } from "../Model";

const TextInput: FC<TextInputProps> = ({ question, onChange, value }) => {
  const onEnterValidate = (e: any) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z0-9\s]{0,256}$/.test(inputValue)) {
      onChange(inputValue);
    }
  };
  return (
    <div>
      <InputField
        required
        onChange={(e) => onEnterValidate(e)}
        label={question}
        type="text"
        value={value}
        block
        placeholder={`Your Input`}
        maxLength={256}
      />
      <div className="flex items-center justify-between">
        <div>
          <span className="">Only numbers and text are allowed</span>
        </div>
        <div>
          {value.length}/256
        </div>
      </div>
    </div>
  );
};

const BooleanInput: FC<BooleanInputProps> = ({ onChange, question, value }) => {
  const id = useMemo(() => {
    let uid = Math.random() * 999;
    return `qu-${Date.now()}-${uid}`;
  }, [question]);
  return (
    <div className="py-2">
      <div className="mb-2 font-normal text-sm">{question}</div>
      <div className={"flex w-full"}>
        <div className="flex items-center mb-4">
          <input
            required
            id={`${id}-yes`}
            type="radio"
            value=""
            name={question}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
            onClick={() => onChange("Yes")}
          />
          <label
            htmlFor={`${id}-yes`}
            className="ml-1 text-sm font-normal text-gray-900"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            required
            id={`${id}-no`}
            type="radio"
            value=""
            name={question}
            className=" ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
            onClick={() => onChange("No")}
          />
          <label
            htmlFor={`${id}-no`}
            className="ml-1 text-sm font-normal text-gray-900"
          >
            No
          </label>
        </div>
      </div>
    </div>
  );
};

const OptionInput: FC<OptionInputProps> = ({
  onChange,
  options,
  value,
  question,
}) => {
  const id = useMemo(() => {
    let uid = Math.random() * 999;
    return `qu-${Date.now()}-${uid}`;
  }, [question]);
  return (
    <div className="py-3">
      <div className="mb-2 font-normal text-sm">{question}</div>
      <div>
        {options?.map((e, i) => (
          <div key={i} className="flex items-center mb-4">
            <input
              required
              id={`${id}-${i}`}
              type="radio"
              value={e.questionId}
              name={`${String(question).replace(" ", "-")}`}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              key={i}
              onClick={() => onChange(e)}
              disabled={e.disabled}
            />
            <label
              htmlFor={`${id}-${i}`}
              className="ml-2 text-sm font-normal text-gray-900"
            >
              {e.option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const StepperContent: FC<StepperContentProps> = ({ data, onChange }) => {
  switch (data.data?.type) {
    case "textbox":
      return (
        <TextInput
          question={data.data?.message}
          onChange={(e) => {
            onChange(data.data?.id, data, e);
          }}
          value={data.value}
        />
      );
    case "radiobutton":
      return (
        <BooleanInput
          question={data.data.message}
          onChange={(e) => {
            onChange(data.data?.id, data, e);
          }}
          value={data.value}
        />
      );
    case "options":
      return (
        <OptionInput
          onChange={(e) => {
            onChange(data.data?.id, data, e);
          }}
          question={data.data.message}
          value={data.value}
          options={data.data.options}
        />
      );
    case "date":
      return (
        <>
          <div className="mb-2 font-normal text-sm">{data.data.message}</div>
          <input type="date" min={data.data.minDate} max={data.data.maxDate} className="mb-8 border rounded-sm px-3 text-[#808080]" onChange={(e) => onChange(data.data?.id, data, e.currentTarget.value)} />
        </>
      )
    default:
      return <></>;
  }
};

/**
 * Primary UI component for user interaction
 */

export const StepperForm: FC<StepperFormProps> = (_props) => {
  const [showImage, setShowImage] = useState("");

  let originalDataArray = [..._props.data];

  const modifyResponse = (...data: any) => {
    let modifiedDataArray = originalDataArray.map((ele) => {
      if (data[0] === ele.data.id) {
        return { ...ele, value: data[2] };
      }
      return ele;
    });
    _props.onChange(modifiedDataArray);
  };

  const submitResponse = (data: any) => {
    _props.onSubmit(data);
  };

  const lastQuestionType: any = _props.data[_props.data.length - 1].category;
  const lastQuestionAnswer: any = _props.data[_props.data.length - 1].value;

  const canComment = useMemo(() => {
    return _props.data[_props.data.length - 1].data.comments
  }, [_props.data])


  const onEnterValidates = (e: any) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z0-9\s]{0,256}$/.test(inputValue)) {
      !!_props.onChangeComment && _props.onChangeComment(inputValue);
    }
  };
  const supportDocumentTypeList = [
    { value: "Proof of Delivery", label: "Proof of Delivery" },
    { value: "Invoice", label: "Invoice" },
    { value: "Proof of Cancellation", label: "Proof of Cancellation" },
    { value: "Customer Communication", label: "Customer Communication" },
    { value: "Affidavit of Service", label: "Affidavit of Service" },
    { value: "Explanation Letter", label: "Explanation Letter" }
  ];

  const removeFileFromList = (i: any) => {
    let newFiles: any = [];
    [...(_props.uploadFiles || [])].forEach((e, k) => {

      if (i !== k) {
        newFiles.push(e);
      }
    });
    if (_props.setUploadFiles) {
      _props.setUploadFiles(newFiles);
    } else {
      console.error("setUploadFiles is not defined in props");
    }
  };

  const SupportDocumentFormTile = (_props: { file: any, docType: any, deleteFile: (file: any) => void }) => {
    const { file, deleteFile, docType } = _props;
    const validSize = useCallback((val: number) => {
      let kb = (val / 1024)
      let mb = (kb / 1024)
      return mb > 5
    }, [file])

    const _uc = (size: number) => {
      let kb = (size / 1024)
      let mb = (kb / 1024)
      if (kb < 1000) {
        return `${kb.toFixed(1)} KB`
      }
      return `${mb.toFixed(1)} MB`
    }

    const dataUrl = useMemo(() => {
      try {

        if (!!file && file.file) {
          return URL.createObjectURL(file.file);
        }
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
      return "";
    }, [file]);

    const choosePreview = () => {
      if (file.file.type === "application/pdf") {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener(
          "load",
          () => {
            var x = window.open();
            var embed = `<embed height='100%' width='100%' src='${reader.result}'/>`
            if (!!x) {
              x.document.write(embed)
              x.document.close()
            }
          },
          false
        );
      } else if (file.file?.type === "image/png" || file.file?.type === "image/jpg" || file.file?.type === "image/jpeg") {
        setShowImage(dataUrl)
      }
    }

    return (
      <div className="mb-2">
        <div className={'uploaddocument'}>
          <div className={'uploaddata'}>
            {!(file.file.type === "application/pdf") && <img src={dataUrl} alt="preview" height={50} width={50} style={{ width: "2.75rem" }} />}

            <span onClick={choosePreview} className={'uploadicon'}>
              <PhotoProvider>
                <PhotoView src={showImage}>
                  <Iconx name="ShowPW" color="#1F6EE2" size={24} />
                </PhotoView>
              </PhotoProvider>
            </span>
          </div>
          <div className={'uploaddoctype'}>
            <div >
              {docType}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {file.file?.name}
              </div>
              <div style={{ textTransform: "uppercase", paddingRight: "0.75rem" }}>
                {_uc(file.file?.size)}
              </div>
            </div>

          </div>
          <div className="px-5 pl-7">
            <span onClick={() => deleteFile(file)} style={{ cursor: "pointer" }}>
              <Iconx name="Close" color="red" size={24} />
            </span>
          </div>
        </div>

        <div className="">
          {validSize(file.file?.size) ? <div className={'errormsg'}>
            File size is more than 5MB, please upload files less than 5MB
          </div> : ""}
        </div>


      </div>
    )
  }
  return (
    <div>
      {_props.data?.map((ele, k) => {
        return (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitResponse(ele);
            }}
          >
            <div
              key={k}
              className={`${_props.data.length === k + 1 ? "" : "pointer-events-none"
                }`}
            >
              <StepperContent data={ele} onChange={modifyResponse} />
              <div
                key={k}
                className={`${_props.data.length === k + 1 ? "" : "hidden"}`}
              >
                {
                  (<div className="">
                    {["confirmation", "close"].includes(lastQuestionType) ? <div className="my-2 flex flex-col gap-2 font-normal text-sm">
                      <div className=" py-3">
                        <h1 style={{ display: "flex", justifyContent: "space-between", fontWeight: "500" }}>
                          <span>Upload Documents</span>
                        </h1>
                        <div className="pb-2">
                          <p className="text-[12px] ">Supported Formats : JPEG, JPG, PNG, PDF</p>
                          <p className="text-[12px] ">Max File Size : 5 MB</p>
                        </div>
                        <div className={`documentupload py-3 px-3 border border-slate-200 rounded-lg w-full grid grid-cols-2  gap-4 items-start`}>
                          <div style={{ paddingBottom: "2rem" }} >
                            <h2 style={{ paddingBottom: "1rem" }}>Document Type</h2>
                            <div style={{ maxWidth: "300px" }}>
                              <Select id="document-type"
                                selected={_props.supportDocumentType}
                                items={[...supportDocumentTypeList]}
                                onChange={(e: any) => _props.onSupportDoucmentType?.(e)}
                              ></Select>
                            </div>
                          </div>

                          <div>
                            <h2>Select Document</h2>
                            <div style={{ maxWidth: "300px" }}>
                           
                              <DropZone disabled={!!!_props.supportDocumentType} multiple className="pt-0 py-2" onUploadFile={(e) => {

                                let files = e.map((el: any) => ({ file: el, type: _props.supportDocumentType }))
                                if (!!_props.onUploadFiles) {
                                  _props.onUploadFiles(files);
                                }
                              }} extensions={["pdf", "png", "jpg", "jpeg"]} >
                                <div className={` ${!!!_props.supportDocumentType ? "supporttype" : "notsupporttype"}`} style={{ color: "#A9A9A9" }}>
                                  <div className='drag'>
                                    <span> Drag and Drop your files here or <span className={!!_props.supportDocumentType ? "supportbrowse" : ""}>Browse Files</span></span>
                                    <span style={{ paddingLeft: "8px" }} >
                                      <Iconx name="Upload" size={20} color={!!_props.supportDocumentType ? "#1F6EE2" : "#000000"} />
                                    </span>
                                  </div>
                                </div>
                              </DropZone>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 pt-3">
                          {_props.uploadFiles.map((e: any, k: number) => {
                            return (
                              <>
                                <SupportDocumentFormTile docType={e.type.label} key={k} file={e} deleteFile={() => removeFileFromList(k)} />
                              </>
                            )
                          }

                          )}
                        </div>

                        {!!showImage && (
                          <Model model={!!showImage} close={() => setShowImage("")}>
                            <div>
                              <PhotoProvider>
                               <PhotoView src={showImage}>
                                  <img src={showImage} alt="" style={{ height: '95vh' }} />
                                </PhotoView>
                              </PhotoProvider>
                            </div>
                            <CloseModel close={() => setShowImage("")} />
                          </Model>
                        )}
                      </div>


                      {canComment ?

                        <div className="w-full">
                          <h3 className="">Comments</h3>

                          <div>
                            <textarea
                              style={{ width: "100%" }}
                              id="comments" className="p-2 font-normal rounded-md bg-[#ededed]"
                              cols={20} rows={2} maxLength={256}
                              onChange={(e: any) => onEnterValidates(e)}
                              placeholder="Enter comments" value={_props.comment}
                            />
                            <div className="flex items-center justify-between ">
                              <span className="">Only numbers and text are allowed</span>
                              <div className="text-right">
                                {_props.comment?.length}/256
                              </div>
                            </div>
                          </div>




                        </div>

                        : ""}


                    </div> : ""}
                  </div>)
                }


                <div className="flex flex-row gap-2">
                  <Button
                    type="submit"
                    size="small"
                    className={classNames({
                      "pointer-events-none !bg-secondary !text-buttonText": lastQuestionAnswer === ""
                    })}
                  >
                    Next
                  </Button>
                  <Button
                    onClick={() => {
                      _props.onChange([_props.data[0]]);
                      _props.onReset();
                    }}
                    type="reset"
                    size="small"
                  >
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    size="small"
                    className={classNames({
                      "pointer-events-none !bg-secondary !text-buttonText": !(lastQuestionType === 'close' || lastQuestionType === 'confirmation')
                    })}
                  >
                    Submit
                  </Button>
                </div>
              </div>

            </div>
          </form>
        );
      })}
    </div>
  );
};
