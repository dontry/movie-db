import React from "react";
import { storiesOf } from "@storybook/react";
import { ResultTable } from "./ResultTable";
import { shows } from "../constants/shows";

storiesOf("ResultTable", module).add("table", () => (
  <ResultTable
    shows={shows}
  />
));
