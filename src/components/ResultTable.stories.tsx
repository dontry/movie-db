import React from "react";
import { storiesOf } from "@storybook/react";
import { ResultTable } from "./ResultTable";
import { shows } from "../constants/shows";
import { Provider } from "react-redux";
import { configureStore } from "../store";

const { store } = configureStore();

storiesOf("ResultTable", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("with content", () => <ResultTable shows={shows} loading={false} />)
  .add("empty", () => <ResultTable shows={[]} loading={false} />)
  .add("loading", () => <ResultTable shows={[]} loading={true} />);
