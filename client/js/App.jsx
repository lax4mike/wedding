import React from "react";
import R from "ramda";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getOffsetTop, scrollTo, measureNavContainerOffset } from "./scrollHelpers.js";

import Home from "./pages/Home.jsx";

import { shape, string } from "prop-types";

class App extends React.Component {

  static propTypes = {
    location: shape({
      hash: string
    })
  }

  componentWillMount = () => {
    // remove the hash so the browser doesn't auto jump
    // we will get the hash from this.props.location.hash
    history.replaceState(null, null, ".");
  }

  componentDidMount = () => {
    // defer the scroll to any hash that's in the url
    window.requestAnimationFrame(this.handleRouteChange);
  }

  componentDidUpdate = (prevProps) => {
    this.handleRouteChange();
  }

  handleRouteChange = () => {

    const hash = R.path(["location", "hash"], this.props);

    // if there is a hash in the url, scroll to it
    if (hash){
      const el = document.querySelector(hash);

      if (el){
        scrollTo(getOffsetTop(el) - measureNavContainerOffset());
      }
    }
    // if the user clicked the footer nav or some other link mid-page,
    // we  want to jump to the top
    else {
      window.scrollTo(0, 0);
    }
  }

  render = () => {
    return (
      <div>

        <Switch>

          <Route exact path="/" render={({ match }) =>(
            <Home />
          )} />

          {/* if nothing else matches */}
          <Redirect to="/" />

        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
