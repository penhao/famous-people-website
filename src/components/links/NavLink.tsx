import React from 'react';
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface Props {
    hrefPath: string
    asPath: string
    fullWidth?: boolean
    fullHeight?: boolean
    className?: string | null
    children?: React.ReactNode
}

interface StyleProps {
    fullWidth: boolean
    fullHeight: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        display: 'block',
        position: 'relative',
        color: theme.palette.common.black,
        overflow: 'hidden',
        width: ({fullWidth}: StyleProps) => {
            return fullWidth ? '100%' : 'auto'
        },
        height: ({fullHeight}: StyleProps) => {
            return fullHeight ? '100%' : 'auto'
        }
    }
}));
const NavLink = ({hrefPath, asPath, fullWidth = false, fullHeight = false, className = null, children}: Props) => {
    const classes = useStyles({fullWidth, fullHeight});
    return (
        <Link href={hrefPath} as={asPath}>
            <a className={clsx(classes.link, className)}>
                {children}
            </a>
        </Link>
    );
};

export default NavLink;
