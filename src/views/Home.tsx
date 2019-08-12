
import React from 'react'
import { ResultTable } from '../components/ResultTable'
import styled from 'styled-components'
import { SearchBar } from '../components/SearchBar'
import { ResultTable } from '../components/ResultTable'
import { Container } from '../layout/Container'

const SearchBarWrapper = styled.div`
  float: right;
  margin-bottom: 30px;
`



export const Home = props => {
  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <ResultTable />
    </Container>
  )
}


