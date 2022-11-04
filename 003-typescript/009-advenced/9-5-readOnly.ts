{
  type ToDo = {
    title: string;
    description: string;
  };

  // 대부분의 utility type 은 이미 생성되어 있다.
  function display(todo: Readonly<ToDo>) {
    // todo.title = "enable!";
  }
}