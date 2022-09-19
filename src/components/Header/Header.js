import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import HeaderLogo from './HeaderLogo.js';
import HeaderPhone from './HeaderPhone.js';
import HeaderAuth from './HeaderAuth.js';
import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <Container maxWidth="lg">
                <Grid 
                    container
                    direction="row"
                    wrap="nowrap"
                    justifyContent="space-between"
                    alignItems="center">
                    
                    <HeaderLogo />
                    <div className='header__col-right'>
                        <HeaderPhone />
                        <HeaderAuth />
                    </div>
                </Grid>
            </Container>            
        </header>
    )   
}

export default Header;
