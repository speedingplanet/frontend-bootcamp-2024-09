import { store } from './configure-store.js';
import { addTodo, deleteTodo, editTodo } from './todos-slice.js';

console.log('Store initial state: ', store.getState());

store.subscribe(() => {
	console.log('SUBSCRIBED: Updated state: ', store.getState());
});

store.dispatch(addTodo({ text: 'Test todo 1', done: false, id: 1 }));
store.dispatch(addTodo({ text: 'Test todo 2', done: false, id: 2 }));
store.dispatch(addTodo({ text: 'Test todo 3', done: false, id: 3 }));

// console.log('State after three addTodo() calls: ', store.getState());
console.log('Deleting todo #2');
store.dispatch(deleteTodo(2));

console.log('Editing a todo');
let testTodo = { text: 'Editing test', done: true, id: 4 };
store.dispatch(addTodo(testTodo));
store.dispatch(editTodo({ ...testTodo, text: 'Successful test' }));
console.log('testTodo: ', testTodo);

let todo1 = store.getState().todos[0];

store.dispatch(editTodo({ ...todo1, done: !todo1.done }));

console.log('old todo1:', todo1);
console.log('updated todo1:', store.getState().todos[0]);
