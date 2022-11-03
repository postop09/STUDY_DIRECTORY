{
  /**
   * 기존에 있는 타입들을 이용하면 조금 다른 형태로 보다 편리하게 변환하는 util type
   */
  type Video = {
    title: string;
    author: string;
  }

  // before
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // }
  //
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // }

  // after
  type Optional<T> = {
    // T 를 순회하면서 모든 key 를 순차적으로 P 에 할당
    [P in keyof T]?: T[P]; // type 내부에서 [] 을 사용하면, for...in 과 동일하다
  }

  type ReadOnly<T> = {
    // T 를 순회하면서 모든 key 를 순차적으로 P 에 할당
    readonly [P in keyof T]: T[P];
  }

  type VideoOptional = Optional<Video>;
  type VideoReadOnly = ReadOnly<Video>
  const videoOp: VideoOptional = {};
  const videoRO: VideoReadOnly = {
    title: "hi",
    author: "good",
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null
  };
  const obj: Nullable<Video> = {
    title: "null possible",
    author: null,
  }

  type Proxy<T> = {
    get(): T;
    set(value: T);
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  }
}