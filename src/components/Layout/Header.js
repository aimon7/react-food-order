import { Fragment } from 'react';

import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    )
}

export default Header;
