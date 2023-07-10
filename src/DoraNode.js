import { defineNode, NumberInterface } from "baklavajs";

export const DoraNode = defineNode({
  type: "DoraNode",
  title: "Dora",
  outputs: {
    tick: () => new NumberInterface("tick", 400)
  },
  calculate() {
    return {
      tick: ""
    };
  }
});
