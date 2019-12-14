import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import { Container, Header, Menu } from "semantic-ui-react"

export const TopNav = props => (
    <Container as="nav" style={{ marginBottom: "150px" }}>
        <Header inverted as="h1">
            The Pin Supply
        </Header>
        <Menu borderless compact inverted>
            <Link to={"/"}>
                <Menu.Item >Home</Menu.Item>
            </Link>
            <Link to={"/pins"}>
                <Menu.Item>Store</Menu.Item>
            </Link>
            <Link to={"/customers/1"} >
                <Menu.Item>Admin Profile</Menu.Item>
            </Link>
        </Menu>
    </Container>
)













