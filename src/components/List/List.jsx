import React from "react";
import "./List.scss";

const defaultProps = {};

const List = (props) => {
  console.log(props.listItem)
  const getFilterName = () => {
    return props.movieGenres.filter((list) =>
      props.listItem.some((genre) => list.id === genre)
    );
  };

  return (
    <ul className={props.className}>
      {getFilterName().map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

List.defaultProps = defaultProps;

export default List;
