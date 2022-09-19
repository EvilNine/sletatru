import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import BookingAccordion from "./BookingAccordion";
import './booking.scss';

const bookingData = [
    {id: 1, title:'Данные о первом двуногом'},
    {id: 2, title:'Данные о втором двуногом'}
]

const BookingBody = () => {
    return (
        <>
            <div className="booking__fieldset">
                <h3>Данные покупателя</h3>
                <Grid container
                    columnSpacing={{ md: 2, lg: 2 }}>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Email" variant="outlined" fullWidth size="small"/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Телефон" variant="outlined" fullWidth size="small"/>
                    </Grid>
                </Grid>
            </div>

            <h3>Информация о туристах</h3>
            <Typography variant="body2" gutterBottom>
                Пусть это заполнят твои двуногие
            </Typography>
            {
                bookingData.map( (item, index)=> {
                    return <BookingAccordion 
                                defaultExpanded={index === 0 ? true : false}                  
                                key={item.id} 
                                id={item.id} 
                                title={item.title}/>
                })
            }
        </>        
    )
}

export default BookingBody;