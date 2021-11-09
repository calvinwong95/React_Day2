import React from 'react';
import classes from "./profile.module.css";


class Profile extends React.Component {
    render() {
        return (
            <div className={classes.profile_holder}>
            <div className={classes.movie_poster} style={{backgroundImage:`url(${this.props.movieimg})`}}></div>
            <h3>{this.props.title}</h3>
            <h4>{this.props.category}</h4>
            </div>

        );

    }
}

export default Profile;