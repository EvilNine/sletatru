import { Box } from "@mui/system";
import React from "react";
import { Button, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import './booking.scss';


const BookingInfo = () => {
    return (
        <div className="booking__info">
            <Box sx={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'info.light',
                boxShadow: '0px 2px 8px rgba(15, 85, 126, 0.04), 4px 4px 8px rgba(18, 102, 152, 0.08)',
                borderRadius: '8px',
                marginBottom: '2.5rem',
                padding: '1rem',
                
            }}>
                <div className="booking__category">
                    <div className="booking__category-title">Групповой</div>
                    <div className="booking__category-icon">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5253 3.71484L8.08676 0.464062C8.13294 0.196875 8.37356 0 8.65551 0C8.8378 0 9.00794 0.0820312 9.11731 0.222656L9.52808 0.75H10.7944C11.1031 0.75 11.3996 0.869531 11.6184 1.08047L12.0559 1.5H13.417C13.7402 1.5 14.0003 1.75078 14.0003 2.0625V2.625C14.0003 3.66094 13.1302 4.5 12.0559 4.5H11.2781H10.8892H10.3715L10.2475 5.21484L7.5253 3.71484ZM10.1114 6.00234V11.25C10.1114 11.6648 9.76384 12 9.33363 12H8.55586C8.12565 12 7.77808 11.6648 7.77808 11.25V8.55C7.19474 8.83828 6.53363 9 5.83363 9C5.13363 9 4.47252 8.83828 3.88919 8.55V11.25C3.88919 11.6648 3.54162 12 3.11141 12H2.33363C1.90343 12 1.55586 11.6648 1.55586 11.25V5.85469C0.855856 5.59922 0.30655 5.02734 0.116967 4.29609L0.0246059 3.93281C-0.079908 3.53203 0.17287 3.12422 0.590925 3.02344C1.00898 2.92266 1.42947 3.16641 1.53398 3.56953L1.62877 3.93281C1.71384 4.26562 2.02495 4.5 2.38224 4.5H3.11141H3.5003H7.38433L10.1114 6.00234ZM11.2781 1.875C11.2781 1.66875 11.1031 1.5 10.8892 1.5C10.6753 1.5 10.5003 1.66875 10.5003 1.875C10.5003 2.08125 10.6753 2.25 10.8892 2.25C11.1031 2.25 11.2781 2.08125 11.2781 1.875Z" fill="#3D95FB"/>
                        </svg>
                    </div>
                    <div className="booking__category-count">10</div>
                </div>
                <h3>Сёрф-тур для хороших мальчиков</h3>

                <List>
                    <ListItem sx={{padding: 0}}>
                        <ListItemIcon sx={{ minWidth: '24px' }}>
                            <PlaceIcon color="info" sx={{ fontSize: 16 }}/>
                        </ListItemIcon>
                        <ListItemText>Аэропорт Хайнань</ListItemText>
                    </ListItem>
                    <ListItem sx={{padding: 0}}>
                        <ListItemIcon sx={{ minWidth: '24px' }}>
                            <TimelapseIcon color="info" sx={{ fontSize: 16 }}/>
                        </ListItemIcon>
                        <ListItemText>3 дня / 4 ночи</ListItemText>
                    </ListItem>
                    <ListItem sx={{padding: 0}}>
                        <ListItemIcon sx={{ minWidth: '24px' }}>
                            <CalendarMonthIcon color="info" sx={{ fontSize: 16 }}/>
                        </ListItemIcon>
                        <ListItemText>
                            31 сентября
                            <span className="booking__day booking__day-weekday">пн</span> 
                            —
                            5 ноября
                            <span className="booking__day booking__day-dayoff">вс</span>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={{padding: 0}}>
                        <ListItemIcon sx={{ minWidth: '24px' }}>
                            <PeopleIcon color="info" sx={{ fontSize: 16 }}/>
                        </ListItemIcon>
                        <ListItemText>1 пёс + 2 человека</ListItemText>
                    </ListItem>
                </List>
                <Button color="info">Ввести промокод</Button>

                <div className="booking__total">
                    <div className="booking__total-row h4">
                        <div className="booking__total-field">Стоимость тура</div>
                        <div className="booking__total-value font-weight-bold">100 000 ₽ x 2</div>
                    </div>
                    <div className="booking__total-row h3">
                        <div className="booking__total-field font-weight-semibold">Итого к оплате</div>
                        <div className="booking__total-value font-weight-bold">200 000 ₽</div>
                    </div>
                </div>
            </Box>

            <h4>Нужна помощь?</h4>
            <Link href="tel:88003339963"
                variant="h6"
                color="info.main"
                underline="none"
                sx={{
                    fontWeight: '700'
                }}>
                8 800 333 99 63
            </Link>
            
        </div>
    )
}

export default BookingInfo;
