import { Fragment } from "react";

import classes from './Header.module.css'
import ReactMeals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton.jsx'

const Header = (props) =>{
    return(    
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={ReactMeals} alt="A meals" />
        </div>
    </Fragment>
    );
};

export default Header
