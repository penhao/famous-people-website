import React, {Fragment, useEffect} from 'react';
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from "@material-ui/core/CircularProgress";
import {useRouter} from "next/router";

interface Props {
    hrefPath: string
    asPath: string
    hasDrop?: boolean
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
    },
    backdrop: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 1000,
        color: '#fff',
    }
}));
const NavLink = ({hrefPath, asPath, fullWidth = false, fullHeight = false, className = null, hasDrop = true, children}: Props) => {
    const classes = useStyles({fullWidth, fullHeight});
    const router = useRouter();
    const [isBackDrop, setIsBackDrop] = React.useState(false);
    const handleClick = () => {
        if (hasDrop) {
            setIsBackDrop(!isBackDrop);
        }
    };
    useEffect(() => {
        setIsBackDrop(false);
    }, [router]);
    return (
        <Fragment>
            <Link href={hrefPath} as={asPath}>
                <a className={clsx(classes.link, className)} onClick={handleClick}>
                    {children}
                </a>
            </Link>
            <Backdrop className={classes.backdrop} open={isBackDrop}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Fragment>
    );
};

export default NavLink;
