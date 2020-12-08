import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface IBackgroundImage {
    imgUrl: string
    alt?: string
    title?: string
    detectRetina?: boolean
    backgroundSize?: 'cover' | 'contain'
    backgroundPosition?: string
    customClass?: string | null
}

interface IStyleProps {
    imgUrl: string
    backgroundSize?: 'cover' | 'contain'
    backgroundPosition?: string
    detectRetina: boolean
    isRetina: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    image: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundSize: ({backgroundSize}: IStyleProps) => backgroundSize,
        backgroundPosition: ({backgroundPosition}: IStyleProps) => backgroundPosition,
        backgroundImage: ({imgUrl, detectRetina, isRetina}: IStyleProps) => {
            return `url(${detectRetina ? getRetinaUrl(imgUrl, 'xs', isRetina) : imgUrl})`;
        },
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: ({imgUrl, detectRetina, isRetina}: IStyleProps) => {
                return `url(${detectRetina ? getRetinaUrl(imgUrl, 'sm', isRetina) : imgUrl})`;
            },
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: ({imgUrl, detectRetina, isRetina}: IStyleProps) => {
                return `url(${detectRetina ? getRetinaUrl(imgUrl, 'md', isRetina) : imgUrl})`
            }
        }
    }
}));

const getRetinaUrl = (url: string, query: string, isRetina: boolean = false) => {
    const split = url.split('.');
    return `/images/${query}${split[0]}${isRetina ? '@2x' : ''}.${split[1]}`;
};

const BackgroundImage = (
    {
        imgUrl,
        alt = '',
        title = '',
        detectRetina = true,
        backgroundSize = 'cover',
        backgroundPosition = 'center center',
        customClass = null
    }: IBackgroundImage
) => {

    const [isRetina, setRetina] = useState(false);
    const classes = useStyles({imgUrl, backgroundSize, backgroundPosition, detectRetina, isRetina});

    useEffect(() => {
        const mediaQuery =
            "(-webkit-min-device-pixel-ratio: 1.5)," +
            "(min--moz-device-pixel-ratio: 1.5)," +
            "(-o-min-device-pixel-ratio: 3/2)," +
            "(min-device-pixel-ratio: 1.5)" +
            "(min-resolution: 144dpi)" +
            "(min-resolution: 1.5dppx)";
        setRetina(window.matchMedia && window.matchMedia(mediaQuery).matches);
    }, []);

    return (
        <div className={clsx(classes.imageContainer, customClass)}>
            <span role="img" aria-label={alt}/>
            <figure className={classes.image} title={title}/>
        </div>
    );
};
export default BackgroundImage;
