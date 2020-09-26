import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserContext from './context/UserContext';

import './style.css';

export default function App() {
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});

	useEffect(() => {
		const checkLoggedIn = async () => {
			let token = localStorage.getItem('auth-token');

			// If never declared, token is 'null' which returns 500 error
			if (token === null) {
				localStorage.setItem('auth-token', '');
				token = '';
			}

			const tokenRes = await Axios.post(
				'http://localhost:5000/users/tokenIsValid',
				null,
				{
					headers: {
						'x-auth-token': token,
					},
				}
			);

			if (tokenRes.data) {
				const userRes = await Axios.get(
					'http://localhost:5000/users/',
					{
						headers: {
							'x-auth-token': token,
						},
					}
				);

				setUserData({
					token,
					user: userRes.data,
				});
			}
		};

		checkLoggedIn();
	}, []);

	// Everything within UserContext.Provider can use/see userData and setUserData

	return (
		<>
			<BrowserRouter>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}
