import React from "react";
import { storiesOf } from "@storybook/react";
import { ShowItem } from "./WatchList";
import { shows } from "../constants/shows";

storiesOf("ShowItem", module).add("with info", () => (
  <ShowItem show={shows[0]} onRemove={id => console.debug(`Delete ${id}`)} />
));
