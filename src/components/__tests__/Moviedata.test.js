import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../test/testUtils";
import Moviedata from "../Moviedata";

const defaultProps = {
  title: "",
  overview: "",
  vote_average: 3
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Moviedata {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-movie-data");
  expect(component.length).toBe(1);
});

test("renders information about the movie", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-movie-data");
  expect(component.children().length).toBeGreaterThan(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Moviedata, defaultProps);
});
