import React from "react";
import {AppProps} from "next/app";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "../styles/global.scss";
import 'swiper/swiper.scss';

/* Material UI */
import MuiTheme from "../mui/Theme";
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

/* Fontawesome */
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;


const CloudMileApp = ({Component, pageProps}: AppProps) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            // @ts-ignore
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <ThemeProvider theme={MuiTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
};
export default CloudMileApp;