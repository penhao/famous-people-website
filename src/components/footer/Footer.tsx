import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import NormalLink from "../links/NormalLink";
import Typography from "@material-ui/core/Typography";
import {faLink, faPhone, faPrint} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        width: '100%',
        paddingTop: '40px',
        paddingBottom: '60px',
        backgroundColor: theme.palette.common.white
    },
    logo: {
        width: '100%',
        maxWidth: '195px'
    },
    address: {
        '& *': {
            fontStyle: 'normal'
        },
        '& $icon': {
            marginRight: '10px'
        }
    },
    icon: {
        fontSize: '20px',
        '& .large': {
            fontSize: '30px',
        }
    },
    QRCode: {
        width: '80px'
    }
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth={{xs: 'none', sm: 800, md: 800}}>
                <Grid container spacing={4}>
                    <Grid item>
                        <NormalLink href={'/'} customClass={classes.logo}>
                            <img src="/images/logo-tnml-tn.png" alt=""/>
                        </NormalLink>
                    </Grid>
                    <Grid item>
                        <NormalLink href={'/'}>
                            <Typography variant={"body1"} component={'span'}>台南市永康區中山南路363號</Typography>
                        </NormalLink>
                        <Typography variant={"body1"}>開放時間：0800-2200</Typography>
                    </Grid>
                    <Grid item>
                        <address className={classes.address}>
                            <div>
                                <FontAwesomeIcon icon={faPhone} className={classes.icon}/>
                                <NormalLink href={'/'}>
                                    <Typography variant={"body1"} component={'span'}>(06)2255146</Typography>
                                </NormalLink>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPrint} className={classes.icon}/>
                                <Typography variant={"body1"} component={'span'}>(06)2210826、2206216</Typography>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} className={classes.icon}/>
                                <NormalLink href={'/'}>
                                    <Typography variant={"body1"} component={'span'}>ttwen@tnml.tn.edu.tw</Typography>
                                </NormalLink>
                            </div>
                            <div>
                                <NormalLink href={'/'}>
                                    <FontAwesomeIcon icon={faLink} className={clsx(classes.icon, 'large')}/>
                                </NormalLink>
                                <NormalLink href={'/'}>
                                    <FontAwesomeIcon icon={faFacebookSquare} className={classes.icon}/>
                                </NormalLink>
                            </div>
                        </address>
                    </Grid>
                    <Hidden smDown>
                        <Grid item>
                            <img src="/images/qrcode.png" alt="" className={classes.QRCode}/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </footer>
    );
};
export default Footer;
