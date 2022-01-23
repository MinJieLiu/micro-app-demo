import logo from '../../logo.svg';
import styles from './Foo.module.css';

export default function Foo() {
  return (
    <>
      <img className={styles.img} alt="" src={logo} />
      <div className={styles.foo}>当前位置：子应用子路由</div>
    </>
  );
}
