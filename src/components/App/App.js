import React from "react";

import { ThemeProvider } from '@mui/material/styles';
import theme from "./AppTheme";
import Header from "../Header";
import MainScreen from "../MainScreen";
import Booking from "../Booking";
import CallMeBack from "../CalllMeBack";


const imgSource = {
	mainScreen: 'https://s3-alpha-sig.figma.com/img/2ff6/056d/b1c5f61560408a3e04538aa15a5c148f?Expires=1664150400&Signature=CbtCcDJz9yzJroOi4ULqFqXJ~rQphGdoNJc~bsgYYtAKUf~pgwrOkyc2kDWBRPC3bHdcWrtlDJya26~2kw4NTq0t2X8u4B2T4GPAAV9YiImuOy0TonhdoPTShro8i49D83rjrG~7QYD-kPB44tvv4Y8TUw7GPObXFS0M8Itk2l3RnTI7FDSbqnb6LTa2z0KDsqA6dRyjJnONGQs4G4AIG8DmpqMC6SUYJKGFWrXEoZKUfEwXnEJ0DWoAMP~UYCLAuzyri0jpRshL6~ft4g-bvfLO2laQogrGfNh1WTNIaqeLpYD-iTaagqhPK~z4iQzKlGbPxcZZXhWbNkcQMWf-rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}

function App() {
	return (
		<ThemeProvider theme={theme}>
	    	<Header />
			<MainScreen 
				img={imgSource.mainScreen}
				title="Сёрф-тур для хороших мальчиков"/>
			<Booking />
			<CallMeBack img={imgSource.callMeImg}/>
		</ThemeProvider>
	);
}

export default App;
