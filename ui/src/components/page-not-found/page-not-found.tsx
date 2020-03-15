import * as React from "react";
import { Link } from "react-router-dom";
import "./page-not-found.css";

export interface PageNotFoundProps {}

export interface PageNotFoundState {}

class PageNotFound extends React.Component<PageNotFoundProps, PageNotFoundState> {
    constructor(props: PageNotFoundProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="error-page" className="row">
                <div className="card col-lg-8 col-md-8 col-sm-10">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">Requested page not found!</div>
                        <div className="error-actions">
                            <Link className="btn btn-primary btn-lg" to="/">
                                Take Me Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;
