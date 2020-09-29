import React, { useState } from 'react';
import Axios from 'axios';

export default function Todo(props) {
	const [isLive, setIsLive] = useState(true);

	const deleteTodo = async () => {
		let token = localStorage.getItem('auth-token');

		await Axios.delete(`http://localhost:5000/todos/${props.id}`, {
			headers: {
				'x-auth-token': token,
			},
		});

		setIsLive(false);
	};

	return (
		<>
			{isLive ? (
				<li>
					<h2>{props.title}</h2>
					<span>{props.timestamp}</span>
					<button onClick={deleteTodo}>Delete</button>
				</li>
			) : (
				<></>
			)}
		</>
	);
}
