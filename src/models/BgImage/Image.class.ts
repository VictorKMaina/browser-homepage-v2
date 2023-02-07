import ImageInterface from "./Image.interface";

export class Image implements ImageInterface {
  constructor(imageUrl: string, description: string, id = "") {
    this.imageUrl = imageUrl;
    this.description = description;
    this.id = id;
  }

  id: string;
  imageUrl: string;
  description: string;
}
