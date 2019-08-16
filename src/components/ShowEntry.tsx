import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { layout, space, LayoutProps, SpaceProps } from "styled-system";
import { Show } from "../models/Show";
import { getYear } from "../utils/getYear";
import garbage from "../assets/garbage.svg";
import add from "../assets/add.svg";
import { addToWatchList, removeFromWatchList } from "actions/watchlist";
import { Dispatch } from "redux";

const CellWidth = ["100px", "200px", "250px"];
const TableBodyRow = styled.tr``;

const TableBodyCell = styled.td<LayoutProps | SpaceProps>`
  box-sizing: border-box;
  align-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  overflow: hidden;
  ${space}
  ${layout}
`;

const ShowCover = styled.img`
  width: 80px;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ActionIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export interface Props {
  show: Show;
  toggleWatchList(show: Show, watchlist: boolean): void;
}

export const ShowEntry = ({ show, toggleWatchList }: Props) => {
  const {
    poster_path,
    name: title,
    vote_average,
    first_air_date,
    original_language,
    watchlist
  } = show;
  return (
    <TableBodyRow>
      <TableBodyCell width={CellWidth}>
        <ShowCover
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title}
        />
      </TableBodyCell>
      <TableBodyCell width={CellWidth}>{title}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{getYear(first_air_date)}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{vote_average}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{original_language}</TableBodyCell>
      <TableBodyCell
        width={CellWidth}
        onClick={() => {
          toggleWatchList(show, !watchlist);
        }}
      >
        <ActionIcon src={!!watchlist ? garbage : add} />{" "}
      </TableBodyCell>
    </TableBodyRow>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleWatchList(show: Show, watchlist: boolean) {
    if (watchlist) {
      dispatch(addToWatchList(show));
    } else {
      dispatch(removeFromWatchList(show));
    }
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ShowEntry);
