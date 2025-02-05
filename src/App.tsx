/** @jsx createElement */
import "./style.css";
import {
  ContentProps,
  HeaderProps,
  VirtualElement,
} from "./types/createElementTypes";
import { createElement } from "./jsx";
import { render } from "./render";
import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";

// App 컴포넌트
function App(): VirtualElement {
  return (
    <div id="app">
      <Header title="Header" buttonText="login" />
      <h1>Hello, React!</h1>
      <Counter />
      <Content text="Virtual DOM 이해 및 복잡한 구조의 컴포넌트 분석" />
    </div>
  );
}

const appElement = <App />;
const container = document.getElementById("app");

if (container) {
  render(appElement, container);
}

console.log(JSON.stringify(appElement, null, 2));
