{
  /**
   * interface 는 정확한 구현의도를 포함시킬 때 (규격사항)
   * type 단순 데이터를 담을 목적으로 사용할 때
   */
  type PositionType = {
    x: number;
    y: number;
  }

  interface PositionInterface {
    x: number;
    y: number;
  }

  const obj1: PositionType = {
      x: 1,
      y: 2,
  }
  const obj2: PositionInterface = {
    x: 1,
    y: 2,
    z: 3, // 없으면 error
  }

  // class 에서 구현이 가능하다
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements  PositionInterface {
    x: number;
    y: number;
    z: number // 없으면 error
  }

  // extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & {z: number};

  // only interface can be merged.
  interface PositionInterface {
    z: number;
  }

  // Type aliases can use computed properties.
  type Person = {
    name: string;
    age: number;
  }
  type Name = Person["name"]; // string
  type NumberType = number;
  type Direction = "right" | "left";
}