
import React, { useState, SyntheticEvent } from "react"
import styled from "styled-components"
import { clientAPI } from "api";
import { space, SpaceProps } from "styled-system"
import Pagination from "@atlaskit/pagination"
import { SearchBar } from "../components/SearchBar"
import { ResultTable } from "../components/ResultTable"
import { Container } from "../layout/Container"
import { Show } from "../models/Show"

const SearchBarWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 30px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 50px auto 0;
`


const PaginationWrapper = styled.div<SpaceProps>`
  ${space}
`

interface PaginatorProps {
  pages: number[];
  onChange(e: SyntheticEvent, index: number): void;
}

export const Paginator = ({ pages, onChange }: PaginatorProps) => {
  return (
    <PaginationWrapper mt={[8, 16]}>
      <Pagination pages={pages} onChange={onChange} />
    </PaginationWrapper>
  )
}

export const Home = () => {


  const [pageIndex, setPageIndex] = useState(1)
  const [pages, setPages] = useState<number[]>([]);
  const [query, setQuery] = useState<string>("")
  const [tvShows, setTvShows] = useState<Show[]>([])



  // Search bar handlers
  const handleQueryChange = (_query: string) => {
    setQuery(_query);
  };

  const handleSearch = async (_query: string) => {
    setPageIndex(1)
    const res = await queryTvShows(_query, pageIndex)
    setTvShows(res.results);
    const _pages = res.total_results = 0 ? [] : Array.from(Array(res.total_pages), (x, i) => i + 1)
    setPages(_pages);
  }

  // Pagination handler
  const handlePageChange = async (event: SyntheticEvent, index: number) => {
    setPageIndex(index)
    const res = await clientAPI.searchTvShows(query, index);
    setTvShows(res.results);
  }


  // Result table handler
  const handleToggleWatchList = (showId: number, toggle: boolean) => {
    if (toggle) {
      clientAPI.addToWatchList(showId);
    } else {
      clientAPI.removeFromWatchList(showId);
    }
  }


  const queryTvShows = async (_query: string, index: number) => {
    return await clientAPI.searchTvShows(_query, index);
  }


  return (
    <Container width={[1, 4 / 5]}>
      <ContentWrapper>
        <SearchBarWrapper>
          <SearchBar query={query} onChange={handleQueryChange} onSubmit={handleSearch} />
        </SearchBarWrapper>
        <ResultTable shows={tvShows} toggleWatchList={handleToggleWatchList} />
        {pages.length !== 0 && <Paginator pages={pages} onChange={handlePageChange} />}
      </ContentWrapper>
    </Container>

  )
}


