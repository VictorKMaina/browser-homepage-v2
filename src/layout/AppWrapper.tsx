import Aside from "@/layout/Aside";
import Arrows from "@/components/Arrows";
import Center from "@/layout/MidSection";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { useState } from "react";
import classNames from "@/services/classNames";
import styles from "@styles/modules/AppWrapper.module.scss";

export default function AppWrapper() {
  const [asideShown, setAsideShown] = useState(false);

  function handleAsideToggle(): void {
    setAsideShown((prevAsideShown) => !prevAsideShown);
  }

  return (
    <div
      className={classNames(
        styles["app-wrapper"],
        asideShown && styles["slide"]
      )}
    >
      <Header />
      <Center />
      <Footer onAsideToggle={handleAsideToggle} />

      <Aside onAsideToggle={handleAsideToggle} />
      <Arrows />
    </div>
  );
}
