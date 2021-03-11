import React from 'react';
import classes from './Navbar.module.scss'
import NavLinks from './NavLinks/Navlinks'
import Peak from './Peak/Peak'

const navbar = (props) => (
    <div className={classes.Navbar}>
        <Peak/>
        <NavLinks/>
    </div>
)
export default navbar;
