import React from "react";
import styled from "styled-components";
import { layout, space, color, LayoutProps, ColorProps, SpaceProps } from "styled-system";
import { Show } from "../models/Show";
import { getYear } from "../utils/getYear";
import garbage from "../assets/garbage.svg";
import add from "../assets/add.svg";


const CellWidth = ["100px", "200px", "250px"];
const TableBodyRow = styled.tr`
`;

const TableBodyCell = styled.td<LayoutProps>`
  box-sizing: border-box;
  align-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  overflow: hidden;
  /* border: 1px solid #000; */
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

export interface ShowItemProps {
  show: Show;
  toggleWatchList(id: number, watchlist: boolean): void;
}

export const ShowItem = ({ show, toggleWatchList }: ShowItemProps) => {
  const { id, poster_path, name: title, vote_average, first_air_date, original_language, watchlist } = show;
  return (
    <TableBodyRow>
      <TableBodyCell width={CellWidth}>
        <ShowCover
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title}
        />
      </TableBodyCell >
      <TableBodyCell width={CellWidth}>{title}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{getYear(first_air_date)}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{vote_average}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{original_language}</TableBodyCell>
      <TableBodyCell width={CellWidth} onClick={() => toggleWatchList(id, !watchlist)}>
        <ActionIcon src={!!watchlist ? garbage : add} />{" "}
      </TableBodyCell>
    </TableBodyRow>
  );
};

const Table = styled.table<LayoutProps | ColorProps>`
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid #e8e8e8;
  border-spacing: 0;
  ${layout}
  ${color}
`;

const TableHead = styled.thead`
`;

const TableHeadRow = styled.tr<SpaceProps>`
  display: block;
  border-bottom: 1px solid #e8e8e8;
  ${space}
`;

const TableHeadCell = styled.th<LayoutProps>`
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  /* border: 1px solid #000; */
  ${layout}
`;

const TableBody = styled.tbody<LayoutProps>`
  display: block;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ${layout}
`;

const EmptyText = styled.h4`
  margin: 32px auto;
  text-align: center;
  color: #bbb;
`

interface ResultTableProps {
  shows: Show[];
  toggleWatchList(id: number, watchlist: boolean): void;
}

export const ResultTable = ({ shows = [], toggleWatchList }: ResultTableProps) => {
  return (
    <Table>
      <TableHead >
        <TableHeadRow >
          <TableHeadCell width={CellWidth}>Cover</TableHeadCell>
          <TableHeadCell width={CellWidth}>Title</TableHeadCell>
          <TableHeadCell width={CellWidth}>Year</TableHeadCell>
          <TableHeadCell width={CellWidth}>Rate</TableHeadCell>
          <TableHeadCell width={CellWidth}>Lang</TableHeadCell>
          <TableHeadCell width={CellWidth}>Add/Remove<br /> Watchlist</TableHeadCell>
        </TableHeadRow>
      </TableHead>
      {shows.length === 0 ?
        <EmptyText>Empty list</EmptyText> :
        <TableBody height={["60vh", "50vh"]}>
          {shows.map(show => (
            <ShowItem show={show} toggleWatchList={toggleWatchList} />
          ))}
        </TableBody>}
    </Table>
  );
};
