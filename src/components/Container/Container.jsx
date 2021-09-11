import React from "react";
import "./Container.scss";

const defaultProps = {};

const Container = (props) => {
  return (
    <div className={`container ${props.className}`}>{props.children}</div>
  );
};

Container.defaultProps = defaultProps;

export default Container;
