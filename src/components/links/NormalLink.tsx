import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface ILink {
    href: string
    target?: string
    fitParent?: boolean
    customClass?: string | null
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        color: theme.palette.common.black,
        width: ({fitParent}: ILink) => {
            return fitParent ? '100%' : 'auto'
        },
        height: ({fitParent}: ILink) => {
            return fitParent ? '100%' : 'auto'
        },
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'underline'
        }
    }
}));
const NormalLink = ({href, target = '_blank', fitParent = false, customClass = null, children}: ILink) => {
    const classes = useStyles({fitParent});
    return (
        <a href={href} target={target} rel='noreferrer noopener' className={clsx(classes.link, customClass)}>
            {children}
        </a>
    );
};

export default NormalLink;
