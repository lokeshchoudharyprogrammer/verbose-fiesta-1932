import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Carousels.css'
export const Carousels = () => (
    <div>

        <div style={{ width: "100%", marginTop: "32px" }}>

            <Carousel autoPlay>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/31/HB1_Month_Web_Esha_31Mar23.jpg" />

                </div>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/25/HB2_Refurbished_Web_SYM_25Mar23.jpg" />

                </div>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/31/HB4_JDD_Web_Esha_31Mar23.jpg" />

                </div>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/01/Intel_Web_12thGenGaming.jpg" />

                </div>


            </Carousel>

        </div>

    </div>

);
