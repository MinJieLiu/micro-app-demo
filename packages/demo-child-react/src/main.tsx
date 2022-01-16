import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { AppProps } from "./App";

// 单独开发环境
if (!import.meta.url.includes("microAppEnv")) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default (container: HTMLElement) => {
  let handleRender: (props: AppProps) => void;

  function Main(props: AppProps) {
    const [state, setState] = React.useState(props);
    handleRender = setState;
    return <App {...state} />;
  }

  return {
    mount(props: AppProps) {
      ReactDOM.render(<Main {...props} />, container);
    },
    render(props: AppProps) {
      handleRender?.(props);
    },
    unmount() {
      ReactDOM.unmountComponentAtNode(container);
    },
  };
};
