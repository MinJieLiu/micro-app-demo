import React from 'react';
import ReactDOM from 'react-dom';
import { defineMicroApp } from '@micro-web/sub';
import App, { AppProps } from './App';
import './index.css';

// 单独开发环境
if (!import.meta.url.includes('microAppEnv')) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default defineMicroApp((container) => {
  function render(props: AppProps) {
    ReactDOM.render(<App {...props} />, container);
  }
  return {
    mount: render,
    render: render,
    unmount() {
      ReactDOM.unmountComponentAtNode(container);
    },
  };
});
