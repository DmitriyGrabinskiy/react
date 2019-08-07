import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/users" exact>Users</NavigationItem>
        <NavigationItem link="/courses" exact>Cources</NavigationItem>
    </ul>
);

export default navigationItems;