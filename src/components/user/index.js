import React from 'react';
import classes from "./user.module.css";



class User extends React.Component {
    render() {
        return (
            <div className={classes.user_holder}>
            
            <p className={classes.user_text}>{this.props.text}</p>

            <div className={classes.user_icon}>

            </div>

            </div>

        );
    }
}

export default User;