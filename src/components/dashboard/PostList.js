import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { Container, Header, Item } from "semantic-ui-react";

const PostList = props => {
    let listOfPosts = props.blog_posts.all.map(post => (
        <Posts key={post.id} post={post} />
    ));
    return (
        <Container style={{ marginTop: "250px" }}>
            <Header inverted as="h1" style={{ fontSize: "36pt" }}>
                The Pin Supply Blog:
            </Header>
            <Item>
                {listOfPosts}
            </Item>
        </Container >
    );
};
const mapStateToProps = state => {
    return {
        blog_posts: state.blog_posts
    };
};

export default connect(mapStateToProps)(PostList);
