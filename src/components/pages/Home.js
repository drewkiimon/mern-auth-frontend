import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';

import Todo from '../misc/Todo';

export default function Home() {
	const { userData } = useContext(UserContext);
	const [todos, setTodos] = useState([]);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) {
			history.push('/login');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userData]);

	useEffect(() => {
		const getAllTodos = async () => {
			let token = localStorage.getItem('auth-token');

			const todos = await Axios.get('http://localhost:5000/todos/all', {
				headers: {
					'x-auth-token': token,
				},
			});

			setTodos(todos.data);
		};

		getAllTodos();
	}, []);

	return (
		<div className='page'>
			<ul>
				{todos.length > 0 &&
					todos.map((item, i) => {
						return (
							<Todo
								key={i}
								id={item._id}
								title={item.title}
								timestamp={item.createdAt}></Todo>
						);
					})}
			</ul>
		</div>
	);
}
