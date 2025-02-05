// 전역으로 상태를 저장할 변수
let state: any;

// setState 함수가 호출될 때 실행할 함수
let rerender: () => void;

export function useState(initialValue: any) {
  // useState가 없으면 초기값
  if (state === undefined) {
    state = initialValue;
  }

  // 상태를 변경하는 함수
  const setState = (newValue: any) => {
    state = newValue;

    // 상태가 변경되면 화면 다시 그리기
    if (rerender) {
      rerender();
    }
  };

  // [현재상태, 상태변경함수] 반환
  return [state, setState];
}

// 리렌더링 함수 설정
export function setRerender(callback: () => void) {
  rerender = callback;
}
