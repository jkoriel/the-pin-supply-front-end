import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import "../../App.css";
import { TopNav } from "../layout/TopNav";
import PinList from "./PinList"

class Pins extends Component {
    render() {
        return (
            <div className="Homepage">
                <Segment inverted vertical textAlign="center">
                    <TopNav />
                    <PinList />
                </Segment>
            </div>
        );
    }
}

export default Pins