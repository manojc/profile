import * as React from "react";

export interface CvProps {
    id: string;
}

export interface CvState {}

class Cv extends React.Component<CvProps, CvState> {
    constructor(props: CvProps) {
        super(props);
        this.state = {};
    }
    render() {
        return <embed src="/public/assets/cv.pdf" width="100%" height="100%"></embed>;
    }
}

export default Cv;
