import {
  EmptyImageURLError,
  InvalidImageURLError,
  ImageURLExistsError,
  NoLocalStorageImageCollection,
} from "@/models/Image/ImageErrors.class";
import { Image } from "@/models/Image/Image.interface";

export default function validateImageUrl(images: Image[], imageUrl: string): void {
  // Check for empty string
  if (!imageUrl) throw new EmptyImageURLError();

  // Check if url begins with http protocol
  try {
    const newUrl = new URL(imageUrl);
    if (newUrl.protocol !== "http:" && newUrl.protocol !== "https:") {
      throw new InvalidImageURLError();
    }
  } catch (err) {
    throw new InvalidImageURLError();
  }

  // Check if url already exists in image collection
  const existingImage = images.find((image) => image.imageUrl === imageUrl);
  if (existingImage) {
    throw new ImageURLExistsError(existingImage);
  }

  // Check if images exists in localStorage
  const imagesLocalStorage = localStorage.getItem("images");
  if (!imagesLocalStorage) throw new NoLocalStorageImageCollection();
}
