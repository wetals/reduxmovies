import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../test/testUtils";
import Genres from "../Genres";

const defaultProps = {
  genres: [2, 3],
  genresList: {
    1: "foo",
    2: "bar",
    3: "baz",
    4: "faz"
  }
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Genres {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ defaultProps });
  const component = findByTestAttr(wrapper, "component-genres");
  expect(component.length).toBe(1);
});

test("renders correct number of genres", () => {
  const wrapper = setup({ defaultProps });
  const genreNode = findByTestAttr(wrapper, "genre");
  expect(genreNode.children()).toHaveLength(defaultProps.genres.length);
});

test("renders names of genre", () => {
  const wrapper = setup({ defaultProps });
  const component = findByTestAttr(wrapper, "component-genres");
  const genreNames = defaultProps.genres
    .map(id => defaultProps.genresList[id])
    .join("");
  expect(component.text()).toContain(genreNames);
});

test("does not throw warning with expected props", () => {
  checkProps(Genres, defaultProps);
});
