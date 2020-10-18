import React, { useState } from 'react';

export default function Todo(props) {
	const [isChecked, setIsChecked] = useState(false);
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
				<form className='checkbox-form' onSubmit={submit}>
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
				<form className='checkbox-form'>
					<input
						type='checkbox'
						id='todo'
						name='todo'
						checked={isChecked}
						onChange={() => {
							setIsChecked(true);
							props.deleteTodo(props.id);
						}}
					/>
					<label name='todo' onClick={() => setInEditMode(true)}>
						{props.title}
					</label>
				</form>
			)}
		</li>
	);
}
