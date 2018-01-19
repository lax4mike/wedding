import React from "react";
import R from "ramda";
import classNames from "classnames";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";


import { NavLink } from "react-router-dom";

import { getOffsetTop, getScrollTop } from "../../scrollHelpers.js";

import { object } from "prop-types";

export default class Navigation extends React.Component {

  static propTypes = {
    location: object
  };

  state = {
    isMobile: false,
    activeSectionId: "",
    sections: []
  };

  componentWillMount = () => {
    this.links = {};
    this.handleResize();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
    document.addEventListener("scroll", this.handleScroll);

    this.handleScroll();
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate = (prevProps, prevState) => {

    const { activeSectionId } = this.state;

    // if the activeSectionId has changed
    if (activeSectionId !== prevState.activeSectionId){

      // update the hash #
      this.updateHash(activeSectionId);

      // scroll to the active section link in navigation (left/right)
      this.scrollNavToSection(activeSectionId);
    }
  }

  updateHash = debounce((id) => {
    const hash = id ? "#" + id : "";
    const newLocation = window.location.pathname + window.location.search + hash;
    history.replaceState(null, null, newLocation);
  }, 300)

  scrollNavToSection = (section) => {
    const el = this.links[section];

    if (el){
      const center = el.offsetLeft + (el.offsetWidth / 2);
      const scrollLeft = center - (this.container.offsetWidth / 2);

      this.container.scroll({
        left: scrollLeft,
        behavior: "smooth"
      });
    }
  }


  handleResize = throttle(e => {

    const windowWidth = window.innerWidth;

    this.setState({
      isMobile: (windowWidth < 900)
    });

  }, 100);

  findSections = throttle(() => {
    const allSections = [...document.querySelectorAll("section[id]")]; // NodeList to Array

    return allSections.map(el => {
      const id = el.getAttribute("id");
      return {
        el,
        id,
        top: getOffsetTop(el) - 24, // minus offset
        title: titlizeId(id)
      };
    });

  }, 1000);

  handleScroll = e => {

    const sections = this.findSections();

    // TODO make this smarter
    const activeSectionObj = sections.reduce((active, section) => {
      const past = getScrollTop() - section.top;
      return (past >= 0 && past < active.past)
        ? { past, section }
        : active;
    }, { past: Infinity });

    this.setState({
      activeSectionId: R.path(["section", "id"], activeSectionObj),
      sections
    });
  }

  registerLink = id => el => {
    this.links[id] = el;
  }

  render = () => {

    const {  } = this.props;
    const {
      // isMobile // do i need this?
      activeSectionId, sections } = this.state;

    return (
      <nav>
        <div className="nav__container container" ref={el => this.container = el}>
          {sections.map((section, i) => {
            const classes = classNames("nav__item", {
              "is-active": section.id === activeSectionId
            });
            return (
              <div key={section.id} className={classes} ref={this.registerLink(section.id)}>
                <NavLink exact to={`#${section.id}`} key={section.id}>
                  {section.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </nav>
    );
  }
}


function titlizeId(id){
  return R.compose(
    R.join(" "),
    R.map(R.replace(/^./, R.toUpper)),
    R.split("-")
  )(id);
}
