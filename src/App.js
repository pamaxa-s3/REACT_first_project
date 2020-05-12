import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app_reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {

		if (!this.props.initialized) {
			return <Preloader />
		}

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
					<Route path='/login' render={() => <LoginPage />} />
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })) (App);

