import React, {Fragment, useRef} from 'react';
import Swiper, {ReactIdSwiperChildren} from 'react-id-swiper';
import {SwiperOptions} from "swiper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconArrowStatic from "../icons/IconArrowStatic";
import clsx from "clsx";

// import {useButtonStyles} from "../buttons/ButtonStyles";

interface Props {
    children: ReactIdSwiperChildren;
}

interface StyleProps {
    sliderTotal: number;
    paginationDistance: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    slider: {
        position: 'relative',
        '& .swiper-container': {},
    },
    sliderButton: {
        width: '60px',
        height: '60px',
        minWidth: 'auto',
        padding: 0,
        borderRadius: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        '& svg': {
            width: '38px'
        }
    },
    prevButton: {
        position: 'absolute',
        right: '60px',
        bottom: '46px',
        /*top: '50%',
        transform: 'translateY(-50%)',*/
        zIndex: 1,
        '& svg': {
            transform: 'rotate(-180deg)',
        }
    },
    nextButton: {
        position: 'absolute',
        right: 0,
        bottom: '46px',
        /*top: '50%',
        transform: 'translateY(-50%)',*/
        zIndex: 1
    }
}));
const BannerSlider = ({children}: Props) => {
    const classes = useStyles();
    // const buttonClasses = useButtonStyles();
    const swiperRef = useRef<any | null>(null);
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const params: SwiperOptions = {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        }
    };
    return (
        <div className={classes.slider}>
            <Swiper {...params} ref={swiperRef}>
                {children}
            </Swiper>
            <Button onClick={handlePrev}
                    className={clsx(
                        classes.sliderButton,
                        classes.prevButton
                    )}>
                <IconArrowStatic/>
            </Button>
            <Button onClick={handleNext}
                    className={clsx(
                        classes.sliderButton,
                        classes.nextButton
                    )}>
                <IconArrowStatic/>
            </Button>
        </div>
    );
};

export default BannerSlider;
