/** @jsx createElement */

// 1. createElement 함수 구현
function createElement(type, props, ...children) {
  // type: 태그 이름('h1', 'div' 등)
  // props: 속성들(class, id 등)
  // children: 자식 요소들

  return {
    type,
    props: props || {},
    children: children.flat(), // 중첩된 배열 처리를 위해 flat() 추가
  };
}

// 2. 댜양한 JSX 예시들 작성
// 2.1 기본 예시
const element1 = (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);

// 2.2 속성이 있는 예시시
const element2 = (
  <div className="container">
    <h1 id="title">Hello World</h1>
    <p id="content">This is a paragraph</p>
  </div>
);

// 3. Virtual DOm 객체 출력 및 구조 분석
console.log("기본 예시의 Virtual DOM 구조");
console.log(JSON.stringify(element1, null, 2));

console.log("속성이 있는 예시의 VIrtual DOM 구조");
console.log(JSON.stringify(element2, null, 2));

// 4. 간단한 테스트
const test = createElement(
  "div",
  { className: "test" },
  createElement("h1", null, "Test"),
  createElement("p", null, "Content")
);

console.log("직접 createELement를 호출한 결과");
console.log(JSON.stringify(test, null, 2));
