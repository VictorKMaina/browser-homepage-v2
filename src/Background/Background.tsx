import styles from "./background.module.scss";

export default function Background() {
  return (
    <div className={styles['bg-wrapper']}>
      <div className={styles['bg-overlay']}></div>
      
      <img src="https://images.unsplash.com/photo-1673950455470-d872dcec6eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="default bg image" />
    </div>
  );
}
