import React, { useState, useEffect } from "react";
import "./Checkbox.scss";

const defaultProps = {};
const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    props.selectedFilters.includes(props.genre.id) && setIsChecked(true);
  });
  const onChangehandler = (e) => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
    props.CheckboxClickHandler(e);
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={props.genre.id}
        onChange={onChangehandler}
        checked={isChecked ? "checked" : ""}
      />
      <label htmlFor={props.genre.id}>{props.genre.name}</label>
    </div>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
