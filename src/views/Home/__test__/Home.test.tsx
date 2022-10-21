import React from "react";
import { test, expect, describe } from "@jest/globals";
import renderer from "react-test-renderer";
import Home from "../Home";

describe("Home page", () => {
  test("renders", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
