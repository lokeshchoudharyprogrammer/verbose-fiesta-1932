import React, { useEffect, useState } from 'react'
import WebLogo from "../asset/libatslogo.png"
import "../Styles/LoginButton.css"
import { database } from '../firebase/firebase';
import { AiOutlineHeart, AiOutlineSearch, AiFillCodeSandboxCircle, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { RiGift2Fill } from "react-icons/ri";
import { GiBoxUnpacking } from "react-icons/gi";
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Carousels } from './Carousels';
import { DailyEssentials } from '../Pages/Slider';
import axios from 'axios';
import { Header } from './Header';
import Footer from '../Pages/Footer';
// import { Comman } from './../Pages/Comman';
// import { Summer } from '../Pages/Silders/Summer';


export const Navbar = () => {

    const navigate = useNavigate();
    if (!navigator.onLine) {
        window.alert("You are offline please check your internet connection ")

    } else {
        console.log("navigator.onLine")
    }

    const [data, setdata] = useState([])
    useEffect(() => {


        axios.get(`http://localhost:6060/data`)
            .then(function (response) {
                // handle success
                response.data && setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    const loginpage = () => {
        navigate('/login')
    }


    return (
        <>
            <Header />


            <DIV>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Grocery</p>
                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Mobiles</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d34810848b2895c9.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Fashion</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Electronics</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Home</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Appliances</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Travel</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Top Offers</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Beauty Toy & More</p>

                </div>
                <div>
                    <img width="68px" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" />
                    <p style={{ fontWeight: "700" }}>Two Wheelers</p>


                </div>
            </DIV>
            <Carousels />


            <h2>Best of Electronics</h2>
            <DailyEssentials data={data && data.filter((item) => item.catogeries === "Electronics")} />
            <h2>Beauty,Food,Toys & more</h2>
            <DailyEssentials data={data && data.filter((item) => item.catogeries === "BeautyFoodToysmore")} />
            <h2>Home & Kitchen Essentials</h2>
            <DailyEssentials data={data && data.filter((item) => item.catogeries === "HomeKitchenEssentials")} />
            <h2>Fashion Best Sellers</h2>
            <DailyEssentials data={data && data.filter((item) => item.catogeries === "Fashion")} />

            <Footer />
        </>
    )
}

const DIV = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 32px;

`

