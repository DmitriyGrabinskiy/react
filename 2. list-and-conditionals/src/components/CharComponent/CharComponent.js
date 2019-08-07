import React from 'react';
import styles from './CharComponent.module.css'

const CharComponent = (props) => (
    <div className={styles.CharComponent} onClick={()=> props.clicked(props.index)}>{props.value}</div>
);

export default CharComponent;