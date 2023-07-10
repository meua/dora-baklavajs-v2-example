import { defineNode, NodeInterface } from "baklavajs";

export const FOTNode = defineNode({
  type: "FOTNode",
  title: "FOT",
  inputs: {
    gps_waypoints: () => new NodeInterface("gps_waypoints"),
    position: () => new NodeInterface("position"),
    speed: () => new NodeInterface("speed"),
    obstacles: () => new NodeInterface("obstacles")
  },
  outputs: {
    waypoints: () => new NodeInterface("waypoints")
  },
  calculate() {
    return {
      waypoints: ""
    };
  }
});
