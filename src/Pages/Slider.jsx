import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const DailyEssentials = (data) => {
    console.log(data.data)
    let title, img, Price
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };


    data.data.map((res) => {
        console.log(res)
    })


    return (
        <>
            <DIV>
                

                <BOX style={{ position: "relative", marginTop: "32px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", backgroundColor: 'white' }}>
                    <Carousel responsive={responsive}>

                        {

                            data.data.map((res) => {


                                return <div className='imgtag' style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center", padding: "30px",
                                    padding: "30px"
                                }}>
                                    <div>

                                        <img src={res && res.image[0]} alt="" />
                                    </div>
                                    <div>

                                        <p>{res && res.name}</p>
                                    </div>
                                    <div>

                                        <p>{res && res.price}</p>
                                    </div>
                                </div>
                            })
                        }
                    </Carousel>



                </BOX>



            </DIV>
        </>
    )
}



const DIV = styled.div`
box-shadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px";


.heading-home-page{
    margin-top: 52px;
    display: flex;
    font-size: 27px;
    font-weight: 700;
}
.div-1{
   
}
.imga{
    border: 3px solid black;
}
 
`;

const Button = styled.div`
   color: white;
    font-weight: 700;
    height: 38px;
    align-items: center;
    width: 80px;
    background: rgb(19, 93, 226);
    font-size: medium;
    border: none;
    justify-content: center;
    border-radius: 5px;
    display: flex;

    
    `

const BOX = styled.div`
.imgtag:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border: 1px solid #24a3b5;
}
`


{/* <div style={{ backgroundImage: "url(https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90)", backgroundRepeat: "no-repeat", backgroundPosition: "0px bottom", width: "200px", height: "214px" }}>
                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "-17px" }}>Best of </h3>
                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "-17px" }}> Electronics</h3>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "12px" }}>

                        <Button>View All</Button>
                    </div>
                </div> */}