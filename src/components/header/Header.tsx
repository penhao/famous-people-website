import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Sticky from "react-sticky-el";
import NavLink from "../links/NavLink";
import MenuToggle from "./MenuToggle";
import NavDropdown from "./NavDropdown";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        position: 'relative',
        width: '100%',
        zIndex: theme.zIndex.appBar
    },
    headerInner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '60px',
        backgroundColor: theme.palette.grey["700"],
        borderTop: `1px solid ${theme.palette.common.black}`,
        borderBottom: `1px solid ${theme.palette.common.black}`,
        zIndex: theme.zIndex.appBar,
        [theme.breakpoints.up('sm')]: {
            height: '90px'
        }
    },
    logo: {
        width: '125px',
        [theme.breakpoints.up('sm')]: {
            width: '200px',
        }
    },
    drawer: {
        zIndex: 1000
    }
}));
const Header = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const handlerToggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    return (
        <header className={classes.header}>
            <Sticky>
                <div className={classes.headerInner}>
                    <NavLink hrefPath={'/'} asPath={'/'} className={classes.logo}>
                        <img src="/images/logo.svg" alt=""/>
                    </NavLink>
                    <MenuToggle isOpen={isOpen} clickHandler={handlerToggle}/>
                </div>
                <NavDropdown isOpen={isOpen} clickHandler={() => setIsOpen(false)}/>
            </Sticky>
        </header>
    );
};
export default Header;