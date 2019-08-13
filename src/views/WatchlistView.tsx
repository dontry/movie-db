
import React from "react"
import { Container } from "layout/Container";
import { WatchList, WatchListProps } from "components/WatchList";

export const WatchListView = ({ movies, onDelete }: WatchListProps) => {
  return (
    <Container>
      <WatchList movies={movies} onDelete={() => { }} />
    </Container>
  )
}


export default WatchListView;
