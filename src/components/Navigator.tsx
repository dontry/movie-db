import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { space, layout, color, SpaceProps, LayoutProps, ColorProps } from "styled-system";
import { NavItem } from "../models/NavItem";

const NavWrapper = styled.nav``;
const NavList = styled.ul<SpaceProps | LayoutProps | ColorProps>`
  display:flex;
  list-style:none;
  ${space}
  ${layout}
  ${color}
`;

const Item = styled.li`
  padding-left: 0;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;


  &:not(:first-child) {
    border-left: 1px solid #000;
  }
`;

interface Props {
  navLinks: NavItem[];
}

export const Navigator = ({ navLinks = [] }: Props) => {
  return (
    <NavWrapper>
      <NavList>
        {navLinks.map((item, index) => (
          <>
            <Item key={item.text}>
              <Link to={item.link}>{item.text}</Link>
            </Item>
            {/* {navLinks.length - 1 !== index && <span>|</span>} */}
          </>
        ))}
      </NavList>
    </NavWrapper>
  );
};
