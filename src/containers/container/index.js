import React from 'react';
import Header from "./header";
import Content from "./content";
import "./container.css";

class Container extends React.Component {
    render() {
        return (
            <div className="container">
            <Header />
            <Content />
            </div>
        );
    }
}

export default Container;