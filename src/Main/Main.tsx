import Header from "./Header/Header";
import Center from "./Center/Center";
import Arrows from "./Arrows";
import Footer from "./Footer/Footer";

export default function Main() {
  return (
    <div className="wrapper">
      <Header />
      <Center />
      <Arrows />
      <Footer />
    </div>
  );
}
