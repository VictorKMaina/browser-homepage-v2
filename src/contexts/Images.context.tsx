import { Image } from "@/models/Image/Image.interface";
// import data from "../data";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useEffect } from "react";
import generateID from "@/utility/generateImageID";
import validateImageUrl from "@/utility/validateImageUrl";

export const ImagesContext = createContext(
  [] as unknown as [Image[], Dispatch<React.SetStateAction<Image[]>>]
);

export function useImages() {
  const [images, setImages] = useContext(ImagesContext);
  return {
    images: images,
    createImage: (url: string, description: string) => {
      const image: Image = {
        id: generateID(images),
        imageUrl: url,
        description,
      };
      try {
        validateImageUrl(images, url);
        setImages((prev) => [...prev, image]);
      } catch (err) {
        throw err;
      }
    },
    deleteImages: (imageIDs: string[]) => {
      setImages((prev) => prev.filter((image) => !imageIDs.includes(image.id)));
    },
  };
}

export function ImagesProvider({ children }: PropsWithChildren) {
  const [images, setImages] = useState(() => {
    const imagesLocalStorage = localStorage.getItem("images");
    if (imagesLocalStorage) return JSON.parse(imagesLocalStorage) as Image[];
    else return [] as Image[];
  });

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  return (
    <ImagesContext.Provider value={[images, setImages]}>
      {children}
    </ImagesContext.Provider>
  );
}
