import * as React from "react";
import { Component } from "react";

export interface HeaderProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div id="header" className="container">
                    <nav className="navbar navbar-dark bg-dark"></nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
