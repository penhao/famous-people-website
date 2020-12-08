import React, {Fragment} from 'react';
import Button from "@material-ui/core/Button";
import RatioContainer from "../containers/RatioContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import BannerSlider from "../slider/BannerSlider";
import Typography from "@material-ui/core/Typography";
import SliderItem from "../slider/SliderItem";
import {isValueEmpty} from "../../utils/Utils";

interface Props {
    photoData: any[];
    children?: React.ReactNode;
}

interface StyleProps {
    coverImage: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        position: 'relative',
        width: '100%',
        height: '100%',
        minWidth: 'auto',
        padding: 0,
        '&:hover': {
            '& $cover': {
                transform: 'scale(1.1)'
            }
        }
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
        '& svg': {
            fontSize: theme.typography.pxToRem(48),
            color: theme.palette.primary.main
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '100%',
        maxWidth: '1100px',
        backgroundColor: theme.palette.background.paper
    },
    cover: {
        position:'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: ({coverImage}: StyleProps) => `url(${coverImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        transformOrigin: 'center center',
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeOut,
            duration: '0.7s'
        })
    }
}));
const PhotoAlbumToggle = ({photoData = []}: Props) => {

    const classes = useStyles({coverImage: photoData[0].image});
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return (
        <Fragment>
            <Button className={classes.button} onClick={handleOpen}>
                <div className={classes.cover}/>
                <div className={classes.icon}>
                    <VisibilityOutlinedIcon/>
                </div>
            </Button>
            <Modal
                aria-labelledby="photoAlbumModal"
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                className={classes.modal}
            >
                <Fade in={isOpen}>
                    <div className={classes.paper}>
                        <BannerSlider>
                            {
                                photoData.map((item: any, index: number) => {
                                    return (
                                        <div key={index}>
                                            <SliderItem title={item.title} imgUrl={item.image}/>
                                        </div>
                                    )
                                })
                            }
                        </BannerSlider>
                    </div>
                </Fade>
            </Modal>
        </Fragment>
    );
};
export default PhotoAlbumToggle;
