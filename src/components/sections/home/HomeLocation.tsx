import React from 'react';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NormalLink from "../../links/NormalLink";
import { useLineGridStyles } from "../GridStyles";
import SectionInfo from "../SectionInfo";
import DrawLineItem from "../../DrawLineItem";

const useStyles = makeStyles((theme: Theme) => ({
    info: {
        backgroundColor: theme.palette.grey["300"]
    },
    list: {
        '& li': {
            marginBottom: '20px',
            '&:last-child': {
                marginBottom: 0
            }
        }
    },
    mapWrapper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '320px'
    }
}));
const HomeLocation = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={5} md={4} className={classes.info}>
                <DrawLineItem drawLine={{ xs: false, sm: true, md: true }}>
                    <SectionInfo>
                        <ul className={classes.list}>
                            <li>
                                <Typography variant={"body2"} color={"primary"}>館址</Typography>
                                <Typography variant={"body1"}>
                                    710038<br />
                                    臺南市永康區康橋大道255號
                                </Typography>
                            </li>
                            <li>
                                <Typography variant={"body2"} color={"primary"}>電話</Typography>
                                <Typography variant={"body1"}>
                                    <NormalLink href={'tel:063035855'}>
                                        06-3035855
                                    </NormalLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant={"body2"} color={"primary"}>信箱</Typography>
                                <Typography variant={"body1"}>
                                    <NormalLink href={'mailto:ttwen@tnml.tn.edu.tw'}>
                                        ttwen@tnml.tn.edu.tw
                                    </NormalLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant={"body2"} color={"primary"}>開館時間</Typography>
                                <Typography variant={"body1"}>
                                    週二～週六 8:30 至 21:00 <br />
                                    週日      8:30 至 17:30 <br />
                                    (週一、國定假日休館)
                                </Typography>
                            </li>
                        </ul>
                    </SectionInfo>
                </DrawLineItem>
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                <DrawLineItem drawLine={{ xs: false, sm: false, md: false }}>
                    <div className={classes.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9735984116096!2d120.23548011527728!3d23.02474158495194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77d38e2c1791%3A0x48f732e414ed9e92!2zNzEwMDM45Y-w5Y2X5biC5rC45bq35Y2A5bq35qmL5aSn6YGTMjU16Jmf!5e0!3m2!1szh-TW!2stw!4v1600501624108!5m2!1szh-TW!2stw"
                            width="100%" height="100%" frameBorder="0" allowFullScreen={false} aria-hidden="false"
                            tabIndex={0} />
                    </div>
                </DrawLineItem>
            </Grid>
        </Grid>
    );
};

export default HomeLocation;
