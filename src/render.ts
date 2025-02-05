import { VirtualElement } from "./types/createElementTypes";

export function render(vdom: VirtualElement | string, container: HTMLElement) {
  // 문자열이나 숫자인 경우 테스트 노드 생성
  if (typeof vdom === "string") {
    container.appendChild(document.createTextNode(vdom));
    return;
  }

  // 1. 실제 DOM 엘리먼트 생성
  const element = document.createElement(vdom.type as string);

  // 2. 속성(props) 처리
  Object.entries(vdom.props).forEach(([key, value]) => {
    // className 특별 처리
    if (key === "className") {
      element.setAttribute("class", value as string);
    } else {
      element.setAttribute(key, value as string);
    }
  });

  // 3. 자식 요소를 재귀적으로 처리
  vdom.children.forEach((child) => {
    render(child, element);
  });

  // 4. 부모 컨테이너에 추가
  container.appendChild(element);
}
