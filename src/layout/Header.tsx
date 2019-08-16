import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Button } from "@primer/components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Navigator from "components/Navigator";
import { NavItem } from "models/NavItem";
import { LOGOUT } from "actions/user";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  height: 60px;
  padding: 0rem 2rem;
`;

const Title = styled.h2`
  margin-right: 10vw;
  a {
    color: #333;
    text-decoration: none;
  }
`;

interface Props {
  title: string;
  navLinks: NavItem[];
  handleLogout?(e: SyntheticEvent): void;
}

const defaultNavLinks: NavItem[] = [
  { text: "Home", link: "/" },
  { text: "Watch List", link: "/watchlist" }
];

export const Header = ({
  title = "My TV shows",
  navLinks = defaultNavLinks,
  handleLogout
}: Props) => {
  return (
    <HeaderWrapper>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <Navigator navLinks={navLinks} />
      <Button ml={["auto"]} onClick={handleLogout}>
        Logout
      </Button>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogout() {
    dispatch({ type: LOGOUT });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
