import React from 'react';
import classes from "./menu.module.css";


class MenuList extends React.Component {
    render() {
        return(
            <div className={classes.menu_text_holder}>
            <div className={classes.menu_icon}>
                <img src={this.props.img} alt=""></img>
            </div>
            <p className={classes.menu_text}>{this.props.text}</p>
            </div>
        );
    }
}

export default MenuList;