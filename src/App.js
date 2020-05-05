import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
	return (
		<div className="app-wrapper">

			<HeaderContainer />

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

