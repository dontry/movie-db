
import React from "react"
import styled from "styled-components"
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



export const Home = () => {
  return (
    <Container>
      <ContentWrapper>
        <SearchBarWrapper>
          <SearchBar onSubmit={() => { }} />
        </SearchBarWrapper>
        <ResultTable shows={[]} onToggle={() => { }} />
      </ContentWrapper>
    </Container>

  )
}


