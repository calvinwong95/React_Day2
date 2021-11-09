import React from 'react';
import classes from "./menuSubList.module.css";

class MenuSubList extends React.Component {
    render() {
        return(
        <div className={classes.menuSub_text_holder}>
            <p className={classes.menuSub_text}>{this.props.text}</p>
        </div>
        
            
        );
    }
}

export default MenuSubList;