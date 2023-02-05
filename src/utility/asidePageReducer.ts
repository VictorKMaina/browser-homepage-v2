export function asidePageReducer(state: string, action: { type: string }) {
  switch (action.type) {
    case "saved_images":
      return "saved_images";
    case "image_form":
      return "image_form";
  }
  return "saved_images";
}
