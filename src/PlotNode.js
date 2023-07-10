import { defineNode, NodeInterface } from "baklavajs";

export const PlotNode = defineNode({
  type: "PlotNode",
  title: "Plot",
  inputs: {
    control: () => new NodeInterface("control", ""),
    waypoints: () => new NodeInterface("waypoints", ""),
    gps_waypoints: () => new NodeInterface("gps_waypoints", ""),
    position: () => new NodeInterface("position", ""),

    obstacles: () => new NodeInterface("obstacles", ""),
    image: () => new NodeInterface("image", ""),
    bbox: () => new NodeInterface("bbox", "")
  }
});
