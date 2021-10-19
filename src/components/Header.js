import React from 'react'
import styled from 'styled-components'


const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg " alt="" />
                    <span> HOME </span>
                </a>
                <a>
                    <img src="/images/search-icon.svg " alt="" />
                    <span> SEARCH </span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg " alt="" />
                    <span> WATCHLIST </span>
                </a>
                <a>
                    <img src="/images/original-icon.svg " alt="" />
                    <span> ORIGINALS </span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg " alt="" />
                    <span> MOVIES </span>
                </a>
                <a>
                    <img src="/images/series-icon.svg " alt="" />
                    <span> SERIES </span>
                </a>
            </NavMenu>
            <UserImage src="https://yt3.ggpht.com/yti/APfAmoEpli3xycdDSK4kod2aCI_k1TewQZbntnwko73fnw=s108-c-k-c0x00ffffff-no-rj" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center; 
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px; 
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1) ;
                opacity: 1;
            }
        }
    }
`
const UserImage =styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
`