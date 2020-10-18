import React, { useState } from 'react';
import Moment from 'moment';

export default function Todo(props) {
	const [inEditMode, setInEditMode] = useState(false);
	const [updatedTodo, setUpdatedTodo] = useState(props.title);

	const submit = (e) => {
		e.preventDefault();

		props.updateTodo(props.id, updatedTodo);
		setInEditMode(false);
	};

	return (
		<li>
			{inEditMode ? (
				<form className='form' onSubmit={submit}>
					<input
						type='text'
						id='addTodo'
						value={updatedTodo}
						onChange={(e) =>
							setUpdatedTodo(e.target.value)
						}></input>
					<input type='submit' value='Update Todo' />
				</form>
			) : (
				<h2 onClick={() => setInEditMode(true)}>{props.title}</h2>
			)}

			<span>
				{Moment(props.timestamp).format('MMMM Do YYYY, h:mm:ss A')}
			</span>
			<button onClick={() => props.deleteTodo(props.id)}>Delete</button>
		</li>
	);
}
