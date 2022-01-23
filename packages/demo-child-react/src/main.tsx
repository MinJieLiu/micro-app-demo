import React from 'react';
import ReactDOM from 'react-dom';
import { withReactMicroApp } from '@micro-web/sub';
import './index.css';
import App from './App';

// 单独开发环境
if (!import.meta.url.includes('microAppEnv')) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default withReactMicroApp(App);
