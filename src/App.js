import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import Homepage from "./components/dashboard/HomePage";
import Pins from "./components/pins/Pins"

import { fetchAllPosts } from "./store/blog_posts/actions";
import { fetchAllPins } from "./store/pins/actions"


class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
    this.props.fetchAllPins()

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Grid.Column>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/pins" component={Pins} />
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
    pins: state.pins
  };
};

export default connect(mapStateToProps, {
  fetchAllPosts, fetchAllPins
})(App);
