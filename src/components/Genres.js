import React from "react";
import PropTypes from "prop-types";

const Genres = props => {
  return (
    <div data-test="component-genres">
      {props.genres.map(id => (
        <div key={id} data-test="genre">
          {props.genresList[id]}
        </div>
      ))}
    </div>
  );
};

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
  genresList: PropTypes.object.isRequired
};

export default Genres;
