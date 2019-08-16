import React, { useState, SyntheticEvent } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { clientAPI } from "api";
import { space, SpaceProps } from "styled-system";
import Pagination from "@atlaskit/pagination";
import { SearchBar } from "../components/SearchBar";
import { ResultTable } from "../components/ResultTable";
import { Container } from "../layout/Container";
import { Show } from "../models/Show";
import { getSearchResults } from "reducers/searchlist";
import { RootState } from "reducers/state";
import { search } from "actions/searchlist";

const SearchBarWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 50px auto 0;
`;

const PaginationWrapper = styled.div<SpaceProps>`
  ${space}
`;

interface PaginatorProps {
  pages: number[];
  onChange(e: SyntheticEvent, index: number): void;
}

export const Paginator = ({ pages, onChange }: PaginatorProps) => {
  return (
    <PaginationWrapper mt={[8, 16]}>
      <Pagination pages={pages} onChange={onChange} />
    </PaginationWrapper>
  );
};

interface Props {
  shows: Show[];
  pages: number[];
  loading: boolean;
  onSearch(query: string, index: number): void;
}

export const Home = ({ shows, pages, loading, onSearch }: Props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [query, setQuery] = useState<string>("");

  // Search bar handlers
  const handleQueryChange = (_query: string) => {
    setQuery(_query);
  };

  const handleSearch = async (_query: string) => {
    setPageIndex(1);
    await queryTvShows(_query, pageIndex);
  };

  // Pagination handler
  const handlePageChange = async (event: SyntheticEvent, index: number) => {
    setPageIndex(index);
  };

  const queryTvShows = async (_query: string, index: number) => {
    onSearch(query, index);
  };

  return (
    <Container width={[1, 4 / 5]}>
      <ContentWrapper>
        <SearchBarWrapper>
          <SearchBar query={query} onChange={handleQueryChange} onSubmit={handleSearch} />
        </SearchBarWrapper>
        <ResultTable shows={shows} loading={loading} />
        {pages.length !== 0 && <Paginator pages={pages} onChange={handlePageChange} />}
      </ContentWrapper>
    </Container>
  );
};

function getPagesArray(pageCount: number): number[] {
  return pageCount === 0 ? [] : Array.from(Array(pageCount), (x, i) => i + 1);
}

const mapStateToProps = (state: RootState) => ({
  shows: getSearchResults(state),
  pages: getPagesArray(state.searchlist.pages),
  loading: state.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSearch: (query: string, index: number) => dispatch(search(query, index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
