import * as React from "react";
import "./header.css";

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
                <div id="header">
                    <nav className="navbar navbar-dark bg-dark row">
                        <img src="/public/assets/profile.jpg" className="navbar-brand img-thumbnail rounded-circle" />
                        <div className="dropleft navbar-brand mr-5">
                            <button
                                className="navbar-toggler border border-white"
                                id="dropdownMenu"
                                data-toggle="dropdown"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
