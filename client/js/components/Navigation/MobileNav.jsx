import React from "react";
import R from "ramda";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { arrayOf, shape, string } from "prop-types";

export default class MobileNav extends React.Component {

  static propTypes = {
    sections: arrayOf(shape({
      id: string.isRequired,
      title: string.isRequired
    }))
  };

  state = {
    isWrapped: false
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.checkForWrap);

    // run this _after_ the first render
    window.requestAnimationFrame(() => {
      this.checkForWrap();
    });
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.checkForWrap);
  }

  checkForWrap = () => {
    // only show the nav if it's wrapped
    // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild
    const offsetTop = R.path(["container", "lastElementChild", "offsetTop"], this);
    const height = R.path(["container", "lastElementChild", "offsetHeight"], this);
    const isWrapped = offsetTop > height; // padding of the parent

    this.setState({ isWrapped });
  }

  render = () => {

    const { sections } = this.props;
    const { isWrapped } = this.state;

    const classes = classNames("mobile-nav", {
      "is-hidden": !isWrapped
    });

    return (
      <div className={classes} ref={el => this.container = el}>
        {sections.map(section => {
          return (
            <div key={section.id} className="mobile-nav__item">
              <NavLink exact to={`#${section.id}`} key={section.id} className="nav__link">
                {section.title}
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}
