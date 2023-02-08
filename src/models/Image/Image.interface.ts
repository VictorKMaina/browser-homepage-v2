export interface Image {
  id: string;
  imageUrl: string;
  description: string;
  // selected?: boolean;
}

export interface SelectedImage extends Image {
  selected: boolean;
}