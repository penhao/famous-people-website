import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useGlobalStyles} from "../../../mui/GlobalStyles";
import clsx from "clsx";
import Container from "../../containers/Container";
import {isValueEmpty} from "../../../utils/Utils";
import BackgroundImage from "../../Images/BackgroundImage";
interface Props {
    categoryData: any
}

interface StyleProps {
    coverImage: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    head: {
        position: 'relative',
        width: '100%',
        height: '430px',
        backgroundColor: theme.palette.grey["500"],
        borderBottom: `1px solid ${theme.palette.common.black}`
    },
    cover: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    info: {
        position: 'relative',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '50px 20px',
        zIndex: 1
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
    useEffect(() => {
        console.log(categoryData);
    }, [categoryData]);

    return (
        <div className={classes.head}>
            {
                (categoryData && !isValueEmpty(categoryData.imgUrl))
                    ?
                    <div className={classes.cover}>
                        <BackgroundImage imgUrl={categoryData.imgUrl} detectRetina={false} backgroundSize={"cover"}/>
                    </div>
                    : null
            }
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
