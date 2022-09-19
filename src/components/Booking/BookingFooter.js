import React from "react";
import { Checkbox, FormControlLabel, Grid, Link, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import './booking.scss';

const label = ( 
    <Typography sx={{
        fontSize: '.625rem',
        lineHeight: '1.2'
    }}>
        Я согласен на обработку своих персональных данных согласно <Link href="/" target="_blank">политике конфиденциальности</Link> и с <Link>условиями оферты</Link>
    </Typography>
)

const BookingFooter = () => {
    return (
        <div className="booking__total">
            <Grid container>
                <Grid item xs={12} md={5}>
                    <p className="booking__total-title">К оплате</p>
                    <p className="booking__total-price">200 000 <small>₽</small></p>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Button size="large"
                            type="submit"
                            variant="contained"
                            color="warning"
                            fullWidth={true}>
                        Забронировать
                    </Button>
                    <FormControlLabel 
                        sx={{ 
                            margin: 0,
                            marginTop: '10px',
                            '& .MuiCheckbox-root': { 
                                padding: 0,
                                alignSelf: 'self-start',
                                flex: '0 0 1rem',
                                marginRight: '.5rem',
                                marginTop: '2px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '1rem',
                                height: '1rem'
                            }
                        }}
                        control={ <Checkbox defaultChecked color="info" /> } 
                        label={label} />
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default BookingFooter;