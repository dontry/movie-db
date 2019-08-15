import React, { Component } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system"
import { clientAPI } from "../api";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #e8e8e8;
  border-radius: 3px;
`;


const Title = styled.h1``;

const Button = styled.button<SpaceProps>`
  ${space}
`;

export class Login extends Component {
  public handleClick = async () => {
    await clientAPI.createRequestToken();
    this.openPopup();
  };

  public openPopup = () => {
    const url = `https://www.themoviedb.org/authenticate/${clientAPI.getRequestToken()}?redirect_to=${
      process.env.REACT_APP_AUTH_URL
      }`;
    window.location.assign(url);
  };

  public render() {
    return (
      <Wrapper>
        <Title>My TV Shows DB</Title>
        <Button my={5} onClick={this.handleClick}>Login</Button>
      </Wrapper>
    );
  }
}
