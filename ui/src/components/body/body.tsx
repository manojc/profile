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
                <div id="body" className="container-fluid">
                    <div className="card-row row">
                        <div className="card mr-1 ml-1 mb-3">
                            <img className="card-img-top" src="/public/assets/about-me.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">About Me</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                        <div className="card mr-1 ml-1 mb-3">
                            <img className="card-img-top" src="/public/assets/about-me.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Career</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                        <div className="card mr-1 ml-1 mb-3">
                            <img className="card-img-top" src="/public/assets/about-me.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Education</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                        <div className="card mr-1 ml-1 mb-3">
                            <img className="card-img-top" src="/public/assets/about-me.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Hobbies</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                        <div className="card mr-1 ml-1 mb-3">
                            <img className="card-img-top" src="/public/assets/about-me.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Hire Me</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Body;
