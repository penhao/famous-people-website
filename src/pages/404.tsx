import React from 'react';
import Layout from "../components/Layout";
import {makeStyles, Theme} from "@material-ui/core/styles";
import Container from "../components/containers/Container";
import NavLink from "../components/links/NavLink";
import IconArrowStatic from "../components/icons/IconArrowStatic";
import {Hidden} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        paddingTop: '40px',
        paddingBottom: '40px',
        borderBottom: `1px solid ${theme.palette.common.black}`,
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
            paddingTop: '40px',
            paddingBottom: 0
        }
    },
    cover: {
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        marginLeft: '-36px'
    },
    infoContainer: {
        position: 'relative'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
        [theme.breakpoints.up('sm')]: {
            alignItems: 'flex-end',
            position: 'absolute',
            right: 0,
            top: 0,
            transform: 'translateY(-20px)'
        }
    },
    title: {
        fontFamily: ['"Noto Serif TC"', '"serif"'].join(','),
        fontSize: theme.typography.pxToRem(100),
        lineHeight: theme.typography.pxToRem(90),
        color: theme.palette.primary.main
    },
    caption: {
        fontFamily: ['"Noto Serif TC"', '"serif"'].join(','),
        fontSize: theme.typography.pxToRem(20),
        lineHeight: theme.typography.pxToRem(30),
        textAlign: 'center',
        color: theme.palette.primary.main
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: ['"Noto Serif TC"', '"serif"'].join(','),
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 600,
        marginTop: '16px',
        [theme.breakpoints.up('sm')]: {
            alignItems: 'flex-end',
        },
        '&:hover': {
            '& svg': {
                animation: `$ArrowForwardEffect 0.7s ${theme.transitions.easing.easeOut}`
            }
        }
    },
    icon: {
        display: 'inline-block',
        position: 'relative',
        overflow: 'hidden',
        '& svg': {
            width: '24px'
        }
    },
    "@keyframes ArrowForwardEffect": {
        '0%': {
            transform: 'translate(0, 0)'
        },
        '30%': {
            transform: 'translate(100%, 0)'
        },
        '51%': {
            transform: 'translate(100%, 0)'
        },
        '52%': {
            transform: 'translate(-100%, 0)'
        },
        '100%': {
            transform: 'translate(0, 0)'
        }
    }
}));

const PageNotFound = () => {
    const classes = useStyles();
    return (
        <Layout>
            <section className={classes.section}>
                <Container maxWidth={{sm: 600, md: 600}}>
                    <div className={classes.infoContainer}>
                        <div className={classes.info}>
                            <h2 className={classes.title}>404</h2>
                            <h6 className={classes.caption}>Page Not Found</h6>
                            <NavLink hrefPath={'/'} asPath={'/'} className={classes.link}>
                                <div>back index</div>
                                <div className={classes.icon}>
                                    <IconArrowStatic/>
                                </div>
                            </NavLink>
                        </div>
                        <Hidden xsDown>
                            <img src="/images/404.jpg" alt="" className={classes.cover}/>
                        </Hidden>
                    </div>
                </Container>
            </section>
        </Layout>
    );
};

export default PageNotFound;
