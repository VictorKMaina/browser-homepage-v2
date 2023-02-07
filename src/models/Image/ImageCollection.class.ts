import {
  EmptyImageURLError,
  ImageURLExistsError,
  InvalidImageURLError,
  NoLocalStorageImageCollection,
} from "./ImageErrors.class";

import { Image, ImageInterface } from "./Image.class";

export class ImageCollection {
  constructor(collectionName: string) {
    this.name = collectionName
    this.images = [];

    // Check local storage for images and initialize collection with them
    const imagesLocalStorage = localStorage.getItem(collectionName);
    if (imagesLocalStorage) {
      const parsedImages: ImageInterface[] = JSON.parse(imagesLocalStorage);
      if (parsedImages.length > 0) {
        parsedImages.forEach((image) => {
          this.createImage(image.imageUrl, image.description, image.id);
        });
      }
    } else {
      // Create new localstorage key on initialization
      this.updateLocalStorage();
    }
  }

  name: string;

  private images: Image[];

  private updateLocalStorage(): void {
    localStorage.setItem(this.name, JSON.stringify(this.images));
  }

  private generateID(length: number): string {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = "";

    while (true) {
      for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
      }

      if (this.images.every((image) => image.id !== id)) break;
    }

    return id;
  }

  get allImages(): Image[] {
    return this.images;
  }

  public validateUrl(imageUrl: string): void {
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
    const existingImage = this.images.find(
      (image) => image.imageUrl === imageUrl
    );
    if (existingImage) {
      throw new ImageURLExistsError(existingImage);
    }

    // Check if images exists in localStorage
    const imagesLocalStorage = localStorage.getItem("images");
    if (!imagesLocalStorage) throw new NoLocalStorageImageCollection();
  }

  public createImage(
    imageUrl: string,
    description: string,
    id?: string
  ): Image {
    try {
      this.validateUrl(imageUrl);

      const image = new Image(imageUrl, description);

      if (id) image.id = id;
      else image.id = this.generateID(8);

      this.images.push(image);

      this.updateLocalStorage();

      return image;
    } catch (error) {
      throw error;
    }
  }
}
