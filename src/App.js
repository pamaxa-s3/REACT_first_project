import React from 'react';
import './App.css';
import Header from './assets/components/Header/Header';
import Sidebar from './assets/components/Sidebar/Sidebar';
import Dialogs from './assets/components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './assets/components/News/News';
import Music from './assets/components/Music/Music';
import Contact from './assets/components/Contact/Contact';
import UsersContainer from './assets/components/Users/UsersContainer';
import ProfileContainer from './assets/components/Profile/ProfileContainer';

const App = () => {
	return (
		<div className="app-wrapper">

			<Header />

			<Sidebar />

			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <Dialogs />} />
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/contact' render={() => <Contact />} />
				<Route path='/users' render={() => <UsersContainer />} />
			</div>

		</div>
	);
}

export default App;

