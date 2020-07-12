import React from 'react';

const withLoadingIndicator = (Component) => ({ isLoadingTodos, ...others }) =>
	isLoadingTodos
	?<div><p> Loading </p></div>
	:<Component { ...others } />

export default withLoadingIndicator;