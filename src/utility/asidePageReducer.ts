type AsidePageReducerAction = { type: "saved_images" | "image_form" }

export function asidePageReducer(state: string, action: AsidePageReducerAction) {
  switch (action.type) {
    case "saved_images":
      return "saved_images";
    case "image_form":
      return "image_form";
  }
  // return "saved_images";
}
