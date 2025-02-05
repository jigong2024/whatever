// src/jsx.ts
import { VirtualElement } from "./types/createElementTypes";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export function createElement(
  type: string | Function,
  props: Record<string, any>,
  ...children: (VirtualElement | string)[]
): VirtualElement {
  if (typeof type === "function") {
    return type(props);
  }

  return {
    type,
    props: props || {},
    children: children.flat(),
  };
}
