# Info

**Section**: 02

**Date:** 2026-01-10

**Materials:** docs/2섹션-JavaScript 심화.pdf

---

## Learn What

---

## Notes

- truthy와 falsy한 것은 값 자체를 조건식에 넣었을 때 truth, false로 변환되는 것을 의미한다. 
- 단락 평가란 And나 or 연산자처럼 첫번째 연산자만 보더라도 값이 확정되면 두번째 연산자에 대해선 아예 꺼내오지도 않는 것을 뜻한다. (short-circuit Evaluation)
    - T && T => 뒤
    - T && F => 뒤
    - F && T => 앞
    - F && F => 앞
    - T || T => 앞
    - T || F => 앞
    - F || T => 뒤
    - F || F => 뒤
- 구조분해 할당을 객체에 적용할 때엔 중괄호를 이용한다. 
- spread 연산자는 파이썬에서 *list, **dict과 유사한 기능이다. 또한 rest연산자는  
- 배열을 순회할 때는 for of 이고 객체를 순회할 때는 for in 이다.
- 배열 조작은 push, pop, shift, unshift, slice, concat이다.
- forEach는 순회를 간단하게 시키며 함수를 하나 실행하는 것, includes는 요소 포함 여부, indexOf는 요소의 인덱스 반환, findIndex는 조건을 만족하는 요소의 인덱스를 반환한다. 만약에 조건을 만족하는 요소가 없다면 index는 -1만 나오기 때문이다. find는 조건에 만족하는 객체를 그대로 반환합니다. 
    - indexOf는 배열 내에 참조형을 포함하고 있을 때 인덱스를 찾지 못한다 왜냐면 얕은 비교만 하기 때문이다. 그러나 findIndex는 내부에서 함수로 찾기 때문에 가능하다. 
-배열에서 sort함수에서 return을 줄 때 양수 = 작은 게 앞에, 음수 = 큰 게 앞에, 0 = 현재 배열 그대로
- date.toLocaleString하면 현재 우리나라 표현 방법에 맞게 출력
- 자바스크립트에서는 비동기함수를 만나면 WebAPIs라는 공간에서 타이머와 콜백함수를 내장해놨다가 시간이 지나면 다시 자바스크립트 엔진에 함수 결과를 리턴한다. 
- 자바스크립트에서 비동기함수를 짤 때, 비동기 함수 간의 결과값의 참조가 있다면, 콜백 지옥 문제가 생길 수 있다. 이걸 해결하기 위해 promise라는 객체를 쓰면 된다. promise chaining을 통해 resolve될 때의 조건과 값, reject 될 때의 조건과 값을 출력하면 된다. 
- promise,then,catch를 쉽게 쓰는 방법이 async, await 함수이다. 