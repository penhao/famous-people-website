import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme, TypographyProps} from "@material-ui/core";
import NavLink from "./NavLink";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

interface Props {
    href: string;
    title: string;
    label: string;
    textAlign?: TypographyProps["align"];
    className?: string | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundColor: theme.palette.grey["500"]
    },
    info: {
        position: 'relative',
        width: '100%',
        height: '100%'
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
    }
}));
const CategoryLink = ({href, title, label, textAlign = 'left', className = null}: Props) => {
    const classes = useStyles({textAlign});
    return (
        <NavLink hrefPath={'/category/[...slug]'} asPath={href} fullWidth fullHeight className={clsx(classes.link, className)}>
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
