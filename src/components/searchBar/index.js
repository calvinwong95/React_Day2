import React from 'react';
import classes from "./searchbar.module.css";

class SearchBar extends React.Component {
    render() {
        return (
            <div className={classes.searchBar_holder}>
            <div className={classes.searchBar_icon}>
                <img src={this.props.img} alt=""></img>
            </div>
            <p className={classes.searchBar_text}>{this.props.text}</p>
            </div>

        );
    }
}

export default SearchBar