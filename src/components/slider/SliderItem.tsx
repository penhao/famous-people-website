import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import RatioContainer from "../containers/RatioContainer";

interface Props {
    title: string;
    imgUrl: string;
}

interface StyleProps {
    imgUrl: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    desc: {
        position: 'absolute',
        width: '100%',
        padding: '10px 20px',
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.common.white,
        zIndex: 1
    },
    cover: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: ({imgUrl}: StyleProps) => `url(${imgUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
    }
}));
const SliderItem = ({title, imgUrl}: Props) => {
    const classes = useStyles({imgUrl});
    return (
        <div className={classes.item}>
            <RatioContainer ratio={{xs: 671 / 1010, sm: 671 / 1010, md: 671 / 1010}}>
                <div className={classes.cover}/>
            </RatioContainer>
            <Typography variant={"body1"} className={classes.desc}>
                {title}
            </Typography>
        </div>
    );
};
export default SliderItem;
