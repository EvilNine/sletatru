import React from "react";
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, Input, InputLabel, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { IMaskInput } from 'react-imask';
import './callMeBack.scss';

const label = (
    <Typography
        sx={{
            fontSize: '12px',

        }}>
        Я согласен на обработку своих персональных данных согласно <Link href="/" target="_blank">политике конфиденциальности</Link>
    </Typography>
)

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+7(#00) 000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const CallMeBack = () => {
    const [values, setValues] = React.useState({
        textmask: '+7'
    });
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
    };
    return (
        <Container>
            <div className="callMeBack">
                <Grid container alignItems="flex-end">
                    <Grid item xs={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
                        <div className="callMeBack__text">
                            <h3 className="font-weight-bold">Нужна помощь?</h3>
                            <Typography>Наши менеджеры с удовольствием погавкают с вами о всех ваших вопросах</Typography>
                        </div>
                        <div className="callMeBack__form">
                            <FormControl variant="standard"
                                sx={{
                                    flex: '1',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px 0 0 8px',
                                    padding: '0 0 0 1.5rem',
                                    marginLeft: '-8px',
                                    '@media (max-width: 767px)': {
                                        boxShadow: '0px 2px 8px rgba(15, 85, 126, 0.04), 4px 4px 8px rgba(18, 102, 152, 0.08)',
                                        borderRadius: '8px',
                                        marginLeft: '0',
                                        width: '100%'
                                    }
                                }}>
                                <InputLabel htmlFor="phoneInput"
                                    sx={{
                                        fontSize: '.75rem',
                                        padding: '10px 0 0',
                                        color: '#A1A1A1',
                                        left: '1.5rem',
                                        '&.Mui-focused' : {
                                            color: '#A1A1A1',
                                        }
                                    }}>Ваш номер телефона</InputLabel>
                                <Input
                                    value={values.textmask}
                                    onChange={handleChange}
                                    name="textmask"
                                    id="phoneInput"
                                    inputComponent={TextMaskCustom}
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        padding: '2px 0 4px',
                                        '&:after, &:before': {
                                            display: 'none'
                                        }
                                    }}
                                />
                            </FormControl>
                            <Button 
                                variant="contained" 
                                color="warning" sx={{
                                    '@media (max-width: 767px)': {
                                        width: '100%',
                                        marginTop: '.5rem',
                                        paddingTop: '12px',
                                        paddingBottom: '12px',
                                    }
                                }}>
                                Перезвоните мне
                            </Button>
                        </div>
                        <FormControlLabel
                            sx={{
                                margin: 0,
                                marginTop: '10px',
                                marginBottom: '36px',
                                '& .MuiCheckbox-root': {
                                    padding: 0,
                                    alignSelf: 'self-start',
                                    flex: '0 0 1.5rem',
                                    marginRight: '.5rem',
                                    marginTop: '2px',
                                },
                                '& .MuiSvgIcon-root': {
                                    flex: '0 0 1.5rem',
                                    width: '1.5rem',
                                    height: '1.5rem'
                                }
                            }}
                            control={<Checkbox defaultChecked color="info" />}
                            label={label} />
                    </Grid>
                    <Grid item xs={12} md={5} lg={4} order={{ xs: 1, md: 2 }}>
                        <div className="callMeBack__img">
                            <img src="https://s3-alpha-sig.figma.com/img/50b8/c782/fac37c56b144d11b498fba938831299c?Expires=1664755200&Signature=Nmdm4mpx02Psq4lwuzZ7SyQjy5QBxQ0Hzqjicc1rrNJGu78kTollq97EKVOI5he9~WP68kD-ISoRlHTHJkYjGHeMcyiZ9yUJL~otUo8t3X6ZDll35zAKsGlUALg6dVsCRZHWNtz8289nIn68a604YC6qe7hJJAjcwwSjxtPJ37o2or~0odBSpifiTtjsFauUaqtm-C9f~zm4EU1OPjgUoY6zuAIPqmDRbBNz3NuKIhCsdMHU~ShD1FwKstoe5JTPpWIwDCkkKBOTMUQSFzpDqu3wSuJhqk8o7rNryxT3FUPr6lqNKJYb~wuTVy80mGCsT-1cvZkDrh-c3wojlatEjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default CallMeBack;