import React from "react";
import { storiesOf } from "@storybook/react";
import { ResultTable, ShowItem } from "./ResultTable";
import { shows } from "../constants/shows";

storiesOf("ResultTable", module).add("table", () => (
  <ResultTable
    shows={shows}
    toggleWatchList={(id: number, watchlist: boolean) =>
      console.log(`Toggle ${id} from ${watchlist} to ${!watchlist}`)
    }
  />
));
