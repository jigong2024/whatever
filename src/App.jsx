/** @jsx createElement */
import "./style.css";

function createElement(type, props, ...children) {
  if (typeof type === "function") {
    return type(props);
  }

  return {
    type,
    props: props || {},
    children: children.flat(),
  };
}

// Header 컴포넌트
function Header({ title, buttonText }) {
  return (
    <div className="header">
      <h1 id="title">{title}</h1>
      <button id="login">{buttonText}</button>
    </div>
  );
}

// Content 컴포넌트
function Content({ text }) {
  return (
    <div className="container">
      <p id="content">{text}</p>
    </div>
  );
}

// App 컴포넌트
function App() {
  return (
    <div id="app">
      <Header title="Header" buttonText="login" />
      <h1>Hello, React!</h1>
      <Content text="Virtual DOM 이해 및 복잡한 구조의 컴포넌트 분석" />
    </div>
  );
}

const appElement = <App />;
console.log(JSON.stringify(appElement, null, 2));
