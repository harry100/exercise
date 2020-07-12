import React from 'react';

const withTodosNull = (Component) => (props) =>
	!props.todos
		? null
		: <Component { ...props } />

export default withTodosNull;