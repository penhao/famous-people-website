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
                                這是⼀個跨越時空的平台<br/>
                                兩百多位名⼈在此⿑聚⼀堂<br/>
                                以理性和感性的面向<br/>
                                透過藝術 文學 政治 醫療 經濟 宗教 技術 學術教育交織出臺南記憶<br/>
                                編織出當代臺南的氛圍與樣貌<br/>
                                <br/>
                                期許你能透過台南名人搜尋平台<br/>
                                理解一下每一位名人的生平貢獻
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