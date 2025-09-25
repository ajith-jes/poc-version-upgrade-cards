export type StepperFormProps = {
  data: DataType[];
  className?: string,
  onChange: (...val: any) => void;
  onSubmit: (...val: any) => void;
  comment?: string
  onChangeComment?: (...val: any) => void;
  onReset: () => void;
  supportDocumentType?:any,
  supportDocumentTypeList?:any,
  uploadFiles?:any,
  setUploadFiles?: (files: any) => void;
  onUploadFiles?:(files: any) => void;
  onSupportDoucmentType?:(...val: any) => void;
};

export type DataType = {
  category: "question" | "confirmation" | "close";
  data: {
    id: string;
    type: "textbox" | "radiobutton" | "button" | "options" | "date";
    message: string;
    options: any[];
    minDate: string
    maxDate: string
    comments: boolean
  };
  value: string;
};

export type StepperContentProps = {
  data: DataType;
  onChange: (...val: any) => void;
};

export type TextInputProps = {
  value: any;
  onChange: (val: any) => void;
  question: string;
};

export type BooleanInputProps = {
  onChange: (val: "Yes" | "No") => void;
  question: string;
  value: any;
};

export type OptionInputProps = {
  onChange: (val: string) => void;
  options: any[] | undefined | null;
  value: string;
  question: string;
};
