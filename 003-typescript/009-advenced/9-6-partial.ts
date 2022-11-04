{
  /**
   * 전체 type 중에서 부분적인 type 만 허용하고 싶을 때 사용할 수 있다.
   * 객체를 업데이트하려는 경우 많이 사용한다.
   */
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // 대부분의 utility type 은 이미 생성되어 있다.
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todo,
      ...fieldsToUpdate,
    }
  }
  const todo: ToDo = {
    title: "TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  }
  updateTodo(todo, {priority: "low"});
}