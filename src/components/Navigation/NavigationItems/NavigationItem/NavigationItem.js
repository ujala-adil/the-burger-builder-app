import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink> {/*props.children NavigationItems.js main jo NavigationItem tags k darmyan text display karane k liye*/}
        {/* due to css modules our active class does not match with that of the NavLink due to some hash being attached to the css modules one. so we set the NavLink one to be named as the css module one.  */}
        {/* we added exact q k sb hi links / se start hote aur agr hmara current path / se start hua tou active show hoga. exact se sb nhi active sho houngen. iss se saare links exact hojayengen tou agr ksi ek pe lagana hai tou navigationitems main jaa k ek navigationitem k component main exact lagado  */}
    </li>
);

export default navigationItem;