import { Image } from "@/models/Image/Image.interface";
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

export function useImagesStore() {
  const [images, setImages] = useContext(ImagesContext);

  return {
    images: images,
    createImage: (url: string, description: string) => {
      createImage(images, url, description, setImages);
    },
    deleteImages: (imageIDs: string[]) => deleteImages(imageIDs, setImages),
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

function createImage(
  images: Image[],
  url: string,
  description: string,
  set: Dispatch<React.SetStateAction<Image[]>>
) {
  const image: Image = {
    id: generateID(images),
    imageUrl: url,
    description,
  };
  try {
    validateImageUrl(images, url);
    set((prev) => [...prev, image]);
  } catch (err) {
    throw err;
  }
}

function deleteImages(
  imageIDs: string[],
  set: Dispatch<React.SetStateAction<Image[]>>
) {
  set((prev) => prev.filter((image) => !imageIDs.includes(image.id)));
}
