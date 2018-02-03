import React from "react";
import classNames from "classnames";
import { number, string } from "prop-types";

const propTypes = {
  width: number,
  height: number,
  fill: string,
  className: string
};

const RightArrow = (props) => {

  const {
    width = 16,
    height = 12,
    className,
    ...rest
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={width} height={height}
      fill="none"
      stroke="white"
      viewBox="0 0 15 12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={classNames("svg", "svg--right-arrow", "icon", className)}
      {...rest}
    >
      <path  d="M 1,6 L 12,6" />
      <path d="M 8,1 L 12,6 L 8,11" fill="none" stroke="white"/>
    </svg>
  );
};

RightArrow.propTypes = propTypes;
export default RightArrow;
