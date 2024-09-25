export interface Todo {
	id: number;
	text: string;
	done: boolean;
}

export type InputTodo = Omit<Todo, 'id'>;

export interface AddAction {
	type: 'todos/add';
	text: string;
}

export interface EditAction {
	type: 'todos/change';
	todo: Todo;
}

export interface DeleteAction {
	type: 'todos/delete';
	todoId: number;
}

// Discriminated union: https://mkosir.github.io/typescript-style-guide/#discriminated-union
export type TodoAction = AddAction | EditAction | DeleteAction;
