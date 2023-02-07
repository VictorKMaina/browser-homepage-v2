import AppWrapper from "./layout/AppWrapper";
import BgWrapper from "./layout/BgWrapper";
import { useState } from "react";
import { AsideProvider } from "./contexts/Aside.context";

export default function App() {
  const asideState = useState(true);

  return (
    <AsideProvider>
      <AppWrapper />
      <BgWrapper />
    </AsideProvider>
  );
}
