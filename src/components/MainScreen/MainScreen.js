
import { Container } from "@mui/material";
import React from "react";
import './mainScreen.scss';

const MainScreen = (props) => {
    
    return (
        <Container 
            maxWidth="lg"
            disableGutters>
            <div className="mainScreen">
                <div className="mainScreen__img"
                     style={{ backgroundImage: `url(${props.img})` }} />
                <h1 className="mainScreen__title">{props.title}</h1>                       
            </div>
        </Container>
    )
}

export default MainScreen;
