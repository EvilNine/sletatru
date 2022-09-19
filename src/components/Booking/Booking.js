import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import BookingBody from "./BookingBody";
import BookingFooter from "./BookingFooter";
import BookingInfo from "./BookingInfo";
import './booking.scss';

const Booking = () => {

    return (
        <Container maxWidth="lg">
            <div className="booking">
                <h2 className="bookking__title">Бронирование тура</h2>
                <Grid container
                    columnSpacing={{ md: 2, lg: 5 }}>
                    <Grid item xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
                        <BookingInfo />
                    </Grid>
                    <Grid item xs={12} lg={8} order={{ xs: 2, lg: 1 }}>
                        <form>
                            <BookingBody />
                            <BookingFooter />        
                        </form>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )

}

export default Booking;