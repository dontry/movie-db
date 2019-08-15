import React, { Component } from "react";
import styled from 'styled-components'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { clientAPI } from "../api";
import { Login } from "./Login";
import { LOGIN } from "actions/user";
import { Dispatch } from "redux";
import { RootState } from "reducers/state";
import { User } from "models/User";


const Heading = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`


interface Props {
  user: User | null;
  handleLogin(): void;
}
interface State {
  redirect: boolean;
}

export class Auth extends Component<Props, State> {
  public state = {
    redirect: false
  };

  public async componentDidMount() {
    this.props.handleLogin();
  }

  public render() {
    return !!this.props.user ? <Redirect to="/" /> : <Heading>Loading...</Heading>;
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: () => dispatch({ type: LOGIN })
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

