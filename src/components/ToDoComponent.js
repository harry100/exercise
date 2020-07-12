import React from 'react';
import { compose } from 'recompose';

import withTodosNull from './hocs/withTodosNull';
import withLoadingIndicator from './hocs/withLoadingIndicator';
import withTodosEmpty from './hocs/withTodosEmpty';

const withConditionalRenderings = compose(
  withLoadingIndicator,
  withTodosNull,
  withTodosEmpty
);

const TodoListWithConditionalRendering = withConditionalRenderings(TodoList);

function App(props) {
	return (
		<TodoListWithConditionalRendering
			todos={props.todos}
			isLoadingTodos={props.isLoadingTodos}
		/>
	);
}
 
function TodoList({ todos, isLoadingTodos }) {
	return (
		<div>
		  {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
		</div>
	);
}

function TodoItem({ todo }) {
	return (
		<div>
			<p> {todo['title']} </p>
		</div>
	)
}

export default App;