import AppWrapper from "./layout/AppWrapper";
import BgWrapper from "./layout/BgWrapper";
import { useState } from "react";
import { AsideProvider } from "./contexts/Aside.context";

export default function App() {
  const asideState = useState(false);

  return (
    <AsideProvider value={asideState}>
      <AppWrapper />
      <BgWrapper />
    </AsideProvider>
  );
}
