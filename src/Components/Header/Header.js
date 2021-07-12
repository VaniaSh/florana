import React, {Component} from 'react';
import classes from './header.module.css'
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";
import first from './img/first.png'
import second from './img/second.png'
import third from './img/third.png'
import fourth from './img/fourth.png'

class Header extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.navbar}>
                    <div>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to='/service'>Service</NavLink>
                    </div>
                    <div>
                        <NavLink to='/shop'>Shop</NavLink>
                    </div>
                    <div>
                        <NavLink to='/location'>Location</NavLink>
                    </div>
                    <div>
                        <NavLink to='/location'>
                            <button className={classes.check}>Check out(0)</button>
                        </NavLink>
                    </div>
                </div>
                <div className={classes.title}>
                    <h1>Let`s find<br/>your love<br/><span>plants.</span></h1>
                </div>
                <div className={classes.description}>
                    <p>Add some color to your home, give it a<br/> little attention, the plants will<br/>accompany you
                        quietly</p>
                </div>
                <button className={classes.videoButton}>Watch the video</button>
                {/*<Button/> */} кнопка для всего
                <div className={classes.icons}>
                    <div><img src={third} alt=""/></div>
                    <div><img src={second} alt=""/></div>
                    <div><img src={first} alt=""/></div>
                    <div><img src={fourth} alt=""/></div>
                </div>
                </div>

        );
    }
}

export default Header;