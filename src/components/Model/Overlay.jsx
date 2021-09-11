import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Modal.scss";

const Overlay = (props) => {
  let filterChoices = [];
  const checkBoxHandler = (e) => {
    filterChoices = props.selectedFilters;
    let filterId = +e.target.id;
    let hasIndex = filterChoices.indexOf(filterId);
    if (hasIndex < 0) {
      filterChoices.push(filterId);
    } else {
      filterChoices.splice(hasIndex, 1);
    }
  };

  const applyButtonHandler = () => {
    props.setFilterList(filterChoices);
    filterChoices = [];
    props.onClickApply();
  };

  return (
    <div className="overlay">
      <div className="overlay-choices">
        {props.genres.map((genre) => {
          return (
            <Checkbox
              key={genre.id}
              genre={genre}
              CheckboxClickHandler={checkBoxHandler}
              selectedFilters={props.selectedFilters}
            />
          );
        })}
      </div>
      <div className="overlay-actions">
        <button onClick={applyButtonHandler}>Apply</button>
      </div>
    </div>
  );
};

export default Overlay;
