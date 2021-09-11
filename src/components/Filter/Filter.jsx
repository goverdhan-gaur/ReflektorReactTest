import React from "react";
import Container from "../Container/Container";
import List from "../List/List";
import "./Filter.scss";

const defaultProps = {};

const Filter = (props) => {
  return (
    <div className="filter">
      <Container>
        <div className="filter-actions">
          <button className="filter-button" onClick={props.onClickFilter}>
            Filters
          </button>
          {props.selectedFilters.length > 0 && (
            <button
              className="filter-button_clear"
              onClick={props.clearFiltersList}
            >
              Clear All
            </button>
          )}
        </div>
        <List
          className="filter-list-items"
          listItem={props.selectedFilters}
          movieGenres={props.movieGenres}
        />
      </Container>
    </div>
  );
};

Filter.defaultProps = defaultProps;

export default Filter;
