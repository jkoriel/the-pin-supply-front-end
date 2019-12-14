import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import "../../App.css";
import { TopNav } from "../layout/TopNav";
import PostList from "./PostList"

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Segment inverted vertical textAlign="center">
                    <TopNav />
                    <PostList />
                </Segment>
            </div>
        );
    }
}

export default Homepage;