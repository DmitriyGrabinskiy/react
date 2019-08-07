import React from 'react';
import Aux from 'react-aux';
import styles from './UserOutput.module.css'

const UserOutput = (props) => {
    return (
        <Aux>
            <p>
                Hello, <span className={styles.UserName}>{props.userName}</span>!
            </p>
            <p>This is your first React application</p>
        </Aux>
    );
}

export default UserOutput;