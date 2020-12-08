import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DrawLineItem from "../DrawLineItem";
import clsx from "clsx";

interface Props {
    title?: string;
    desc?: string;
    className?: string;
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    info: {
        width: '100%',
        padding: '30px 20px 40px 20px',
        [theme.breakpoints.up('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            padding: '40px 20px 55px 20px',
        },
        '& h3':{
            fontFamily: ['"Noto Serif TC"', '"serif"'].join(','),
            marginBottom: '10px',
            [theme.breakpoints.up('sm')]: {
                marginBottom: '15px',
            },
            [theme.breakpoints.up('md')]: {
                marginBottom: '20px',
            }
        }
    }
}));
const SectionInfo = ({title, desc, className, children}: Props) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.info, className)}>
            {
                children
            }
           {/* {
                (title)
                    ?
                    <Typography variant={"h3"} color={"primary"} align={"center"} className={classes.title}>
                        {title}
                    </Typography>
                    :
                    null
            }
            {
                (desc)
                    ?
                    <Typography variant={"body1"} align={"center"} className={classes.desc}>
                        {desc}
                    </Typography>
                    :
                    null
            }*/}
        </div>
    );
};
export default SectionInfo;
