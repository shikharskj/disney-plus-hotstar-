import React from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-main.jpeg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
   

    ul li button {
        &::before {
            font-size: 10px;
            color: gray;
            @media (max-width: 768px) {
                font-size: 8px;
            }
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
    @media (max-width: 768px) {
        margin-top: 5px;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms; 
        image-size: contain;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
        @media (max-width: 768px) {
            height: 16vh;
            border-radius: 7px;
            border: 3px solid transparent;

        }
    }
`
