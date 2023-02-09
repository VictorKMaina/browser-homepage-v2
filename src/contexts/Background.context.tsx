import { randomNumber } from "@/helpers/random.helper";
import { createContext, useContext, useState, useMemo } from "react";
import { useImagesStore } from "./Images.context";

type ContextType = [number, React.Dispatch<React.SetStateAction<number>>];

export const BackgroundContext = createContext([] as unknown as ContextType);

const useImagesAmount = () => {
  const { images } = useImagesStore();
  const imagesAmount = useMemo(() => images.length, [images]);
  return imagesAmount;
};

export function BackgroundProvider({ children }: React.PropsWithChildren) {
  const imagesAmount = useImagesAmount();
  const [currentIndex, setCurrentIndex] = useState(randomNumber(imagesAmount - 1));

  return (
    <BackgroundContext.Provider value={[currentIndex, setCurrentIndex]}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  const [currentIndex, setCurrentIndex] = useContext(BackgroundContext);
  const imagesAmount = useImagesAmount();
  return {
    currentIndex,
    setCurrentIndex,

    nextIndex: () => {
      setCurrentIndex((prev) => {
        if (prev >= imagesAmount - 1) return 0;
        else return prev + 1;
      });
    },

    prevIndex: () => {
      setCurrentIndex((prev) => {
        if (prev <= 0) return imagesAmount - 1;
        else return prev - 1;
      });
    },
  };
}
