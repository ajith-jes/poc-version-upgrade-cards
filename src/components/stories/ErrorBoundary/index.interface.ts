import { ErrorInfo, ReactNode } from "react";

export type ErrorMsg = {
  error: Error,
  errorInfo: ErrorInfo
}

export interface Props {
  children?: ReactNode;
  errorLogger?: (err: ErrorMsg) => void
}

export interface State {
  error: any;
  errorInfo: any;
}