import Header from "./Header/Header";
import Center from "./Center/Center";
import Arrows from "./Arrows";
import Footer from "./Footer/Footer";
import styles from "./main.module.scss";

interface MainProps {
  onAsideToggle: () => void
}

export default function Main({ onAsideToggle }: MainProps) {
  return (
    <div className={styles['wrapper']}>
      <Header />
      <Center />
      <Arrows />
      <Footer onAsideToggle={onAsideToggle} />
    </div>
  );
}
