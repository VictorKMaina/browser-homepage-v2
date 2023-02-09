import AppWrapper from "./layout/AppWrapper";
import BgWrapper from "./layout/BgWrapper";
import { useState } from "react";
import { AsideProvider } from "./contexts/Aside.context";
import { ImagesProvider } from "./contexts/Images.context";
import {
  BackgroundProvider,
} from "./contexts/Background.context";

export default function App() {
  return (
    <AsideProvider>
      <ImagesProvider>
        <BackgroundProvider>
          <AppWrapper />
          <BgWrapper />
        </BackgroundProvider>
      </ImagesProvider>
    </AsideProvider>
  );
}
