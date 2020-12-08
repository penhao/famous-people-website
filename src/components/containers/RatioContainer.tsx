import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface Props {
    ratio: { xs?: number, sm?: number, md?: number };
    children?: React.ReactNode;
    className?: string
}

interface StyleProps {
    ratio: { xs: number, sm: number, md: number }
}

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: theme.palette.grey["500"],
            '&::after': {
                display: 'block',
                position: 'relative',
                content: '""',
                width: '100%',
                paddingTop: ({ratio}: StyleProps) => `${ratio.xs * 100}%`,
                pointerEvents: 'none'
            },
            [theme.breakpoints.up('sm')]: {
                '&::after': {
                    paddingTop: ({ratio}: StyleProps) => `${ratio.sm * 100}%`
                }
            },
            [theme.breakpoints.up('md')]: {
                '&::after': {
                    paddingTop: ({ratio}: StyleProps) => `${ratio.md * 100}%`
                }
            }
        },
        inner: {
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 1,
            overflow: 'hidden'
        }
    }
));
const RatioContainer = ({ratio, className, children}: Props) => {
    const classes = useStyles({ratio});
    return (
        <div className={clsx(classes.container, className)}>
            <span className={classes.inner}>
                {children}
            </span>
        </div>
    );
};
export default RatioContainer;
