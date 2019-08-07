import React from 'react'
import styles from './UserInput.module.css'

const UserInput = (props) => {
    return (
        <input 
        className={styles.UserInput}
        onChange={props.changed}
        value={props.value}
        placeholder="Enter user name here" />
    );
}

export default UserInput;