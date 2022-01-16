import {
  unstable_HistoryRouter as HistoryRouter,
  Link,
} from "react-router-dom";
import Pages from "./pages";
import { history } from "./common/history";
import logo from "./logo.svg";
import styles from "./App.module.less";

function App() {
  return (
    <HistoryRouter history={history}>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <div className={styles.appLogo}>
            <img src={logo} alt="logo" />
            <h3>Vite 微前端示例</h3>
          </div>

          <div className={styles.appLink}>
            <Link to="/">首页</Link>
            <Link to="/react">React 子应用</Link>
            <Link to="/vue">Vue 子应用</Link>
          </div>
        </header>

        <div className={styles.appContent}>
          <Pages />
        </div>
      </div>
    </HistoryRouter>
  );
}

export default App;
