import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './booking.scss';

const BookingAccordion = (props) => {
    
    return (
        <Accordion defaultExpanded={props.defaultExpanded} className="booking__item" sx={{
            boxShadow: '0px 2px 8px rgba(15, 85, 126, 0.04), 4px 4px 8px rgba(18, 102, 152, 0.08);',
            borderRadius: '.5rem',
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
            '&:before': {
                display: 'none',
            }
            }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                id={props.id}>
                <p className="booking__item-title">{props.title}</p>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container
                    spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Фамилия" variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Имя" variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Отчество" variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Дата рождения" variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Серия и номер паспорта" variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField label="Когда выдан" variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Кем выдан" variant="outlined" fullWidth size="small" />
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default BookingAccordion;