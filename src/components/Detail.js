import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import db from '../firebase';
import { useHistory } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";


const Detail = () => {
    const history = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        //grab the movie info from db
        
        db.collection('movies')
            .doc(id)
            .get()
            .then( doc => {
                if(doc.exists){
                    // save the movie data 
                    setTimeout(() => {
                        setMovie(doc.data());
                        console.log("movie : ", doc.data());
                    }, 300);
                    
                } else {
                    //redirect to home page
                }
            })
        return () => {
            
        };
    }, []);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 3000);
        return () => {
        
        };
    }, []);

    return (
        <Container>
            {
                ( movie && !loading ) ? 
                (<>
                    <Background>
                        <img src={ movie.backgroundImg }
                        alt="" />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} alt="" />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span> PLAY </span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span> Trailer </span>
                        </TrailerButton>
                        <AddButton>
                            <span> + </span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        { movie.subTitle }
                    </SubTitle>
                    <Description>
                        { movie.description }
                    </Description>
                </>
                ) : (
                    <>
                        <h1> Loading ... </h1> 
                        <FadeLoader color="white" loading={loading} 
                        height="20"
                         width="5" radius="8" margin="2"
                        /> 
                    </>
                )
            }
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: 768px) {
            object-fit: contain;
            
          }
    }
    @media (max-width: 768px) {
        position: relative;
        margin-top: 20px;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
    img {
        height: 100%;
        width: 100%;
        object-fit: contain; 
        
    }
    @media (max-width: 768px) {
        height: 8vh;
        width: 15vw; 
        margin-top: -1vh;
        // margin-bottom: -1vh;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center; 
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &: hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        padding: 2px 4px;
        margin-right: 10px;
        height: 36px;
      }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

`

const AddButton = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;
    span {
        font-size: 30px;
        color: white;
    }
    @media (max-width: 768px) {
        padding: 2px 4px;
        margin-right: 10px;
        height: 30px;
        width: 33px;      }
`

const GroupWatchButton = styled(AddButton)`
    background-color: black;
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
    @media (max-width: 768px) {
        font-size: 16px;
        text-align: justify;
    }
`

