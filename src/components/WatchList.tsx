import React from "react";
import styled from "styled-components";
import { Show } from "../models/Show";
import { getYear } from "../utils/getYear";
import garbage from "../assets/garbage.svg";

const Wrapper = styled.div``;
const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Title = styled.h3``;

const ActionIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 20px;
  cursor: pointer;
`;

const Description = styled.p`
  margin-left: 1rem;
  max-width: 50vw;
  line-height: 1.5;
`;

interface ShowProps {
  show: Show;
  onDelete(id: number): void;
}

export const ShowItem = ({ show, onDelete }: ShowProps) => {
  const { id, name: title, first_air_date, overview } = show;
  return (
    <Wrapper>
      <Heading>
        <Title>
          {title} ({getYear(first_air_date)})
        </Title>
        <ActionIcon onClick={() => onDelete(id)} src={garbage} />
      </Heading>
      <Description>{overview}</Description>
    </Wrapper>
  );
};

const ListWrapper = styled.div`
  padding: 2rem;
`;

export interface WatchListProps {
  shows: Show[];
  onDelete(id: number): void;
}

export const WatchList = ({ shows, onDelete }: WatchListProps) => {
  return (
    <ListWrapper>
      {shows.map(show => (
        <ShowItem show={show} onDelete={onDelete} />
      ))}
    </ListWrapper>
  );
};
