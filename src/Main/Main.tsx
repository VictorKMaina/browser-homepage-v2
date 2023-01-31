import Header from "./Header/Header";
import Center from "./Center/Center";
import Arrows from "./Arrows";
import Footer from "./Footer/Footer";
import styles from "./main.module.scss";

export default function Main() {
  return (
    <div className={styles['wrapper']}>
      <Header />
      <Center />
      <Arrows />
      <Footer />
    </div>
  );
}
