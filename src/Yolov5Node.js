import { defineNode, NodeInterface } from "baklavajs";

export const Yolov5Node = defineNode({
  type: "Yolov5Node",
  title: "Yolov5",
  inputs: {
    image: () => new NodeInterface("image")
  },
  outputs: {
    bbox: () => new NodeInterface("bbox")
  },
  calculate() {
    return {
      bbox: ""
    };
  }
});
