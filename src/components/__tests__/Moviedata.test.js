import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import Moviedata from "../Moviedata";

const setup = (props = {}) => {
  return shallow(<Moviedata {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-movie-data");
  expect(component.length).toBe(1);
});

test("renders information about the movie", () => {
  const testProps = {
    title: "",
    overview: "",
    vote_average: ""
  };
  const wrapper = setup(testProps);
  const component = findByTestAttr(wrapper, "component-movie-data");
  expect(component.children().length).toBeGreaterThan(1);
});
