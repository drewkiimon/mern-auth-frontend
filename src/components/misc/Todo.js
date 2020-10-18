import React from 'react';

export default function Todo(props) {
	return (
		<li>
			<h2 onClick={() => props.updateTodo(props.id)}>{props.title}</h2>
			<span>{props.timestamp}</span>
			<button onClick={() => props.deleteTodo(props.id)}>Delete</button>
		</li>
	);
}
