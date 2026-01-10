# Section 01 - JavaScript 기본

## 1. 변수 선언 (let, const, var)

### let이 있는 것과 없는 것의 차이

```javascript
// let으로 선언: 해당 스코프에서만 접근 가능
let a = 1;

// 선언 없이 할당: 암묵적 전역 변수 (권장하지 않음)
b = 2;  // window.b로 접근 가능, strict mode에서는 에러
```

| 구분 | `let a = 1` | `a = 1` (선언 없이) |
|------|-------------|---------------------|
| window 객체 | 붙지 않음 | `window.a`로 붙음 |
| strict mode | 정상 작동 | 에러 발생 |

**결론**: 항상 `let`, `const`, `var`로 명시적 선언할 것

---

## 2. 전위 연산자 vs 후위 연산자

```javascript
let num = 5;

// 전위 연산자: 먼저 증가, 그 다음 사용
let a = ++num;  // num = 6, a = 6

// 후위 연산자: 먼저 사용, 그 다음 증가
let b = num++;  // b = 6, num = 7
```

| 연산자 | 동작 순서 |
|--------|----------|
| `++num` | 증가 → 사용 |
| `num++` | 사용 → 증가 |

---

## 3. 비교 연산자 (== vs ===)

```javascript
1 == "1"   // true  (타입 변환 후 비교)
1 === "1"  // false (타입까지 비교)
```

| 연산자 | 이름 | 타입 변환 |
|--------|------|----------|
| `==` | 동등 연산자 | O (묵시적 캐스팅) |
| `===` | 일치 연산자 | X (타입까지 비교) |

**권장**: 항상 `===` 사용

---

## 4. 삼항 연산자

if-else를 한 줄로 표현

```javascript
// 기본 문법
let result = 조건식 ? 참일_때_값 : 거짓일_때_값;

// 예시
let age = 20;
let status = age >= 18 ? "성인" : "미성년자";
```

---

## 5. switch-case문

```javascript
let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("빨간색");
    break;  // break 필수!
  case "바나나":
    console.log("노란색");
    break;
  default:
    console.log("알 수 없음");
}
```

**주의**: `break`가 없으면 다음 case로 떨어짐 (fall-through)

---

## 6. 반복문

### 기본 for문

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### for...of (값 순회)

```javascript
const arr = ["사과", "바나나", "오렌지"];

for (const item of arr) {
  console.log(item);
}
```

### forEach (배열 메서드)

```javascript
const arr = ["사과", "바나나", "오렌지"];

arr.forEach((item, index) => {
  console.log(index, item);
});
```

| 방식 | 용도 |
|------|------|
| `for (let i...)` | 인덱스 제어 필요할 때 |
| `for...of` | 단순히 값만 순회할 때 |
| `forEach` | 배열 메서드, 콜백 스타일 |

---

## 7. 호이스팅 (Hoisting)

함수 선언문은 코드 실행 전에 최상단으로 끌어올려짐

```javascript
sayHello();  // 정상 작동!

function sayHello() {
  console.log("안녕하세요");
}
```

**주의**: 함수 표현식은 호이스팅되지 않음

```javascript
sayHello();  // 에러!

const sayHello = function() {
  console.log("안녕하세요");
};
```

---

## 8. 함수 표현식과 화살표 함수

### 함수 선언문

```javascript
function add(a, b) {
  return a + b;
}
```

### 익명 함수 (함수 표현식)

```javascript
const add = function(a, b) {
  return a + b;
};
```

### 화살표 함수 (람다)

```javascript
const add = (a, b) => {
  return a + b;
};

// 한 줄일 때 축약
const add = (a, b) => a + b;
```

| 방식 | 호이스팅 | 문법 |
|------|---------|------|
| 함수 선언문 | O | `function name() {}` |
| 함수 표현식 | X | `const name = function() {}` |
| 화살표 함수 | X | `const name = () => {}` |
