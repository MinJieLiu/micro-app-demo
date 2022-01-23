import { Routes, Route } from 'react-router-dom';
import { MicroApp } from '@micro-web/app';
import { history } from '../common/history';
import { Example } from './example';

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      <Route
        path="/react/*"
        element={
          <MicroApp
            key="react"
            className="micro-app"
            entry="//localhost:3002/react/src/main.tsx"
            fallback="加载中"
            history={history}
          />
        }
      />
      <Route
        path="/vue/*"
        element={
          <MicroApp
            key="vue"
            className="micro-app"
            entry="//localhost:3004/vue/src/main.ts"
            fallback="加载中"
            history={history}
          />
        }
      />
    </Routes>
  );
}
