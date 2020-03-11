import * as React from "react";
import "./body.css";

export interface BodyProps {}

export interface BodyState {}

class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <div id="body">
                    <div className="card col-lg-3 col-md-5 col-sm-6 col-xs-12 border border-primary">
                        <img
                            className="card-img-top mt-3"
                            src="http://sandbox-cdn.fluidads.com/cache/image/48618737/b3c4fc4c/eb2431ca/387244fc.jpg/c-0,150,1500,1500"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">About Me</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Body;
