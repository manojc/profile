import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Components from "..";
import "./body.css";

export interface BodyProps {}

export interface BodyState {}

class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {};
    }

    render(): React.ReactNode {
        return (
            <div id="body" className="container-fluid">
                <Switch>
                    <Route exact path="/" component={Components.Cards} />
                    <Route exact path="/about-me" component={Components.AboutMe} />
                    <Route exact path="/career" component={Components.Career} />
                    <Route exact path="/education" component={Components.Education} />
                    <Route exact path="/hobbies" component={Components.Hobbies} />
                    <Route exact path="/hire-me" component={Components.HireMe} />
                    <Route exact path="/website-tech-stack" component={Components.WebsiteTechSTack} />
                    <Route path="**" component={Components.PageNotFound} />
                </Switch>
            </div>
        );
    }
}

export default Body;
