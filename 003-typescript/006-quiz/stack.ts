{
    interface Stack<T> {
        readonly size: number;
        push(value: T);
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    class StackImpl<T> implements Stack<T> {
        // 내부에서만 쓰이는 변수 _
        private _size: number = 0;
        private head?: StackNode<T>;

        // 보통 size 의 범위를 정해 놓는다. (constructor)
        get size() {
            return this._size;
        }
        push(value: T) {

            const node = {value, next: this.head};
            this.head = node;
            this._size++;
        }
        pop() {
            // null == undefined : 얕은 비교 true
            if (this.head == null) {
                throw new Error("Stack is empty!");
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl<string>();
    stack.push("하나");
    stack.push("둘");
    stack.push("셋");
    while (stack.size !== 0) {
        console.log(stack.size);
        console.log(stack.pop());
    }

    const stack2 = new StackImpl<number>();
    stack2.push(1);
    stack2.push(2);
    stack2.push(3);
    while (stack2.size !== 0) {
        console.log(stack2.size);
        console.log(stack2.pop());
    }
}