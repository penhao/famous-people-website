import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";
import {useGlobalStyles} from "../../../mui/GlobalStyles";
import {isValueEmpty} from "../../../utils/Utils";

interface Props {
    title: string
    titleColor?: string;
    desc: string;
    descColor?: string;
}

interface StyleProps {
    titleColor: string;
    descColor: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    info: {
        padding: '20px',
        [theme.breakpoints.up('md')]: {
            padding: '30px 30px 40px 30px',
        }
    },
    title: {
        marginBottom: '10px',
        color: ({titleColor}: StyleProps) => titleColor,
        fontWeight: 600
    },
    desc: {
        width: '100%',
        color: ({descColor}: StyleProps) => descColor,
        [theme.breakpoints.up('sm')]: {
            // width: '85%',
        }
    }
}));
const DetailInfo = ({title, desc, titleColor = 'initial', descColor = 'initial'}: Props) => {
    const classes = useStyles({titleColor, descColor});
    const globalClasses = useGlobalStyles();
    return (
        <div className={classes.info}>
            <Typography variant={"h5"} className={clsx(classes.title, globalClasses.fontSerif)}>
                {title}
            </Typography>
            <Typography variant={"body1"} className={classes.desc} dangerouslySetInnerHTML={{
                __html: !isValueEmpty(desc) ? desc : '無資料'
            }}/>
        </div>
    );
};

export default DetailInfo;
