<template>
  <!--
    By default, the editor completely fills its parent HTML element.
    If you directly use the editor in the <body> element, make sure to use
    a wrapper <div> with specified width and height properties:
          -->
  <div style="width: 100vw; height: 100vh">
    <baklava-editor :view-model="baklava" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  EditorComponent,
  useBaklava,
  DependencyEngine,
  applyResult
} from "baklavajs";
import "@baklavajs/themes/dist/syrup-dark.css";

// import { DisplayNode } from "./DisplayNode";
// import { MathNode } from "./MathNode";
import { DoraNode } from "./DoraNode";
import { OasisAgentNode } from "./OasisAgentNode";
import { CarlaGpsNode } from "./CarlaGpsNode";
import { Yolov5Node } from "./Yolov5Node";
import { ObstacleLocationNode } from "./ObstacleLocationNode";
import { FOTNode } from "./FOTNode";
import { PidControlNode } from "./PidControlNode";
import { PlotNode } from "./PlotNode";

export default defineComponent({
  components: {
    "baklava-editor": EditorComponent
  },
  setup() {
    const baklava = useBaklava();
    const engine = new DependencyEngine(baklava.editor);

    // baklava.editor.registerNodeType(MathNode);
    // baklava.editor.registerNodeType(DisplayNode);
    baklava.editor.registerNodeType(DoraNode);
    baklava.editor.registerNodeType(OasisAgentNode);
    baklava.editor.registerNodeType(CarlaGpsNode);
    baklava.editor.registerNodeType(Yolov5Node);
    baklava.editor.registerNodeType(ObstacleLocationNode);
    baklava.editor.registerNodeType(FOTNode);
    baklava.editor.registerNodeType(PidControlNode);
    baklava.editor.registerNodeType(PlotNode);

    const token = Symbol();
    engine.events.afterRun.subscribe(token, (result) => {
      engine.pause();
      applyResult(result, baklava.editor);
      engine.resume();
    });

    engine.start();

    // Add some nodes for demo purposes
    function addNodeWithCoordinates(nodeType, x, y) {
      const n = new nodeType();
      baklava.displayedGraph.addNode(n);
      n.position.x = x;
      n.position.y = y;
      return n;
    }

    const node1 = addNodeWithCoordinates(DoraNode, 300, 140);
    const node2 = addNodeWithCoordinates(OasisAgentNode, 550, 140);
    const node3 = addNodeWithCoordinates(CarlaGpsNode, 800, 140);
    const node4 = addNodeWithCoordinates(Yolov5Node, 1050, 140);
    const node5 = addNodeWithCoordinates(ObstacleLocationNode, 1300, 140);
    const node6 = addNodeWithCoordinates(FOTNode, 1550, 140);
    const node7 = addNodeWithCoordinates(PidControlNode, 1800, 140);
    const node8 = addNodeWithCoordinates(PlotNode, 2050, 140);
    // baklava.displayedGraph.addConnection(
    // node1.outputs.result,
    // node2.inputs.value
    // node3.outputs.tick,
    // node4.outputs.objective_waypoints,
    // node4.outputs.opendrive,
    // node4.outputs.position,
    // node4.outputs.image,
    // node4.outputs.speed,
    // node4.outputs.lidar_pc,
    // node5.outputs.gps_waypoints,
    // );
    baklava.displayedGraph.addConnection(node1.outputs.tick, node2.inputs.tick);
    baklava.displayedGraph.addConnection(
      node2.outputs.objective_waypoints,
      node3.inputs.objective_waypoints
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.opendrive,
      node3.inputs.opendrive
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.position,
      node3.inputs.position
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.image,
      node4.inputs.image
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.lidar_pc,
      node5.inputs.lidar_pc
    );
    baklava.displayedGraph.addConnection(node4.outputs.bbox, node5.inputs.bbox);
    baklava.displayedGraph.addConnection(
      node2.outputs.position,
      node5.inputs.position
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.position,
      node6.inputs.position
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.speed,
      node6.inputs.speed
    );
    baklava.displayedGraph.addConnection(
      node5.outputs.obstacles,
      node6.inputs.obstacles
    );

    baklava.displayedGraph.addConnection(
      node3.outputs.gps_waypoints,
      node6.inputs.gps_waypoints
    );

    baklava.displayedGraph.addConnection(
      node2.outputs.position,
      node7.inputs.position
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.speed,
      node7.inputs.speed
    );
    baklava.displayedGraph.addConnection(
      node6.outputs.waypoints,
      node7.inputs.waypoints
    );

    baklava.displayedGraph.addConnection(
      node2.outputs.image,
      node8.inputs.image
    );
    baklava.displayedGraph.addConnection(node4.outputs.bbox, node8.inputs.bbox);
    baklava.displayedGraph.addConnection(
      node5.outputs.obstacles,
      node8.inputs.obstacles
    );

    baklava.displayedGraph.addConnection(
      node3.outputs.gps_waypoints,
      node8.inputs.gps_waypoints
    );

    baklava.displayedGraph.addConnection(
      node2.outputs.position,
      node8.inputs.position
    );
    baklava.displayedGraph.addConnection(
      node2.outputs.speed,
      node7.inputs.speed
    );
    baklava.displayedGraph.addConnection(
      node6.outputs.waypoints,
      node8.inputs.waypoints
    );
    baklava.displayedGraph.addConnection(
      node7.outputs.control,
      node8.inputs.control
    );
    return { baklava };
  }
});
</script>
