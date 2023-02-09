import { Image } from "@/models/Image/Image.interface";

export default function generateID(images: Image[]): string {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  while (true) {
    let id = "";
    for (let i = 0; i < 8; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    if (images.every((image) => image.id !== id)) return id;
  }
}
