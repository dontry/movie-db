
import React from "react"
import styled from "styled-components"
import { space, SpaceProps } from "styled-system"
import Pagination from "@atlaskit/pagination"
import { SearchBar } from "../components/SearchBar"
import { ResultTable } from "../components/ResultTable"
import { Container } from "../layout/Container"

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

export const Home = () => {
  return (
    <Container width={[1, 4 / 5]}>
      <ContentWrapper>
        <SearchBarWrapper>
          <SearchBar onSubmit={() => { }} />
        </SearchBarWrapper>
        <ResultTable shows={[]} onToggle={() => { }} />
        <PaginationWrapper mt={[8, 16]}>
          <Pagination pages={[1, 2]} />
        </PaginationWrapper>
      </ContentWrapper>
    </Container>

  )
}


