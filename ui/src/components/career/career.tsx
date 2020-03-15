import * as React from "react";
import { Link } from "react-router-dom";
import "../cards/cards.css";

export interface CareerProps {}

export interface CareerState {}

class Career extends React.Component<CareerProps, CareerState> {
    constructor(props: CareerProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="cards-view" className="row">
                <div className="card col-lg-8 col-md-8 col-sm-10">
                    <img className="card-img-top" src="" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">career</h5>
                        <p className="card-text">career description</p>
                        <Link className="btn btn-primary btn-lg" to="/">
                            Take Me Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Career;
