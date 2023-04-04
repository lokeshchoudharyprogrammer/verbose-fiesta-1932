import React from 'react'
import WebLogo from "../asset/libatslogo.png"
import "../Styles/LoginButton.module.css"


import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
export const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", background: "#2874f0", height: "56px", alignItems: "center" }}>

            <div>
                <img width="77px" src={WebLogo} alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", borderRadius: "2px", background: "white" }}>
                <input style={{ width: "300px", padding: "9px", borderRadius: "2px", border: "none" }} className='Input-box-of-the-navbar' type="text" placeholder='Search For Products , Brands And More' />
                <AiOutlineSearch style={{
                    width: "25px",
                    height: "26px",
                    size: "136px"
                }} />
            </div>
            <div> <button style={{
                width: "125px",
                fontWeight: "500",
                background: "white",
                borderRadius: "4px",
                fontSize: "19px",
                border: "none",
                padding: "7px",
                color: "rgb(40, 116, 240)"
            }}>
                Login
            </button></div>

            <div class="menu-wrap">
                <ul class="menu">
                    <li class="menu-item">
                        <a href="#">Pages</a>
                        <ul class="drop-menu">
                            <li class="drop-menu-item">
                                <a href="#">Page 1</a>
                            </li>
                            <li class="drop-menu-item">
                                <a href="#">Page 2</a>
                            </li>
                            <li class="drop-menu-item">
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>



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
    )
}

