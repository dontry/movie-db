import React from "react";
import styled from "styled-components";
import { layout, space, color, LayoutProps, ColorProps, SpaceProps } from "styled-system";
import { connect } from "react-redux";
import ShowEntry from "./ShowEntry";
import { Show } from "../models/Show";
import { RootState } from "reducers/state";
import LoadingSpinner from "./LoadingSpinner";

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

const Message = styled.h4`
  margin: 32px auto;
  text-align: center;
  color: #bbb;
`;

const LoadingWrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

interface ResultTableProps {
  shows: Show[];
  loading: boolean;
}

export const ResultTable = ({ shows = [], loading }: ResultTableProps) => {
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

      {loading ? (
        <LoadingWrapper>
          <LoadingSpinner delay={300} />
        </LoadingWrapper>
      ) : shows.length === 0 ? (
        <Message>Empty list</Message>
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
