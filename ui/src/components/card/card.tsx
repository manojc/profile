import * as React from "react";

export interface CardProps {
    card: any;
}

export interface CardState {}

class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card mr-2 ml-2 mb-3">
                <img className="card-img-top" src={this.props.card.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{this.props.card.title}</h5>
                    <p className="card-text">{this.props.card.description}</p>
                    <a href="#" className="btn btn-primary float-right">
                        {this.props.card.button_label}
                    </a>
                </div>
            </div>
        );
    }
}

export default Card;
