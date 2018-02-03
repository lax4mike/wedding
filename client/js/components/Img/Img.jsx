import React from "react";
import R from "ramda";
import { node, number, string } from "prop-types";


const PADDING = 32;

export default class Img extends React.Component {

  static propTypes = {
    src: string.isRequired,
    naturalWidth: number.isRequired,
    naturalHeight: number.isRequired,
    caption: node
  };

  state = {
    width: 100,
    height: 100
  }

  componentDidMount = () => {
    this.calculateDimensions();
    window.addEventListener("resize", this.calculateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.calculateDimensions);
  }

  calculateDimensions = () => {
    const { naturalWidth, naturalHeight } = this.props;

    const ratio = naturalHeight / naturalWidth;

    const width = Math.min(this.el.offsetWidth - PADDING, naturalWidth);
    const height = width * ratio;

    this.setState({ width, height });
  }

  render = () => {

    const { caption } = this.props;
    const otherProps = R.omit(["caption", "naturalWidth", "naturalHeight"], this.props);
    const { width, height } = this.state;

    /* height so the page doesn't jump when the image is loaded */

    return (
      <div className="img" ref={el => this.el = el}>
        <div className="img__frame">
          <div className="img__holder" style={{ height, width }}>
            <img {...otherProps} />
          </div>
          {caption && (
            <div className="img__caption">{caption}</div>
          )}
        </div>
      </div>
    );
  };
}
