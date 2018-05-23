import React from "react";
import R from "ramda";
import classNames from "classnames";
import throttle from "lodash.throttle";
import MobileNav from "./MobileNav.jsx";

import { NavLink } from "react-router-dom";

export default class Navigation extends React.Component {

  state = {
    activeSectionId: "",
    sections: []
  };

  componentWillMount = () => {
    this.links = {};
  }

  componentDidMount = () => {
    document.addEventListener("scroll", this.handleScroll);

    // initialize the sections
    this.setState({
      sections: this.findSections()
    });
  }

  componentWillUnmount = () => {
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

  updateHash = (id) => {
    const hash = id ? "#" + id : "";
    const newLocation = window.location.pathname + window.location.search + hash;

    history.replaceState(null, null, newLocation);
  }

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

  findSections = () => {
    const allSections = [...document.querySelectorAll("section[id]")]; // NodeList to Array

    return allSections.map(el => {
      const id = el.getAttribute("id");

      const rect = el.getBoundingClientRect();
      return {
        el,
        id,
        rect,
        percentVisible: getPercetageVisible(rect),
        title: titlizeId(id)
      };
    });

  };

  handleScroll = throttle(e => {

    const sections = this.findSections();

    const activeSectionId = R.compose(
      R.path(["section", "id"]),
      R.reduce((active, section) => {
        const percentage = getPercetageVisible(section.rect);

        return (percentage > active.percentage)
          ? { percentage, section }
          : active;
      }, { percentage: .1 }) // at least 0.1
    )(sections);

    this.setState({ activeSectionId, sections });
  }, 250, { leading: false, trailing: true })

  registerLink = id => el => {
    this.links[id] = el;
  }

  render = () => {

    const { activeSectionId, sections } = this.state;

    return ([
      <nav key="main" >
        <div className="nav__container js-nav-container" ref={el => this.container = el}>
          {sections.map((section, i) => {
            const classes = classNames("nav__item", {
              "is-active": section.id === activeSectionId || section.percentVisible > 0.9
            });
            return (
              <div key={section.id}
                className={classes}
                ref={this.registerLink(section.id)}
              >
                <NavLink exact to={`#${section.id}`} key={section.id} className="nav__link">
                  {section.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </nav>,
      <MobileNav key="mobile" sections={sections} />
    ]);
  }
}


function getPercetageVisible(sectionRect) {
  const { top, bottom, height } = sectionRect;

  const hiddenBefore = Math.abs(Math.min(0, top));
  const hiddenAfter = Math.max(0, bottom - window.innerHeight);

  const percentage = Math.max(0, (height - hiddenBefore - hiddenAfter) / height);

  return percentage;
}

function titlizeId(id){
  return R.compose(
    R.join(" "),
    R.map(R.replace(/^./, R.toUpper)),
    R.split("-")
  )(id);
}
