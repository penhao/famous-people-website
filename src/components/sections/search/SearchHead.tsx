import React from 'react';
import Grid from "@material-ui/core/Grid";
import DrawLineItem from "../../DrawLineItem";
import PhotoAlbumToggle from "../../buttons/PhotoAlbumToggle";
import {useLineGridStyles} from "../GridStyles";
import {useGlobalStyles} from "../../../mui/GlobalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import clsx from "clsx";
import Sticky from "react-sticky-el";
import Typography from "@material-ui/core/Typography";

interface Props {
    keyword: string;
    total: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    label: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: 600,
        backgroundColor: theme.palette.primary.main,
        padding: '10px 20px',
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {}
    },
    head: {
        padding: '30px 20px',
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {}
    },
    name: {
        fontSize: theme.typography.pxToRem(40),
        fontWeight: 700,
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(48)
        }
    },
    actionYears: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 600,
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(16),
        },
        [theme.breakpoints.up('md')]: {}
    },
    tabList: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        '& .MuiTab-root': {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 700,
            width: '33.3333%',
            minWidth: 'auto',
            padding: '16px 10px',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(18),
            },
            [theme.breakpoints.up('md')]: {}
        },
        '& .Mui-selected': {
            color: theme.palette.primary.main,
            '& .MuiTab-wrapper': {
                textDecoration: 'underline'
            }
        }
    }
}));
const SearchHead = ({keyword, total = 0}: Props) => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    return (
        <Grid container>
            <Grid item xs={12} className={globalClasses.item}>
                <Typography align={"center"} className={clsx(classes.label, globalClasses.fontSerif)}>
                    {`共${total}筆`}
                </Typography>
            </Grid>
            <Grid item xs={12} className={globalClasses.item}>
                <div className={classes.head}>
                    <Typography variant={"body2"}
                                color={"primary"}
                                align={"center"}
                                className={clsx(classes.actionYears, globalClasses.fontSerif)}>
                        關鍵字
                    </Typography>
                    <Typography variant={"h2"}
                                color={"primary"}
                                align={"center"}
                                className={clsx(classes.name, globalClasses.fontSerif)}>
                        {`「 ${keyword} 」`}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};
export default SearchHead;
