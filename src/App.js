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
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">

				<Header />

				<Sidebar />

				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <Dialogs />} />
					<Route path='/profile' render={() => <Profile />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/contact' render={() => <Contact />} />
					<Route path='/users' render={() => <UsersContainer />} />
				</div>

			</div>
		</BrowserRouter>
	);
}

export default App;

