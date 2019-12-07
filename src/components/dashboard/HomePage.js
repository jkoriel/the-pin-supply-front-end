import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Container, Header, Menu, Segment } from "semantic-ui-react";

import "../../App.css";

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Segment inverted vertical textAlign="center">
                    <Container as="nav">
                        <Header inverted as="h1">
                            The Pin Supply
                        </Header>
                        <Menu borderless compact inverted>
                            <Menu.Item active>Home</Menu.Item>
                            <Menu.Item>Store</Menu.Item>
                            <Menu.Item>Profile</Menu.Item>
                        </Menu>
                    </Container>
                    <Container className="content">
                        <Header inverted as="h1">
                            Get your pin on.
                        </Header>
                        <p>
                            Coming Soon:
                        </p>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default Homepage;