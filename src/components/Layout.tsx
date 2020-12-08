import React, {Fragment, ReactNode} from "react";
import {makeStyles} from "@material-ui/styles";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {Theme} from "@material-ui/core";
import PageHead from "./PageHead";

interface Props {
    children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        overflow: 'hidden'
        // border: `3px solid red`,
    },
    main: {
        width: '100%',
        overflow: 'hidden'
    }
}));
const Layout = ({children}: Props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <PageHead/>
            <div className={classes.root}>
                <Header/>
                <div role="main" className={classes.main}>
                    {children}
                </div>
                <Footer/>
            </div>
        </Fragment>
    )
};
export default Layout;