import React, { Component, ErrorInfo, ReactNode } from "react";

import { Props, State } from './index.interface';
import { Button } from "../Button";


export const ErrorFun = () => {
  const _err = async () => {
    throw "stuff"
  }
  return (
    <div>
      <button onClick={() => _err()}>click button</button>
    <h1>This is some stuff</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quibusdam expedita natus dignissimos consequuntur tempora voluptate vitae, distinctio, fugit rerum ullam harum impedit hic accusamus ipsam. Necessitatibus soluta repellendus totam, consequatur porro fugiat quidem id nesciunt rerum odit tempore quas natus, expedita quibusdam numquam laboriosam nemo explicabo dicta voluptatem blanditiis magnam perferendis odio, et maxime? Fuga, maiores similique! Consectetur, eveniet iusto repellendus quam est deleniti? Laborum perferendis recusandae accusamus, quam asperiores at obcaecati mollitia numquam aperiam fugit tempore consequuntur exercitationem temporibus odit magnam a sint alias labore. Magni non harum earum, praesentium cupiditate laudantium expedita eligendi rem totam obcaecati nobis.
    </p>
    </div>
  )
}

/**
 * Primary UI component for user interaction
 */
export class ErrorBoundary extends Component<Props, State> {
   constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error: any, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

