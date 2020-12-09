import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer/Drawer";
import NavLink from "../links/NavLink";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Backdrop from "@material-ui/core/Backdrop";
import SearchForm from "../form/SearchForm";
import useCategoryFilterList from "../sections/category/useCategoryFilterList";

interface Props {
    isOpen: boolean;
    clickHandler: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        flexShrink: 0,
        zIndex: theme.zIndex.mobileStepper
    },
    nav: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        paddingTop: '60px',
        zIndex: theme.zIndex.mobileStepper,
        [theme.breakpoints.up('sm')]: {
            paddingTop: '90px'
        },
        [theme.breakpoints.up('md')]: {}
    },
    navList: {
        position: 'absolute',
        width: '100%',
        borderLeft: `1px solid ${theme.palette.common.black}`,
        borderRight: `1px solid ${theme.palette.common.black}`,
        backgroundColor: theme.palette.grey["100"],
        [theme.breakpoints.up('sm')]: {
            width: '320px'
        },
        '& li': {
            borderBottom: `1px solid ${theme.palette.common.black}`,
            /* '&:last-child': {
                 borderBottom: 'none'
             }*/
        }
    },
    link: {
        fontSize: theme.typography.pxToRem(16),
        padding: '12px 20px',
        textAlign: 'center',
        backgroundColor: theme.palette.grey["100"],
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(18),
            padding: '12px 20px'
        }
    },
    backdrop: {
        width: '100%',
        height: '100vh'
    }
}));
const NavDropdown = ({isOpen, clickHandler}: Props) => {
    const classes = useStyles();
    const [categoryFilterList, getCategoryById] = useCategoryFilterList();
    return (
        <Fade in={isOpen}>
            <nav className={classes.nav}>
                <Backdrop open={isOpen} onClick={clickHandler} className={classes.backdrop}/>
                <Slide direction="left"
                       in={isOpen}
                       mountOnEnter unmountOnExit>
                    <ul className={classes.navList}>
                        <li>
                            <SearchForm/>
                        </li>
                        {
                            categoryFilterList.map((category: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            hrefPath={'/category/[...slug]'}
                                            asPath={`/category/${category.id}/${encodeURIComponent(category.title)}`}
                                            className={classes.link}>
                                            {category.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Slide>
            </nav>
        </Fade>
    );
};
export default NavDropdown;
