import React from 'react'
import styled from 'styled-components'
import { selectMovies } from "../features/movies/moviesSlice";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = () => {

    const movies = useSelector(selectMovies); 
    console.log("movies_List : ", movies);
    // if(!movies.length) {
    //     return <h1> Loading ... </h1>
    // }
    let count = 0;
    return (
        <Container>
            <h4> Recommended for You </h4>
            <Content>
                { 
                    movies.length ?
                    movies.map( (movie, index) => (
                        
                        <Wrap key={movie.id}>   
                            <Link to={`/detail/${movie.id}`} >
                                <img src={movie.cardImg} alt="" />
                            </Link>
                        </Wrap>
                        
                    )) : <h1> Loading ... </h1>
                }
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
@media (max-width: 768px) {
    h4{
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 1px; 
    }
}
`

const Content = styled.div`
    margin-top: 30px;
    padding: 0 0 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media (max-width: 768px) {
        margin-top: 10px;
        padding: 0 0 15px;
        grid-gap: 12px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        h4{
            // font-size: 8px;
        }
    }
`

const Wrap = styled.div`
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        @media (max-width: 768px) {
            object-fit: contain; 
          }
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }
    @media (max-width: 768px) {
        border: 1px solid rgba(249, 249, 249, 0.1);
        border-radius: 5px;    }
`