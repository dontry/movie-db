import React, { } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { space, layout, color } from 'styled-system'
import { NavItem } from '../models/NavItem'

const NavWrapper = styled.nav`
`
const NavList = styled.ul`
  display:flex;
  list-style:none;

`

const Item = styled.li`
  padding-left: 0;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;

  &:first-child {
    margin-left: 0;
  }
`


interface Props {
  navLinks: NavItem[]
}


export const Navigator = ({ navLinks = [] }: Props) => {
  return (
    <NavWrapper>
      <NavList >
        {navLinks.map((item, index) =>
          <>
            <Item  ><Link to={item.link}>{item.text}</Link></Item>
            {navLinks.length - 1 !== index && <span>|</span>}
          </>
        )}
      </NavList>
    </NavWrapper>
  )
}

