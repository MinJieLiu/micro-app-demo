import logo from "../../logo.svg";
import styles from "./Foo.module.css";

const logoURL = new URL(logo, import.meta.url);

export default function Foo() {
  return (
    <>
      <img className={styles.img} alt="" src={logoURL.href} />
      <div className={styles.foo}>当前位置：子应用子路由</div>
    </>
  );
}
