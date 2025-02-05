import { ContentProps, VirtualElement } from "../types/createElementTypes";
import { createElement } from "../jsx";

// Content 컴포넌트
export default function Content({ text }: ContentProps): VirtualElement {
  return (
    <div className="container">
      <p id="content">{text}</p>
    </div>
  );
}
