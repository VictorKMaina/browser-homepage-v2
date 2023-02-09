import Arrows from "@/components/Arrows";
import Aside from "@/layout/Aside";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Midsection from "@/layout/MidSection";
import { classNames } from "@/helpers/helpers";
import styles from "@styles/modules/AppWrapper.module.scss";
import { useAside } from "@/contexts/Aside.context";

export default function AppWrapper() {
  const [asideOpen,] = useAside();

  return (
    <div
      className={classNames(
        styles["app-wrapper"],
        asideOpen && styles["slide"]
      )}
    >
      <Header />
      <Midsection />
      <Footer />

      {asideOpen && <Aside />}
      <Arrows />
    </div>
  );
}
