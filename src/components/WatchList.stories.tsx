import React from "react";
import { storiesOf } from "@storybook/react";
import { MovieItem } from './WatchList'
import { movies } from '../constants/movies'



storiesOf("MovieItem", module).add("with info", () => (
  <MovieItem movie={movies[0]} onDelete={(id, favorite) => console.log(`Delete ${id}`)} />
));

