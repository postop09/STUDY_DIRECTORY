/**
 * Sets
 * 요소의 순서가 보장되지 않는다.
 * 중복이 허용되지 않는다.
 * 인덱스 기반으로 접근하지 않는다.
 *
 * 데이터 구조로서 고유한 값을 관리할 때 유용하다.
 */

const ids = new Set([1, 2, 3]);
// has(): 특정 값을 확인해서 boolean 반환 체크
console.log(ids.has(1));

// entries(): 같은 값을 2개 가진 배열을 반환한다.
for (const entry of ids.entries()) {
  console.log(entry);
  console.log(entry[0]); // 하나의 값만 원하는 경우
}

/**
 * Maps
 * 어떤 길이의 키-값 데이터도 저장한다.
 * 키로 아무거나 사용할 수 있다. (배열이 될수도, 객체가 될 수도 있다.)
 * 순서가 보장된다.
 * 중복된 키값이 허용된다.
 *
 * 데이터를 추가하거나 삭제할 때 더 좋다.
 * 빠르게 변화하는 데이터의 양이 많을 때 유용하다.
 */

const person1 = { name: "Yun" };
const person2 = { name: "Sik" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

// key - value 에 접근하기
for (const entry of personData.entries()) {
  console.log(entry); // [key, value] 반환
}

// 구조분해하여 추출 가능
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

// key 에 접근하기
for (const key of personData.keys()) {
  console.log(key);
}
