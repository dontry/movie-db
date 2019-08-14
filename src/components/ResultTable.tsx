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
  align-content: center;
  padding: 5px;
  text-align: center;
  overflow: hidden;
  ${layout}
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
      <TableBodyCell width={CellWidth}>
        <ShowCover
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title}
        />
      </TableBodyCell >
      <TableBodyCell width={CellWidth}>{title}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{getYear(release_date)}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{vote_average}</TableBodyCell>
      <TableBodyCell width={CellWidth}>{original_language}</TableBodyCell>
      <TableBodyCell width={CellWidth} onClick={() => onToggle(id, !!favorite)}>
        <ActionIcon src={!!favorite ? garbage : add} />{" "}
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
  text-align: center;
  ${layout}
`;

const TableBodyWrapper = styled.div`
  display: block;
  overflow: auto;
  height: 50vh;
`;

const TableBody = styled.tbody`
`;

interface ResultTableProps {
  shows: Show[];
  onToggle(id: number, favorite: boolean): void;
}

export const ResultTable = ({ shows = [], onToggle }: ResultTableProps) => {
  return (
    <Table>
      <TableHead >
        <TableHeadRow p={[5, 3]}>
          <TableHeadCell width={CellWidth}>Cover</TableHeadCell>
          <TableHeadCell width={CellWidth}>Title</TableHeadCell>
          <TableHeadCell width={CellWidth}>Year</TableHeadCell>
          <TableHeadCell width={CellWidth}>Rate</TableHeadCell>
          <TableHeadCell width={CellWidth}>Lang</TableHeadCell>
          <TableHeadCell width={CellWidth}>Add/Remove Watchlist</TableHeadCell>
        </TableHeadRow>
      </TableHead>
      <TableBodyWrapper>
        <TableBody>
          {shows.map(show => (
            <ShowItem show={show} onToggle={onToggle} />
          ))}
        </TableBody>
      </TableBodyWrapper>
    </Table>
  );
};
