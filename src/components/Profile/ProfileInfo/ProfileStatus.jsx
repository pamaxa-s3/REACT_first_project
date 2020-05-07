import React from 'react';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={styles.profileStatus}>

                {!this.state.editMode &&
                    <div className="">
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className="">
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} type="text" name="" id="" value={this.props.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;