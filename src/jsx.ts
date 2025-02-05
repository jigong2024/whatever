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
  ...children: (VirtualElement | string | number | null | undefined)[]
): VirtualElement {
  // children을 평탄화하고 필터링
  const processedChildren = children
    .flat()
    .filter((child) => child !== null && child !== undefined)
    .map((child) => (typeof child === "number" ? String(child) : child));

  if (typeof type === "function") {
    return type({
      ...props,
      children: processedChildren,
    });
  }

  return {
    type,
    props: props || {},
    children: processedChildren,
  };
}
