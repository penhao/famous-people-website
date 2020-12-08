import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useGlobalStyles} from "../../../mui/GlobalStyles";
import clsx from "clsx";

interface Props {
    categoryData: any
}
const useStyles = makeStyles((theme: Theme) => ({
    head: {
        width: '100%',
        height: '430px',
        backgroundColor: theme.palette.grey["500"],
        borderBottom: `1px solid ${theme.palette.common.black}`
    },
    info: {
        position: 'relative',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '50px 20px'
    },
    title: {
        color: theme.palette.common.white
    },
    label: {
        display: 'inline-block',
        transformOrigin: 'left bottom',
        transform: 'translate(-3px,0) rotate(90deg)',
        color: theme.palette.common.white,
    }
}));
const CategoryHead = ({categoryData}: Props) => {

    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const title = (categoryData) ? categoryData.title : '';
    const caption = (categoryData) ? categoryData.caption : '';

    return (
        <div className={classes.head}>
            <div className={classes.info}>
                <Typography variant={"h3"} className={clsx(classes.title, globalClasses.fontSerif)}>
                    {title}
                </Typography>
                <Typography variant={"caption"} className={clsx(classes.label, globalClasses.fontSerif)}>
                    {caption.toUpperCase()}
                </Typography>
            </div>
        </div>
    );
};

export default CategoryHead;
