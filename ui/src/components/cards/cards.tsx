import * as React from "react";
import { Link } from "react-router-dom";
import { Card as CardModel } from "../../models";
import "./cards.css";
import * as cards from "./cards.json";

export interface CardProps {}

export interface CardState {
    cards: Array<CardModel>;
}

class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.state = { cards: [...cards] };
    }

    private _buildCardTemplate(card: CardModel, key: number): React.ReactNode {
        return (
            <div key={key} className="card mr-2 ml-2 mb-3">
                <img className="card-img-top" src={card.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <Link to={card.route} className="btn btn-primary float-right">
                        {card.button_label}
                    </Link>
                </div>
            </div>
        );
    }

    private _buildCardsTemplate(): React.ReactNode {
        return (
            <div id="cards-view" className="row">
                {this.state.cards.map((card, index) => this._buildCardTemplate(card, index))}
            </div>
        );
    }

    render() {
        return this._buildCardsTemplate();
    }
}

export default Card;
