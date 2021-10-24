import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from '../firebase';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react'
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
    console.log("userName", userName);
    const userPhoto = useSelector(selectUserPhoto);
    console.log("userPhoto", userPhoto);

    const userEmail = useSelector(selectUserEmail);
    const userId = useSelector(selectUserId);

    // const view = document.

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLoginDetails({
                    user: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    user_id: user.uid,
                }));
                history.push('/home');
            }
        });
    },[userName])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then( result => {
                console.log(result);
                let pic = result.additionalUserInfo.profile.picture;
                let user = result.user;
                dispatch(setUserLoginDetails({
                    user: user.displayName,
                    email: user.email,
                    photo: pic,
                    user_id: user.uid,
                }));
                history.push('/home');
            }).catch( err => {
                alert(err.message);
            })
    }
    
    const signOut = () => {
        auth.signOut()
            .then( () => {
                dispatch(setSignOutState());
                history.push('/');
            })
    }

    const takeToHome = () => {
        if(userName) {
            history.push('/home');
        }
    }

    return (
        <Nav> 
            <Logo onClick={takeToHome} src="/images/logo.svg" />
            {
                !userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}> Login </Login>
                    </LoginContainer>
                ):
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
                    {/* <SignOut>
                        <UserImage onClick={signOut} 
                            src="https://yt3.ggpht.com/yti/APfAmoEpli3xycdDSK4kod2aCI_k1TewQZbntnwko73fnw=s108-c-k-c0x00ffffff-no-rj" />
                        <DropDown>
                            <span >Sign Out</span>
                        </DropDown>
                    </SignOut> */}
                        <UserImage src={userPhoto} alt={userName} />
                        <Logout onClick={signOut}>
                            <span class="material-icons">
                                exit_to_app
                            </span>
                        </Logout>
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
    @media (max-width: 768px) {
        justify-content: space-between; 
        height: 50px;
        padding: 0 18px;    
    }
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 70px;
    }

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
    @media (max-width: 768px) {
        display: none;
    }
`
const UserImage =styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;   
        margin-right: -45vw;
        margin-bottom: -5px
    }
`
const LoginContainer =styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`


const Login =styled.div`
    border: 1px solid #f9f9f9;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
    transition: all 0.4s ease-in 0s;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }

    @media (max-width: 768px) {
        padding: 5px 10px;
        font-weight: 500;
        font-size: 12px;
    }
`
const Logout =styled(Login)`
    border: none;
    span {
        font-size: 35px;
        margin-left: -15px;
    }
    @media (max-width: 768px) {
        margin-right: -15px; 
        font-size: 15px;
        font-weight: 300;
    }
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



// const handleAuth = () => {
    //     if(!userName){
    //         auth.signInWithPopup(provider)
    //         .then( result => {
    //             setUser(result.user);
    //             localStorage.setItem('Name', result.additionalUserInfo.profile.name);
    //             localStorage.setItem('email', result.additionalUserInfo.profile.email);
    //             localStorage.setItem('id', result.additionalUserInfo.profile.id);
    //             localStorage.setItem('picture', result.additionalUserInfo.profile.picture);
    //         }).catch( err => {
    //             alert(err.message);
    //         })
    //     } else if(userName){
    //         auth.signOut()
    //             .then( () => {
    //                 dispatch(setSignOutState());
    //                 history.push('/');
    //             }).catch( err => {
    //                 alert(err.message);
    //             })
    //     }
    // }



    // useEffect(() => {
    //     auth.onAuthStateChanged( async user => {
    //         if(user){
    //             setUser(user);
    //             history.push('/home');
    //         }
    //     })
    //     return () => {
            
    //     };
    // }, [userName]);