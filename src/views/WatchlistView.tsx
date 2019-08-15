import React from "react";
import { Container } from "layout/Container";
import { WatchList, WatchListProps } from "components/WatchList";

export const WatchListView = ({ shows, onDelete }: WatchListProps) => {
  return (
    <Container>
      <WatchList shows={shows} onDelete={() => {}} />
    </Container>
  );
};

export default WatchListView;
