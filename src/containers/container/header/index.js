import React from 'react';
import "./header.css";
import SearchBar from "../../../components/searchBar";
import User from "../../../components/user";
import icon_8 from "../../../assets/icon_8.png";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
            <SearchBar text="Search By Title, Genre or Years" img={icon_8}/>
            <User text="Jack Kamboy"/>
            </div>
        );

    }
}

export default Header;