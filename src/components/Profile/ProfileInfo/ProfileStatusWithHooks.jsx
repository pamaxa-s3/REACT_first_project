import React from 'react';
import styles from './ProfileInfo.module.scss';
import { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }
    
    const deActivateEditMode = () => {
        setEditMode(false);        
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={styles.profileStatus}>

            { !editMode &&
                <div className="">
                    <span onDoubleClick={activateEditMode}>{props.status || 'NoStatus'}</span>
                </div>
            }
            {editMode &&
                <div className="">
                    <input onBlur={deActivateEditMode} onChange={onStatusChange} value={status} autoFocus={true} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;