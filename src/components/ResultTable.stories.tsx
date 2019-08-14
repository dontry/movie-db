import React from "react";
import { storiesOf } from "@storybook/react";
import { ResultTable, ShowItem } from "./ResultTable"
import { shows } from "../constants/shows"

// storiesOf("ShowItem", module).add("with info", () => (
//   // <ShowItem show={shows[0]} onToggle={(id, favorite) => console.log(`Toggle ${id} from ${favorite} to ${!favorite}`)} />
// ));

storiesOf("ResultTable", module).add("table", () => (
  <ResultTable shows={shows} onToggle={(id: number, favorite: boolean) => console.log(`Toggle ${id} from ${favorite} to ${!favorite}`)} />

))
