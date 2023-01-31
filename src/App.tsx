import Main from "./Main/Main";
import Aside from "./Aside/Aside";
import Background from "./Background/Background";
import styles from "./app.module.scss";

export default function App() {
  return (
    <>
      <div /* style={{transform: 'translateX(425px)'}} */ className={styles["outer-wrapper"]}>
        <Aside />
        <Main />
      </div>
      <Background />
    </>
  );
}
