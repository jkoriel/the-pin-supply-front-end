import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import Homepage from "./components/dashboard/HomePage";

import { fetchAllPosts } from "./store/blog_posts/actions";


class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Grid.Column>
            <Switch>
              <Route exact path="/" component={Homepage} />
            </Switch>
          </Grid.Column>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => {
  return {
    blog_posts: state.blog_posts,
  };
};

export default connect(mapStateToProps, {
  fetchAllPosts
})(App);
