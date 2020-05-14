import React from 'react';
import styles from './ProfileInfo.module.scss';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };
    
    onStatusChange = (e)  => {
        this.setState({
            status: e.currentTarget.value
        });            
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.profileStatus}>

                {!this.state.editMode &&
                    <div className="">
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'NoStatus'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className="">
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} type="text" name="" id="" value={this.state.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;