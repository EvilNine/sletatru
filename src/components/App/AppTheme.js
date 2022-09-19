import {
    createTheme
} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0078BE',
        },
        info: {
            main: '#3D95FB'
        },
        warning: {
            main: '#F6A81C'
        }

    },
    breakpoints: {
        values: {
            xs: 0,
            md: 768,
            lg: 1264
        },
    },
    typography: {
        fontFamily: [
            '"Open Sans"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    textTransform: 'none',
                    fontWeight: '600',
                    borderRadius: '8px',
                    boxShadow: "none",
                },
            },
            variants: [
                {
                    props: { size: "large" },
                    style: { 
                        paddingLeft: ".75rem", 
                        paddingRight: ".75rem"
                    }
                }
            ]
        }
    }
});

export default theme;