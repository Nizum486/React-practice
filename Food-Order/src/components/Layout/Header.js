import React, { Fragment } from "react"

import HeaderCartButton from "./HeaderCartButton"
import mealsImage from '../../asset/meals.jpg'
import classes from './Header.module.css'


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div>
            <img className={classes['main-image']} src={mealsImage} alt="A talble full of delicious food!"/>
        </div>
    </Fragment>
}

export default Header