import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import _ from 'lodash';

import ErrorNotice from '../misc/ErrorNotice';
import Todo from '../misc/Todo';

export default function Home() {
	const { userData } = useContext(UserContext);
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');
	const [error, setError] = useState();
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

			const todos = await Axios.get('http://localhost:5000/todos/', {
				headers: {
					'x-auth-token': token,
				},
			});

			setTodos(todos.data);
		};

		getAllTodos();
	}, []);

	const submit = async (e) => {
		try {
			e.preventDefault();
			let token = localStorage.getItem('auth-token');

			var returnedTodo = await Axios.post(
				'http://localhost:5000/todos/',
				{ title: todo },
				{
					headers: {
						'x-auth-token': token,
					},
				}
			);

			setTodo('');
			setTodos([...todos, returnedTodo.data]);
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	const deleteTodo = async (id) => {
		try {
			let token = localStorage.getItem('auth-token');

			var deletedTodo = await Axios.delete(
				`http://localhost:5000/todos/${id}`,
				{
					headers: {
						'x-auth-token': token,
					},
				}
			);

			setTodos(
				_.filter(todos, (i) => {
					return i._id !== deletedTodo.data._id;
				})
			);
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	// Updates on click right now
	const updateTodo = async (id, title) => {
		try {
			let token = localStorage.getItem('auth-token'),
				oldTodos = _.cloneDeep(todos);

			let updatedTodo = await Axios.patch(
				`http://localhost:5000/todos/${id}`,
				{ title },
				{
					headers: {
						'x-auth-token': token,
					},
				}
			);

			let index = _.findIndex(oldTodos, { _id: id });
			oldTodos[index] = updatedTodo.data;

			setTodos(oldTodos);
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return (
		<div className='page'>
			{error && (
				<ErrorNotice
					message={error}
					clearError={() => setError(undefined)}
				/>
			)}

			<form className='form' onSubmit={submit}>
				<label htmlFor='addTodo'></label>
				<input
					type='text'
					id='addTodo'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}></input>
				<input type='submit' value='Add Todo' />
			</form>

			<ul>
				{todos.length > 0
					? todos.map((item) => {
							return (
								<Todo
									key={item._id}
									id={item._id}
									title={item.title}
									updateTodo={updateTodo}
									deleteTodo={deleteTodo}
									timestamp={item.createdAt}></Todo>
							);
					  })
					: 'You have nothing todo~'}
			</ul>
		</div>
	);
}
