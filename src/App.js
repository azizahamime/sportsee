import React from 'react';
import './styles/index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Error from './pages/Error/Error';
import Profil from './pages/Profil/Profil';
import './server';
import SideBar from './components/SideBar/SideBar';

export default function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/user/:id">
					<Profil />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
			<SideBar />
		</Router>
	);
}

