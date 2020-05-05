import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/auth_reducer'
import { headerApi } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        headerApi.getHeader()
               .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login ,email} = data.data;
                        this.props.setAuthUserData(id, login ,email)
                    }
               });
    }

    render () {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);