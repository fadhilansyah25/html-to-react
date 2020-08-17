import React from "react";

import propTypes from "prop-types";

export default function Lists(props) {
  const className = ["list-reset"];
  className.push(props.className);
  if (props.isSmall) {
    className.push("text-xs");
  }
  return (
    <ul className={`pricing-item-features-list mb-32 ${className.join(" ")}`}>
      {props.data.map((list, index) => 
        <li key={index} className={list.isChecked ? "is-checked" : ""}>{list.content}</li>
      )}
    </ul>
  );
}

Lists.propTypes = {
  data: propTypes.array,
  isSmall: propTypes.bool
};
