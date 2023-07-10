import { defineNode, IntegerInterface, NodeInterface } from "baklavajs";

export const OasisAgentNode = defineNode({
  type: "OasisAgentNode",
  title: "OasisAgent",
  inputs: {
    tick: () => new IntegerInterface("tick", 400)
  },
  outputs: {
    objective_waypoints: () => new NodeInterface("objective_waypoints"),
    opendrive: () => new NodeInterface("opendrive"),
    position: () => new NodeInterface("position"),
    speed: () => new NodeInterface("speed"),
    lidar_pc: () => new NodeInterface("lidar_pc"),
    image: () => new NodeInterface("image")
  },
  calculate() {
    return {
      objective_waypoints: "",
      opendrive: "",
      position: "",
      image: "",
      speed: "",
      lidar_pc: ""
    };
  }
});
