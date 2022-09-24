import React from "react";
import "./Title.css";

function Title(props) {
  return <h1 className={`title`}> Hi {props.user}</h1>;
}

export default Title;