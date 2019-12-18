import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, List, Item, Header } from "semantic-ui-react";
import "../../App.css";
import { TopNav } from "../layout/TopNav";
import { connect } from "react-redux";

const adminPortal = props => {
    const customer = props.customers[0]
    return (
        <Segment inverted vertical >
            <TopNav />
            <Item.Group>
                <Item style={{ marginLeft: "500px" }}>
                    <Item.Content>
                        <Item.Header as="a"></Item.Header>
                        <Item.Description>
                            <List>
                                <Header>Welcome Jacob!</Header>
                                <List.Item>
                                    <List.Icon name="users" />
                                    <List.Content style={{ fontSize: "18pt" }}>{customer.first_name} {customer.last_name}</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name="phone" />
                                    <List.Content style={{ fontSize: "18pt" }}>{customer.phone}.</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name="mail" />
                                    <List.Content style={{ fontSize: "18pt" }}>{customer.email}</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name="marker" />
                                    <List.Content style={{ fontSize: "18pt" }}>{customer.address}</List.Content>
                                </List.Item>
                            </List>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    )
}
const mapStateToProps = state => {
    return {
        customers: state.customers.all
    };
};
export default connect(mapStateToProps)(adminPortal);