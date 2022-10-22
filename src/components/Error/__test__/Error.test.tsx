import React from "react";
import { test, expect, describe } from "@jest/globals";
import renderer from "react-test-renderer";
import Error from "../Error";

describe("Home page", () => {
  test("renders", () => {
    const tree = renderer.create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
