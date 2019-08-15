import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import { Box, ButtonPrimary } from '@primer/components'
import { space, SpaceProps } from "styled-system"
import { clientAPI } from "../api";
import { Redirect } from "react-router";
import LoadingSpinner from "components/LoadingSpinner";
import { User } from "models/User";
import { RootState } from "reducers/state";
import { Dispatch } from "redux";
import { LOGIN } from "actions/user";

const Wrapper = styled(Box)`
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

interface Props {
  user: User | null;
  location: any;
  handleLogin(): void;
}


export class Login extends Component<Props> {
  state = {
    isAuthenticating: false
  }
  public handleClick = async () => {
    await clientAPI.createRequestToken();
    this.openPopup();
  };

  componentDidMount() {
    let params = new URLSearchParams(this.props.location.search);
    const request_token = params.get('request_token');
    const approved = params.get('approved');
    if (request_token === clientAPI.getRequestToken() && approved) {
      this.props.handleLogin();
      this.setState({ isAuthenticating: true })
    }
  }

  public openPopup = () => {
    const url = `https://www.themoviedb.org/authenticate/${clientAPI.getRequestToken()}?redirect_to=${
      process.env.REACT_APP_BASE_URL
      }/login`;
    window.location.assign(url);
  };

  public render() {
    if (this.props.user) return <Redirect to="/" />;

    return (
      <Wrapper p={[4]}>
        {this.state.isAuthenticating ? <LoadingSpinner /> :
          <>
            <Title>My TV Shows DB</Title>
            <ButtonPrimary my={5} onClick={this.handleClick}>Login</ButtonPrimary>
          </>}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: () => dispatch({ type: LOGIN })
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)