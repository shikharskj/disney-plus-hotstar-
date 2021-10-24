import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from "./Movies";
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movies/moviesSlice';
import HashLoader from "react-spinners/HashLoader";


const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 3000);
        return () => {
        
        };
    }, []);

    useEffect(() => {
        db.collection('movies').onSnapshot( snapshot => {
            let tempMovies = snapshot.docs.map( (doc) => {
                return { id: doc.id, ...doc.data() }
            });
            console.log("tempMovies", tempMovies);
            dispatch(setMovies(tempMovies));

            // console.log(snapshot);
            // snapshot.docs.map( doc => {
            //     console.log(doc);
            // })
        })
        
    }, [dispatch]);

    return (
        <Container>
            {
                loading ? (  
                <div className="loader-home">
                     <HashLoader color="white" loading={loading} size="120"
                    //  height="20"
                    //  width="5" radius="8" margin="2"
                     />
                    
                    
                </div>
                ) : (
                <>
                    <ImgSlider />
                    <Viewers />
                    <Movies />
                </>        
                )
            }
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    @media (max-width: 768px) {
        min-height: calc(100vh - 60px);
        padding: 0 calc(2vw + 5px);

    }
`