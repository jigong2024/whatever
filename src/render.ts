import { setRerender } from "./hooks/useState";
import { VirtualElement } from "./types/createElementTypes";

let currentContainer: HTMLElement | null = null;

export function render(vdom: VirtualElement | string, container: HTMLElement) {
  currentContainer = container;

  // 리렌더링 함수 결정
  setRerender(() => {
    container.innerHTML = "";
    render(vdom, container);
  });

  // 문자열이나 숫자인 경우 테스트 노드 생성
  if (typeof vdom === "string") {
    container.appendChild(document.createTextNode(vdom));
    return;
  }

  // 함수형 컴포넌트 처리
  if (typeof vdom.type === "function") {
    render(vdom.type(vdom.props || {}), container);
    return;
  }

  // 1. 실제 DOM 엘리먼트 생성
  const element = document.createElement(vdom.type as string);

  // 2. 속성(props) 처리

  if (vdom.props) {
    Object.entries(vdom.props).forEach(([key, value]) => {
      // className 특별 처리
      if (key === "className") {
        element.setAttribute("class", value as string);
      } else if (key.startsWith("on") && typeof value === "function") {
        // 이벤트 핸들러 처리
        const eventName = key.toLowerCase().slice(2);
        element.addEventListener(eventName, value);
      } else {
        element.setAttribute(key, value as string);
      }
    });
  }

  // 3. 자식 요소를 재귀적으로 처리

  if (vdom.children) {
    vdom.children.forEach((child) => {
      render(child, element);
    });
  }

  // 4. 부모 컨테이너에 추가
  container.appendChild(element);
}
