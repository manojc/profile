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
                    <h1 style={{ textAlign: "center" }}>Body!</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Body;
