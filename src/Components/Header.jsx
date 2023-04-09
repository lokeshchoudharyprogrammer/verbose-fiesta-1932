
import React, { useEffect, useState } from 'react'
import WebLogo from "../asset/libatslogo.png"
import "../Styles/LoginButton.css"
import { database } from '../firebase/firebase';
import { AiOutlineHeart, AiOutlineSearch, AiFillCodeSandboxCircle, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { RiGift2Fill } from "react-icons/ri";
import { GiBoxUnpacking } from "react-icons/gi";
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export const Header = () => {

    const navigate = useNavigate();
    const loginpage = () => {
        navigate('/login')
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", background: "#2874f0", height: "56px", alignItems: "center" }}>

                <div>
                    <NavLink to='/'>
                        <img width="77px" src={WebLogo} alt="" />
                    </NavLink>
                </div>
                <div style={{ display: "flex", alignItems: "center", borderRadius: "2px", background: "white" }}>
                    <input style={{ width: "300px", padding: "9px", borderRadius: "2px", border: "none" }} className='Input-box-of-the-navbar' type="text" placeholder='Search For Products , Brands And More' />
                    <AiOutlineSearch style={{
                        width: "25px",
                        height: "26px",
                        size: "136px"
                    }} />
                </div>


                <ul>

                    <li>
                        <a onClick={loginpage} href="">Login</a>

                        <ul class="dropdown">
                            <li className='DropDowns'>

                                <a href="/login"> New User</a>
                            </li>
                            <li className='DropDown-Pic'>

                                <a href="#"> <AiOutlineUser /> My Profile </a></li>
                            <li className='DropDown-Pic'><a href="#"> <AiFillCodeSandboxCircle />Orders</a></li>
                            <li><a href="#"> <AiOutlineHeart /> Wishlist</a></li>
                            <li><a href="#"><GiBoxUnpacking />Rewards</a></li>
                            <li className='DropDown-Pic'><a href="#">
                                <RiGift2Fill />Gift Card</a></li>
                        </ul>
                    </li>
                </ul>



                <div style={{ color: "white", fontWeight: "500" }}>Become a Seller</div>
                <div style={{ color: "white", fontWeight: "500" }}>More</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ color: "white", fontWeight: "500" }}>Cart</div>
                    <div>
                        <AiOutlineShoppingCart style={{
                            color: "white",
                            width: "30px",
                            size: "44px",
                            height: "28px",
                        }} />
                    </div>
                </div>

            </div >

        </>
    )
}
