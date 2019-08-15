import React from "react";
import styled from "styled-components";
import { layout, space, color, LayoutProps, ColorProps, SpaceProps } from "styled-system";
import ShowEntry from './ShowEntry'
import { Show } from "../models/Show";

const CellWidth = ["100px", "200px", "250px"];
const Table = styled.table<LayoutProps | ColorProps>`
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid #e8e8e8;
  border-spacing: 0;
  ${layout}
  ${color}
`;

const TableHead = styled.thead``;

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
`;

interface ResultTableProps {
  shows: Show[];
}

export const ResultTable = ({ shows = [] }: ResultTableProps) => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell width={CellWidth}>Cover</TableHeadCell>
          <TableHeadCell width={CellWidth}>Title</TableHeadCell>
          <TableHeadCell width={CellWidth}>Year</TableHeadCell>
          <TableHeadCell width={CellWidth}>Rate</TableHeadCell>
          <TableHeadCell width={CellWidth}>Lang</TableHeadCell>
          <TableHeadCell width={CellWidth}>
            Add/Remove
            <br /> Watchlist
          </TableHeadCell>
        </TableHeadRow>
      </TableHead>
      {shows.length === 0 ? (
        <EmptyText>Empty list</EmptyText>
      ) : (
          <TableBody height={["60vh", "50vh"]}>
            {shows.map(show => (
              <ShowEntry key={show.id} show={show} />
            ))}
          </TableBody>
        )}
    </Table>
  );
};
