import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { navLinks } from "../constants/navLinks";

import Navigator from "./Navigator";

storiesOf("Navigator", module)
  .addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>)
  // @ts-ignore
  .add("with NavItem", () => <Navigator navLinks={navLinks} />);
