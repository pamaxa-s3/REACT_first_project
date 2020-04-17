import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">

				<Header />

				<Sidebar />

				<div className='app-wrapper-content'>
					<Route path='/message' component={Dialogs} />
					<Route path='/profile' component={Profile} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/contact' component={Contact} />
				</div>

			</div>
		</BrowserRouter>
	);
}

export default App;

