import { defineNode, NodeInterface } from "baklavajs";

export const ObstacleLocationNode = defineNode({
  type: "ObstacleLocationNode",
  title: "ObstacleLocation",
  inputs: {
    position: () => new NodeInterface("position"),
    lidar_pc: () => new NodeInterface("lidar_pc"),
    bbox: () => new NodeInterface("bbox")
  },
  outputs: {
    obstacles: () => new NodeInterface("obstacles")
  },
  calculate() {
    return {
      obstacles: ""
    };
  }
});
