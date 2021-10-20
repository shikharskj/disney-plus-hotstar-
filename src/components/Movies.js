import React from 'react'
import styled from 'styled-components'


const Movies = () => {
    return (
        <Container>
            <h4> Recommended for You </h4>
            <Content>
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbGRH9mHnqi5rHljNRXp-m7oD_ZEO0WorSA&usqp=CAU"
                     alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-Vqx9GpEzm3WQJsgw0Q9nU1Jf3mfzEX2qQ&usqp=CAU"
                     alt="" />
                </Wrap> 
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZIjmqy_E0W_dw8m388weuy5DGyH0lF5aiA&usqp=CAU"
                     alt="" />
                </Wrap> 
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeVIuWTmk-ON0P3XzsdIVMOFDB_H6Ah0b0Q&usqp=CAU"
                     alt="" />
                </Wrap> 
            </Content>
            <h4> New & Upcoming </h4>
            <Content>
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbGRH9mHnqi5rHljNRXp-m7oD_ZEO0WorSA&usqp=CAU"
                     alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-Vqx9GpEzm3WQJsgw0Q9nU1Jf3mfzEX2qQ&usqp=CAU"
                     alt="" />
                </Wrap> 
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZIjmqy_E0W_dw8m388weuy5DGyH0lF5aiA&usqp=CAU"
                     alt="" />
                </Wrap> 
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeVIuWTmk-ON0P3XzsdIVMOFDB_H6Ah0b0Q&usqp=CAU"
                     alt="" />
                </Wrap> 
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    margin-top: 30px;
    padding: 0 0 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

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
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }
`