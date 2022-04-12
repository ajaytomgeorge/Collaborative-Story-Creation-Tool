import React from "react";
import Enzyme from "enzyme";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import JoinNow from "./Components/JoinNow";
import StoryHeader from "./Components/StoryHeader";
import Tags from "./Components/Tags";

const { shallow } = Enzyme; //whatever you want to use here



test("component exists", () => {
  expect(Header).toBeDefined();
});

test("component exists", () => {
  expect(Intro).toBeDefined();
});


test("component exists", () => {
  expect(JoinNow).toBeDefined();
});

test("component exists", () => {
  expect(StoryHeader).toBeDefined();
});

test("component exists", () => {
  expect(Tags).toBeDefined();
});

