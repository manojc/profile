import * as React from "react";
import "./footer.css";

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
                    <nav className="navbar navbar-dark bg-dark row">
                        <div className="col-lg-2 offset-lg-10 navbar-brand">
                            <span className="navbar-brand">powered by</span>
                            <img
                                id="powered-by"
                                className="navbar-brand rotating"
                                src="/public/assets/react-logo.png"
                            />
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
