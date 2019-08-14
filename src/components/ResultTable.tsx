import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { Show } from "../models/Show";
import { getYear } from "../utils/getYear";
import garbage from "../assets/garbage.svg";
import add from "../assets/add.svg";

const TableBodyRow = styled.tr`
  width: 100%;
`;

const TableBodyCell = styled.td`
  align-content: center;
  padding: 5px;
  text-align: center;
  width: calc(100% / 5);
  overflow: hidden;
`;

const ShowCover = styled.img`
  width: 100px;
  height: 100px;
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
  onToggle(id: number, favorite: boolean): void;
}

export const ShowItem = ({ show, onToggle }: ShowItemProps) => {
  const { id, poster_path, title, vote_average, release_date, original_language, favorite } = show;
  return (
    <TableBodyRow>
      <TableBodyCell>
        <ShowCover
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title}
        />
      </TableBodyCell>
      <TableBodyCell>{title}</TableBodyCell>
      <TableBodyCell>{getYear(release_date)}</TableBodyCell>
      <TableBodyCell>{vote_average}</TableBodyCell>
      <TableBodyCell>{original_language}</TableBodyCell>
      <TableBodyCell onClick={() => onToggle(id, !!favorite)}>
        {" "}
        <ActionIcon src={!!favorite ? garbage : add} />{" "}
      </TableBodyCell>
    </TableBodyRow>
  );
};

const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead``;

const TableHeadRow = styled.tr`
  display: block;
`;

const TableHeadCell = styled.th`
  padding: 5px;
  text-align: center;
  width: calc(100% / 5);
  border-bottom: 1px solid #f8f8f8;
`;

const TableBody = styled.tbody`
  display: block;
  width: 100%;
  overflow: auto;
  height: 50vh;
`;

interface ResultTableProps {
  shows: Show[];
  onToggle(id: number, favorite: boolean): void;
}

export const ResultTable = ({ shows = [], onToggle }: ResultTableProps) => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Cover</TableHeadCell>
          <TableHeadCell>Title</TableHeadCell>
          <TableHeadCell>Year</TableHeadCell>
          <TableHeadCell>Rate</TableHeadCell>
          <TableHeadCell>Lang</TableHeadCell>
          <TableHeadCell>Add/Remove Watchlist</TableHeadCell>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
        {shows.map(show => (
          <ShowItem show={show} onToggle={onToggle} />
        ))}
      </TableBody>
    </Table>
  );
};
