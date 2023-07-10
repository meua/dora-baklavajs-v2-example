import { defineNode, NodeInterface } from "baklavajs";

export const CarlaGpsNode = defineNode({
  type: "CarlaGpsNode",
  title: "CarlaGps",
  inputs: {
    objective_waypoints: () => new NodeInterface("objective_waypoints"),
    opendrive: () => new NodeInterface("opendrive"),
    position: () => new NodeInterface("position")
  },
  outputs: {
    gps_waypoints: () => new NodeInterface("gps_waypoints")
  },
  calculate() {
    return {
      gps_waypoints: ""
    };
  }
});
