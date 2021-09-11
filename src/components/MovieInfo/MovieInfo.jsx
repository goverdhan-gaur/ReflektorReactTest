import React from "react";
import "./MovieInfo.scss";
import getMoviePosterURL from "../../utils/get-movie-poster-url";
import getDateObjectFromString from "../../utils/get-date-object-from-string";

const defaultProps = {};

const MovieInfo = (props) => {
  const {
    movieId: id,
    poster_path,
    title,
    overview,
    release_date,
  } = props.movie;

  const posterURL = getMoviePosterURL(poster_path);
  const releaseYear = getDateObjectFromString(release_date).getFullYear();

  return (
    <div className="MovieInfo">
      <img src={posterURL} alt={title} />
      <div>
        <p className="MovieYear">{releaseYear}</p>
        <h1 className="MovieTitle">{title}</h1>
        <p className="MovieOverview">{overview}</p>
      </div>
    </div>
  );
};

MovieInfo.defaultProps = defaultProps;

export default MovieInfo;
