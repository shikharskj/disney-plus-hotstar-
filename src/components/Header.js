import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import {auth, provider} from '../firebase';
import { useHistory } from "react-router-dom";
import {useEffect} from 'react'
import { 
    selectUserName, 
    selectUserEmail, 
    selectUserPhoto, 
    selectUserId, 
    setUserLoginDetails, 
    setSignOutState
} from "../features/user/userSlice";


const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const userEmail = useSelector(selectUserEmail);
    const userId = useSelector(selectUserId);

    useEffect(() => {
        auth.onAuthStateChanged( async user => {
            if(user){
                setUser(user);
                history.push('/home');
            }
        })
        return () => {
            
        };
    }, [userName]);

    const handleAuth = () => {
        if(!userName){
            auth.signInWithPopup(provider)
            .then( result => {
                setUser(result.user);
                localStorage.setItem('Name', result.additionalUserInfo.profile.name);
                localStorage.setItem('email', result.additionalUserInfo.profile.email);
                localStorage.setItem('id', result.additionalUserInfo.profile.id);
                localStorage.setItem('picture', result.additionalUserInfo.profile.picture);
            }).catch( err => {
                alert(err.message);
            })
        } else if(userName){
            auth.signOut()
                .then( () => {
                    dispatch(setSignOutState());
                    history.push('/');
                }).catch( err => {
                    alert(err.message);
                })
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            user: user.displayName,
            email: user.email,
            photo: user.photoURL,
            id: user.id,
        }))
    };


    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {
                userName ? 
                <Login onClick={handleAuth}> Login </Login> :
                <>
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
                    <SignOut>
                        <UserImage src="https://yt3.ggpht.com/yti/APfAmoEpli3xycdDSK4kod2aCI_k1TewQZbntnwko73fnw=s108-c-k-c0x00ffffff-no-rj" />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                </>
            }
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
    overflow-x: hidden;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
const Login =styled.div`

`

const DropDown =styled.div`
    position: absolute;
    top: 48px;
    left: ;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 5px;
    box-shadow: rgb( 0 0 0 / 50%) 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
    z-index: 250;
    color: white;

`

const SignOut =styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`