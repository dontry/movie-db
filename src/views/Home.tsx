
import React from "react"
import styled from "styled-components"
import { SearchBar } from "../components/SearchBar"
import { ResultTable } from "../components/ResultTable"
import { Container } from "../layout/Container"

const SearchBarWrapper = styled.div`
  float: right;
  margin-bottom: 30px;
`



export const Home = () => {
  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar onSubmit={() => { }} />
      </SearchBarWrapper>
      <ResultTable shows={[]} onToggle={() => { }} />
    </Container>
  )
}


