import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme, TypographyProps} from "@material-ui/core";
import NavLink from "./NavLink";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import BackgroundImage from "../Images/BackgroundImage";

interface Props {
    href: string;
    title: string;
    label: string;
    imgUrl: string;
    textAlign?: TypographyProps["align"];
    className?: string | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundColor: theme.palette.grey["500"],
        '&:hover': {
            '& $info': {
                padding: '15px',
                '&::after': {
                    opacity: 1
                }
            },
            '& $cover': {
                transform: 'scale(1.05)'
            }
        }
    },
    info: {
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 1,
        transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
        }),
        '&::after': {
            display: 'block',
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: `2px solid ${theme.palette.primary.main}`,
            opacity: 0,
            transition: theme.transitions.create('opacity', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.standard
            }),
            transitionDelay: '0.1s'
        }
    },
    title: {
        fontWeight: 700,
        color: theme.palette.common.white
    },
    labelWrapper: {
        position: 'absolute',
        right: ({textAlign}: Props) => (textAlign === 'right') ? '22px' : 'none'
    },
    label: {
        position: 'absolute',
        display: 'inline-block',
        transformOrigin: 'left bottom',
        transform: 'translate(-7px,-10px) rotate(90deg)',
        color: theme.palette.common.white
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex
        }),
    }
}));
const CategoryLink = ({href, title, label, textAlign = 'left', imgUrl, className = null}: Props) => {
    const classes = useStyles({textAlign});
    return (
        <NavLink hrefPath={'/category/[...slug]'}
                 asPath={href}
                 fullWidth
                 fullHeight
                 className={clsx(classes.link, className)}>
            <BackgroundImage imgUrl={imgUrl} detectRetina={false} customClass={classes.cover}/>
            <div className={classes.info}>
                <Typography variant={"h4"} align={textAlign} className={classes.title}>
                    {title}
                </Typography>
                <div className={classes.labelWrapper}>
                    <Typography variant={"body2"} component={'div'} className={classes.label}>
                        {label.toUpperCase()}
                    </Typography>
                </div>
            </div>
        </NavLink>
    );
};

export default CategoryLink;
