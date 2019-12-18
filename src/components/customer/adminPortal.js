import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, List, Item, Header, Form, Button } from "semantic-ui-react";
import "../../App.css";
import { TopNav } from "../layout/TopNav";
import { connect } from "react-redux";
import { addPost } from "../../store/blog_posts/actions"

const adminPortal = props => {
    const customer = props.customers[0]

    // // handleSubmit = e => {
    // //     e.preventDefault();
    // //     this.props.dispatch(
    // //         addPost({
    // //             content: this.state.newPost
    // //         })
    // //     );
    // };

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
            <Form style={{ marginLeft: "500px" }}>
                <Form.Group>
                    <Form.TextArea onChange={e => this.setState({ newPost: e.target.value })} style={{ backgroundColor: "#E28F7D", color: "white" }} label='Submit Blog Post' />
                </Form.Group>
                <Button inverted>Submit</Button>
            </Form>
        </Segment >
    )
}
const mapStateToProps = state => {
    return {
        customers: state.customers.all
    };
};
export default connect(mapStateToProps)(adminPortal);