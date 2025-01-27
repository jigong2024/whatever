/** @jsx createElement */
function createElement(type, props, ...children) {
  // type: 태그 이름('h1', 'div' 등)
  // props: 속성들(class, id 등)
  // children: 자식 요소들

  return {
    type,
    props,
    children,
  };
}

const element = (
  <div className="container">
    <h1 id="title">Hello World</h1>
    <p id="content">This is a paragraph</p>
  </div>
);

console.log(element);
