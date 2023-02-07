import ImageInterface from "./Image.interface";

export class Image implements ImageInterface {
  constructor(imageUrl: string, description: string, id = "") {
    this.imageUrl = imageUrl;
    this.description = description;
    this.id = id;
    this.selected = false;
  }

  id: string;
  imageUrl: string;
  description: string;
  selected: boolean;
}
