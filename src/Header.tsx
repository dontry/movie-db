import React from "react"
import styled from "styled-components"
import { Navigator } from "components/Navigator";
import { NavItem } from "./models/NavItem"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  height: 60px;
  padding: 0rem 2rem;
`

const Title = styled.h2`
  margin-right: 10vw;
`

interface Props {
  title: string;
  navLinks: NavItem[]
}

const defaultNavLinks: NavItem[] = [{ text: "Home", link: "/" }, { text: "Watch List", link: "/watchlist" }]


export const Header = ({ title = "My TV shows", navLinks = defaultNavLinks }: Props) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <Navigator navLinks={navLinks} />
    </HeaderWrapper>
  )
}

