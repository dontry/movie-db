import React from "react";
import styled from "styled-components";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
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

interface ItemProps {
  active: boolean;
}

const Item = styled.li<ItemProps>`
  padding-left: 0;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: ${props => (props.active ? "bold" : "normal")};

  &:not(:first-child) {
    border-left: 1px solid #000;
  }

  a {
    text-decoration: none;
  }

  a:active {
    color: purple;
    font-weight: bold;
  }
`;

interface Props extends RouteComponentProps {
  navLinks: NavItem[];
}

export const Navigator = ({ navLinks = [], location }: Props) => {
  return (
    <NavWrapper>
      <NavList>
        {navLinks.map(item => (
          <>
            <Item key={item.text} active={location.pathname === item.link}>
              <Link to={item.link}>{item.text}</Link>
            </Item>
            {/* {navLinks.length - 1 !== index && <span>|</span>} */}
          </>
        ))}
      </NavList>
    </NavWrapper>
  );
};

export default withRouter(Navigator);
