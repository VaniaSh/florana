import React, {Component} from 'react';
import classes from './button.module.css'

class Button extends Component {
    render() {
        return (
            <button className={classes.general}>Try for service</button>
        );
    }
}

export default Button;