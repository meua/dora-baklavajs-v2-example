import { defineNode, NodeInterface } from "baklavajs";

export const PidControlNode = defineNode({
  type: "PidControlNode",
  title: "PidControl",
  inputs: {
    waypoints: () => new NodeInterface("waypoints"),
    position: () => new NodeInterface("position"),
    speed: () => new NodeInterface("speed")
  },
  outputs: {
    control: () => new NodeInterface("control")
  },
  calculate() {
    return {
      control: ""
    };
  }
});
