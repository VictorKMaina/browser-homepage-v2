import { Image } from "@/models/Image/Image.class";
import ImageInterface from "@/models/Image/Image.interface";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export const ImagesContext = createContext(
  [] as unknown as [Image[], Dispatch<React.SetStateAction<Image[]>>]
);

export function useImages() {
  const imageState = useContext(ImagesContext);
  return imageState;
}

export function ImagesProvider({ children }: PropsWithChildren) {
  const imagesState = useState(
    imagesTest.map(
      (image) => new Image(image.imageUrl, image.description, image.id)
    )
  );
  return (
    <ImagesContext.Provider value={imagesState}>
      {children}
    </ImagesContext.Provider>
  );
}

const imagesTest: ImageInterface[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1532795077981-fc1c26555bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description: "Bloodmoon from Switzerland",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description:
      "Saturn as seen from the Cassini–Huygens space-research mission",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "Neptune as seen from Voyager 2 from 4.4 million miles",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description:
      "View of the Earth as seen by the Apollo 17 crew traveling toward the moon",
  },
];
