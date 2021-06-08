import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import NormalLink from "../links/NormalLink";
import Typography from "@material-ui/core/Typography";
import { faLink, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        width: '100%',
        paddingTop: '40px',
        paddingBottom: '40px',
        backgroundColor: theme.palette.common.white
    },
    logo: {
        width: '100%',
        maxWidth: '160px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '8px'
        }
    },
    address: {
        '& *': {
            fontStyle: 'normal'
        },
        '& $icon': {
            marginRight: '10px'
        },
        '& > div': {
            marginBottom: '5px'
        }
    },
    icon: {
        fontSize: '20px'
    },
    socialLink: {
        '& svg': {
            fontSize: '24px'
        }
    },
    QRCode: {
        width: '100px',
        transform: 'translate(-5px,-5px)'
    },
    socialList: {
        marginTop: '10px',
        '& a': {
            marginRight: '15px'
        }
    }
}));
const Footer = () => {
    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <footer className={classes.footer}>
            <Container maxWidth={{ xs: 'none', sm: 'none', md: 1000 }}>
                <Grid container spacing={mdUp ? 4 : 2}>
                    <Grid item xs={12} sm={12} md={3}>
                        <NormalLink href={'https://www.tnpl.tn.edu.tw/w5368759830002704284/index'}
                            customClass={classes.logo}>
                            <img src="/images/logo-tnml-tn.png" alt="" />
                        </NormalLink>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant={"body1"} component={'span'}>臺南市永康區康橋大道255號</Typography>
                        <Typography variant={"body1"}>
                            週二～週六 8:30 至 21:00 <br />
                                週日      8:30 至 17:30 <br />
                                (週一、國定假日休館)
                        </Typography>
                        <div className={classes.socialList}>
                            <NormalLink href={'https://www.tnpl.tn.edu.tw/w5368759830002704284/index'}
                                customClass={classes.socialLink}>
                                <FontAwesomeIcon icon={faLink} />
                            </NormalLink>
                            <NormalLink href={'https://reurl.cc/6219jO'} customClass={classes.socialLink}>
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </NormalLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <address className={classes.address}>
                            <div>
                                <FontAwesomeIcon icon={faPhone} className={classes.icon} />
                                <NormalLink href={'tel:063035855'}>
                                    <Typography variant={"body1"} component={'span'}>06-3035855</Typography>
                                </NormalLink>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPrint} className={classes.icon} />
                                <Typography variant={"body1"} component={'span'}>06-3036135</Typography>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
                                <NormalLink href={'mailto:ttwen@tnml.tn.edu.tw'}>
                                    <Typography variant={"body1"} component={'span'}>ttwen@tnml.tn.edu.tw</Typography>
                                </NormalLink>
                            </div>
                        </address>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} sm={4} md={3}>
                            <img src="/images/qrcode.png" alt="" className={classes.QRCode} />
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </footer>
    );
};
export default Footer;
