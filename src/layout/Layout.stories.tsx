import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";
import { navLinks } from "../constants/navLinks";

storiesOf("Layout", module)
  .addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>)
  .add("Header", () => <Header title="My TV Shows" navLinks={navLinks} />);
