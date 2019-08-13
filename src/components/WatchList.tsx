import React from "react"
import styled from "styled-components"
import { Movie } from "../models/Movie"
import { getYear } from "../utils/getYear"
import garbage from "../assets/garbage.svg"

const Wrapper = styled.div`
`
const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`

const Title = styled.h3``

const ActionIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 20px;
  cursor: pointer;
`

const Description = styled.p`
  margin-left: 1rem;
  max-width: 50vw;
  line-height: 1.5;
`

interface MovieProps {
  movie: Movie;
  onDelete(id: number): void;
}


export const MovieItem = ({ movie, onDelete }: MovieProps) => {
  const { id, title, release_date, overview } = movie;
  return (
    <Wrapper>
      <Heading><Title>{title} ({getYear(release_date)})</Title><ActionIcon onClick={() => onDelete(id)} src={garbage} /></Heading>
      <Description>{overview}</Description>
    </Wrapper>
  )
}


const ListWrapper = styled.div`
  padding: 2rem;
`


export interface WatchListProps {
  movies: Movie[];
  onDelete(id: number): void
}

export const WatchList = ({ movies, onDelete }: WatchListProps) => {
  return (
    <ListWrapper>
      {movies.map(movie => (<MovieItem movie={movie} onDelete={onDelete} />))}
    </ListWrapper>
  )
}

