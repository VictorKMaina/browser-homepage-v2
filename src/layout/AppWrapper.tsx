import Arrows from "@/components/Arrows";
import Aside from "@/layout/Aside";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Midsection from "@/layout/MidSection";
import { classNames } from "@/helpers/helpers";
import styles from "@styles/modules/AppWrapper.module.scss";
import { useContext } from "react";
import { AsideContext } from "@/contexts/Aside.context";

export default function AppWrapper() {
  const [asideOpen, setAsideOpen] = useContext(AsideContext);

  function handleAsideToggle() {
    setAsideOpen((prevAsideOpen) => !prevAsideOpen);
  }

  return (
    <div
      className={classNames(
        styles["app-wrapper"],
        asideOpen && styles["slide"]
      )}
    >
      <Header />
      <Midsection />
      <Footer onToggleAside={handleAsideToggle} />

      <Aside onToggleAside={handleAsideToggle} />
      <Arrows />
    </div>
  );
}
