/**
 * this: 본인을 호출하는 객체
 * 호출하는 문맥에 따라서 this 가 변경될 수 있다.
 * 새로운 값에 할당하면서 this 가 가리키는 상태를 잃어버리는 경우가 있다.
 * 상태를 유지하려면 bind() 를 사용하거나 arrow function 을 사용한다.
 */
console.log(this);

const simpleFunc = () => {
  console.log("function", this);
}
simpleFunc();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  }
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller();
