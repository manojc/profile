import * as React from "react";
import { Component } from "react";

export interface FooterProps {}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <div id="footer" className="container">
                    <nav className="navbar navbar-dark bg-dark"></nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
