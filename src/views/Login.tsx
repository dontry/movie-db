import React, { Component } from "react"
import styled from "styled-components"
import { clientAPI } from "../api";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
`
const Title = styled.h1``

const Button = styled.button`
   margin-top: 10vh; 
`

const POPUP_WIDTH = 600;
const POPUP_HEIGHT = 600;


export class Login extends Component {
    public handleClick = async () => {
        await clientAPI.createRequestToken();
        this.openPopup();

    }

    public openPopup = () => {
        // const POPUP_LEFT = window.innerWidth / 2 - (POPUP_WIDTH / 2);
        // const POPUP_TOP = window.innerHeight / 2 - (POPUP_HEIGHT / 2);
        // popupReference = window.open(url, "", `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, top=${POPUP_TOP}, left=${POPUP_LEFT}`)

        const url = `https://www.theshowdb.org/authenticate//${clientAPI.getRequestToken()}?redirect_to=${process.env.BASE_URL}`
        window.location.assign(url);
    }


    public render() {
        return (
            <Wrapper>
                <Title>My TV Shows DB</Title>
                <Button>Login</Button>
            </Wrapper>
        )
    }
}


