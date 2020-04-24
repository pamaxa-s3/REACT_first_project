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
					<Route path='/dialogs' render={() => <Dialogs store={props.store} />} />
					<Route path='/profile' render={() => <Profile store={props.store} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/contact' render={() => <Contact />} />
				</div>

			</div>
		</BrowserRouter>
	);
}

export default App;

