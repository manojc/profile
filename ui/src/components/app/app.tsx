import * as React from "react";
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

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <Components.Header></Components.Header>
                <Components.Body></Components.Body>
                <Components.Footer></Components.Footer>
            </React.Fragment>
        );
    }
}
export default App;
