import * as React from "react";
import "./body.css";
import Components from "..";
import * as cards from "./cards.json";

export interface BodyProps {}

export interface BodyState {
    cards: Array<any>;
}

class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {
            cards: [...cards]
        };
    }

    buildCards(): Array<any> {
        return this.state.cards.map((card, index) => {
            return <Components.Card key={index} card={card}></Components.Card>;
        });
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div id="body" className="container-fluid">
                    <div className="card-row row">{this.buildCards()}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Body;
