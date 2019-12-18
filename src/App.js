import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import Homepage from "./components/dashboard/HomePage";
import Pins from "./components/pins/Pins"
import adminPortal from "./components/customer/adminPortal"

import { fetchAllPosts } from "./store/blog_posts/actions";
import { fetchAllPins } from "./store/pins/actions"
import { fetchAllCustomers } from "./store/customers/actions"


class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
    this.props.fetchAllPins()
    this.props.fetchAllCustomers()
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Grid.Column>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/pins" component={Pins} />
              <Route path="/customers/1" component={adminPortal} />
            </Switch>
          </Grid.Column>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers,
    blog_posts: state.blog_posts,
    pins: state.pins

  };
};

export default connect(mapStateToProps, {
  fetchAllCustomers,
  fetchAllPosts, fetchAllPins
})(App);
