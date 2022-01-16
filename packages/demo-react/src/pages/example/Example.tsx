import styles from "./Example.module.less";

export function Example() {
  return (
    <div className={styles.example}>
      <h1 className={styles.title}>
        极致<b>简单</b>、<b>灵活</b>、<b>透明</b>和<b>组件化</b>的微应用解决方案
      </h1>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h2>💡 简单</h2>
          <sub>核心不足 100 行代码，无需多余的文档</sub>
        </div>
        <div className={styles.feature}>
          <h2>⚡️灵活</h2>
          <sub>通过约定的方式接入，也可以渐进增强</sub>
        </div>
        <div className={styles.feature}>
          <h2>🛠️ 透明</h2>
          <sub>无任何劫持方案，更多逻辑透明性</sub>
        </div>
        <div className={styles.feature}>
          <h2>📦 组件化</h2>
          <sub>组件化的渲染及参数通信</sub>
        </div>
        <div className={styles.feature}>
          <h2>🔩 基于 ESM</h2>
          <sub>支持 Vite，面向未来</sub>
        </div>
        <div className={styles.feature}>
          <h2>🔑 向下兼容</h2>
          <sub>可选 SystemJS 方案，兼容低版本浏览器</sub>
        </div>
      </div>

      <a
        className={styles.button}
        href="https://github.com/MinJieLiu/micro-app-demo"
      >
        从 GitHub 克隆
      </a>
    </div>
  );
}
