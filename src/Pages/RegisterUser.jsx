

import React, { useState } from 'react'
import { app } from "../firebase/firebase";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


import { AiOutlineUser, AiOutlineLogin } from "react-icons/ai";
import { Header } from '../Components/Header';

export const RegisterUser = () => {

    const navigate = useNavigate();
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, sethidePassword] = useState("")


    document.title = "Register Page";


    const HandleNewUserSubmitData = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.accessToken);
                if (user.accessToken) {
                    navigate("/login");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    };


    return (
        <>
            <Header />
            <DIV>



                <FORM action="">
                    <FLEX>
                        <div>
                            <h3
                                style={{
                                    color: "white",
                                    fontSize: "xx-large"
                                }}
                            >Create New User Now</h3>
                        </div>
                        <div style={{ background: "white", alignItems: "center", display: "flex", justifyContent: "center", borderRadius: "8px" }}><AiOutlineUser style={{ color: "black", width: "27px", height: "22px" }} /> <input style={{
                            padding: "17px",
                            width: "246px",
                            border: "none",
                            borderRadius: "6px"
                        }} type="email" required placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)} /></div>
                        <div style={{ background: "white", alignItems: "center", display: "flex", justifyContent: "center", borderRadius: "8px" }}>
                            <AiOutlineLogin style={{ color: "black", width: "27px", height: "22px" }} />
                            <input style={{
                                padding: "17px",
                                width: "246px",
                                border: "none",
                                borderRadius: "6px"
                            }} type="password" name="" id="" required placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input onChange={sethidePassword} type="hidden" name="" />

                        <div>

                            <button style={{
                                padding: "17px",
                                width: "216px",
                                border: "none",
                                borderRadius: "6px",
                                fontWeight: "600",
                                fontSize: "large"
                            }} onClick={HandleNewUserSubmitData} >Register</button>
                        </div>
                    </FLEX>
                </FORM>
            </DIV>
        </>
    )
}


const DIV = styled.div`
width: 100%;
    background: url("https://salohiddinabruyev.github.io/login-page/img/BG.svg") no-repeat;
    margin: auto;
    background-size: cover;
    display: flex;
    background-repeat: no-repeat;
    background-color: darkblue;

`


const input = styled.div`
padding: 9px;
    width: 216px;
    border: none;
    border-radius: 6px;`
const FLEX = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 72px;`

const FORM = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-repeat: no-repeat;
justify-content: center;
margin: auto;
height: 670px;
/* border: 2px solid; */
`

// width: 100%;
//     height: 100%;
//     background: #2148C0 url(../img/BG.svg) no-repeat;
//     background-position: top right;
//     background-size: cover;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
