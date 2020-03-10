import * as React from "react";
import { Component } from "react";
import Components from "../index";

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
                <div className="container-fluid">
                    <Components.Header></Components.Header>
                    <Components.Body></Components.Body>
                    <Components.Footer></Components.Footer>
                </div>
            </React.Fragment>
        );
    }
}
export default App;
