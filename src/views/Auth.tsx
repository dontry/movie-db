
import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { clientAPI } from "../api"



interface State {
    redirect: boolean
}

export class Auth extends Component<{}, State> {
    public state = {
        redirect: false
    }

    public async componentDidMount() {
        const isSuccess = await clientAPI.createSessionID();
        this.setState({ redirect: isSuccess })
    }

    public render() {
        return (
            this.state.redirect ? <Redirect to="/" /> : ""
        )
    }
}
