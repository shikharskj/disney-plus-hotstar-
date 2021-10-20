import React from 'react'
import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>
                    GET ALL THERE...
                </SignUp>
                <Description>
                    Get premium access to Raya and the Last Dragon
                    with a Disney+ subscription. As of 03/05/22, 
                    the price of the Disney Bunde will increase
                    by $3.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-bottom: 10vh;  
    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-position: top;
        background-image: url('/images/login-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    align-items: center; 
    flex-direction: column; 
`


const CTALogoOne = styled.img`
    margin-top: -5vh;
`
const CTALogoTwo = styled.img`
    margin: 20px 0;
    width: 90%;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold; 
    padding: 17px 0; 
    color: #f9f9f9;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 25px;
    margin-bottom: 15px;

    &:hover {
        background: #0483ee;
    }
`
const Description = styled.p`
     font-size: 11px;
     letter-spacing: 1.5px;
     text-align: center;
     line-height: 1.5;

`


