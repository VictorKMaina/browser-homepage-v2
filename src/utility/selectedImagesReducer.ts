import { SelectedImage } from "@/models/Image/Image.interface";

interface SelectedImagesReducerAction {
  type: "select" | "delete" | "reset";
  id?: string;
}

export default function selectedImagesReducer(
  state: SelectedImage[],
  action: SelectedImagesReducerAction
) {
  switch (action.type) {
    case "select":
      return state.map((image) => {
        return image.id === action.id
          ? { ...image, selected: !image.selected }
          : image;
      });

    case "reset":
      return state.map((image) => ({ ...image, selected: false }));

    case "delete":
      return state.filter((image) => !image.selected && image);

    default:
      throw new Error("Action must be provided.");
  }
}
