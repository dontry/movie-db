import React from "react";
import { storiesOf } from "@storybook/react";
import { ResultTable, MovieItem } from "./ResultTable"
import { movies } from "../constants/movies"

// storiesOf("MovieItem", module).add("with info", () => (
//   // <MovieItem movie={movies[0]} onToggle={(id, favorite) => console.log(`Toggle ${id} from ${favorite} to ${!favorite}`)} />
// ));

storiesOf("ResultTable", module).add("table", () => (
  <ResultTable movies={movies} onToggle={(id: number, favorite: boolean) => console.log(`Toggle ${id} from ${favorite} to ${!favorite}`)} />

))
