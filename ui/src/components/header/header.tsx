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
                <div id="header" className="container">
                    <nav className="navbar navbar-dark bg-dark row">
                        <a className="navbar-brand col-lg-1" href="#">
                            Home
                        </a>
                        <div className="col-lg-1 offset-lg-9 dropleft">
                            <button
                                className="navbar-toggler"
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
