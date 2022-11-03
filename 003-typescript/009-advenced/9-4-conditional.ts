{
  /**
   * 조건부 타입을 설정하게 해주는 util type
   */
  type Check<T> = T extends string ? boolean : number;

  type Type = Check<string>; // boolean type 을 반환한다.
}