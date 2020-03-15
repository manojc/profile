import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Components from "../index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    private _buildAnimationTemplate() {
        return (
            <div className="area">
                <ul className="circles">
                    {Array.from(Array(10)).map((_, i) => (
                        <li key={i}></li>
                    ))}
                </ul>
            </div>
        );
    }

    render(): React.ReactNode {
        return (
            <Router>
                {this._buildAnimationTemplate()}
                <Components.Header></Components.Header>
                <Components.Body></Components.Body>
                <Components.Footer></Components.Footer>
            </Router>
        );
    }
}
export default App;
