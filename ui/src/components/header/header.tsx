import * as React from "react";
import { Link } from "react-router-dom";
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
                    <nav className="navbar navbar-dark bg-secondary row">
                        <Link to="/">
                            <img
                                id="logo"
                                src="/public/assets/profile.jpg"
                                className="navbar-brand img-thumbnail rounded-circle"
                            />
                        </Link>
                        <img id="work_story" className="img-thumbnail" />
                        <div className="dropleft navbar-brand mr-5">
                            <button
                                className="navbar-toggler border border-light"
                                id="dropdownMenu"
                                data-toggle="dropdown"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                                <Link to="/asdasd" className="dropdown-item">
                                    Action
                                </Link>
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
