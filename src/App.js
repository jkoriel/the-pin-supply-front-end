import React from "react";
import "semantic-ui-css/semantic.min.css";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import Homepage from "./components/dashboard/HomePage";

// import { fetchAllUsers } from "./store/users/actions";
// import { fetchAllVideos } from "./store/videos/actions";

class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchAllUsers();
  //   this.props.fetchAllVideos();
  // }

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


export default App
