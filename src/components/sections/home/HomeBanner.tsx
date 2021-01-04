import React from 'react';
import {Grid, Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import DrawLineItem from "../../DrawLineItem";
import useTheme from "@material-ui/core/styles/useTheme";
import Box from "@material-ui/core/Box";
import SearchForm from "../../form/SearchForm";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SectionInfo from "../SectionInfo";

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    banner: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundColor: theme.palette.grey['300'],
        '& img': {
            // width: '100%',
            width: '400px',
            maxWidth: '480px',
            height: 'auto',
            transform: 'translateX(-10px)',
            [theme.breakpoints.up('sm')]: {
                width: '480px'
            }
        }
    },
    infoWrapper: {
        width: '100%',
        height: '100%',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        borderBottom: `1px solid ${theme.palette.common.black}`,
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {}
    },
    search: {
        // height: '48px',
        marginTop: 'auto',
        '& .MuiInput-root': {
            width: '100%',
            height: '100%'
        }
    }
}));
const HomeBanner = () => {
    const classes = useStyles();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <DrawLineItem drawLine={{xs: false, sm: false, md: true}}>
                    <div className={classes.banner}>
                        <img src="/images/home/banner@2x.png" alt=""/>
                    </div>
                </DrawLineItem>
            </Grid>
            <Grid item xs={12} md={6}>
                <DrawLineItem drawLine={{xs: false, sm: false, md: false}}>
                    <Box display={'flex'} flexDirection={'column'} className={classes.infoWrapper}>
                        <SectionInfo className={clsx(classes.info)}>
                            <Typography variant={"h3"}
                                        color={"primary"}
                                        align={mdUp ? 'left' : 'center'}>
                                臺南歷史名人資料庫
                            </Typography>
                            <Typography variant={"body1"}
                                        align={mdUp ? 'left' : 'center'}>
                                這是一場跨越時空的對話<br/>
                                200多位台南名人在此齊聚<br/>
                                文學家、宗教家、政治家、實業家、教育家、藝術家、及來自異鄉的奉獻者<br/>
                                歷史記憶光影流轉<br/>
                                見證屬於臺南的理性與感性
                            </Typography>
                        </SectionInfo>
                        <div className={classes.search}>
                            <SearchForm/>
                        </div>
                    </Box>
                </DrawLineItem>
            </Grid>
        </Grid>
    )
};
export default HomeBanner;