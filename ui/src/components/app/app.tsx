import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component<{}> {

    public constructor(props: any) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <h1>
                Hello World!
            </h1>
        );
    }
}