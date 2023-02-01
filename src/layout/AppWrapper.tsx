import Arrows from "@/components/Arrows";
import Aside from "@/layout/Aside";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Midsection from "@/layout/MidSection";
import classNames from "@/helpers/classNames";
import styles from "@styles/modules/AppWrapper.module.scss";
import { useState } from "react";

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
      <Midsection />
      <Footer onAsideToggle={handleAsideToggle} />

      <Aside onAsideToggle={handleAsideToggle} />
      <Arrows />
    </div>
  );
}
