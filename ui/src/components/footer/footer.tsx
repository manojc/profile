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
                <div id="footer">
                    <nav className="navbar navbar-dark bg-dark row">
                        <div className="col-md-12 col-lg-12">
                            <div className="navbar-brand float-right pr-1 pl-2">
                                <span className="mr-1">Powered By</span>
                                <img
                                    id="powered-by"
                                    className="navbar-brand rotating"
                                    src="/public/assets/react-redux.png"
                                />
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
