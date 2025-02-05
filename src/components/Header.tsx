import { HeaderProps, VirtualElement } from "../types/createElementTypes";
import { createElement } from "../jsx";

// Header 컴포넌트
export default function Header({
  title,
  buttonText,
}: HeaderProps): VirtualElement {
  return (
    <div className="header">
      <h1 id="title">{title}</h1>
      <button id="login">{buttonText}</button>
    </div>
  );
}
