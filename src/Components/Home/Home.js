import React, {Component} from 'react';
import Button from "../Button/Button";
import classes from './home.module.css'
import {NavLink} from "react-router-dom";
import Foliagle from './img/Foliage.png'
import Pucculent from './img/Pucculent.png'
import Flower from './img/Flower.png'
import Fruit from './img/Fruit.png'


class Home extends Component {
    render() {
        return (
            <div>
                <Button/>
                <p className={classes.homeParagraph}><b>Get a beautiful home</b></p>
                <p className={classes.homeDesc}>If you don’t know what plants you can add to the space<br/>
                    We can provide you with selected plants<br/>
                    And configure your space</p>
                <h1 className={classes.title}>4 types of plants</h1>
                <div className={classes.pantsButton}>
                    <div>
                        <NavLink to='/foliagle'><img src={Foliagle} alt=""/></NavLink>
                    </div>                    <div>
                        <NavLink to='/pucculent'><img src={Pucculent} alt=""/></NavLink>
                    </div>                    <div>
                        <NavLink to='/flower'><img src={Flower} alt=""/></NavLink>
                    </div>
                    <div>
                        <NavLink to='/fruit'><img src={Fruit} alt=""/></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;