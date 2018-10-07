import React from "react";

const Moviedata = props => {
  return (
    <div data-test="component-movie-data">
      <div>{props.title}</div>
      <div>{props.overview}</div>
      <div>{props.vote_average}</div>
    </div>
  );
};

export default Moviedata;
