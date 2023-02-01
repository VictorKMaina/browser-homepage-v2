import Main from "./Main/Main";
import Aside from "./Aside/Aside";
import Background from "./Background/Background";
import styles from "./app.module.scss";
import { useState } from "react";

export default function App() {
  const [asideShown, setAsideShown] = useState(false);

  function handleAsideToggle(): void {
    setAsideShown((prevAsideShown) => !prevAsideShown);
  }

  return (
    <>
      <div
        style={{
          transform: asideShown ? "translateX(425px)" : "translateX(0)",
        }}
        className={styles["outer-wrapper"]}
      >
        <Aside onAsideToggle={handleAsideToggle} />
        <Main onAsideToggle={handleAsideToggle} />
      </div>
      <Background />
    </>
  );
}
