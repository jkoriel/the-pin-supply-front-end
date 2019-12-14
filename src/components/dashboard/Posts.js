import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { Container, Header, Divider } from "semantic-ui-react";


const Posts = ({ post }) => {
    return (
        <Container>
            <Header style={{ marginTop: "5px" }}>{post.title}</Header>
            <p style={{ paddingTop: "10px", marginBottom: "20px", fontSize: "12pt" }}>{post.body}</p>
            <Divider inverted />
        </Container>
    );
}


const mapStateToProps = state => {
    return {
        blog_posts: state.blog_posts
    };
};
export default connect(mapStateToProps)(Posts);
