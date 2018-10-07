import React from "react";
import PropTypes from "prop-types";

const Moviedata = props => {
  return (
    <div data-test="component-movie-data">
      <div>{props.title}</div>
      <div>{props.overview}</div>
      <div>{props.vote_average}</div>
    </div>
  );
};

Moviedata.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number
};

export default Moviedata;
