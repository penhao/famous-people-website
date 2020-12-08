import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface Props {
    drawLine?: { xs?: boolean, sm?: boolean, md?: boolean };
    backgroundColor?: string;
    customClass?: string | null;
    children?: React.ReactNode;
}

interface StyleProps {
    drawLine: { xs: boolean, sm: boolean, md: boolean };
    backgroundColor: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRight: ({drawLine}: StyleProps) => (drawLine?.xs) ? `1px solid ${theme.palette.common.black}` : 'none',
        borderBottom: `1px solid ${theme.palette.common.black}`,
        backgroundColor: ({backgroundColor}: StyleProps) => backgroundColor,
        [theme.breakpoints.up('sm')]: {
            borderRight: ({drawLine}: StyleProps) => (drawLine?.sm) ? `1px solid ${theme.palette.common.black}` : 'none',
        },
        [theme.breakpoints.up('md')]: {
            borderRight: ({drawLine}: StyleProps) => (drawLine?.md) ? `1px solid ${theme.palette.common.black}` : 'none',
        }
    }
}));

const DrawLineItem = (
    {
        drawLine = {xs: true, sm: true, md: true},
        backgroundColor = 'transplant', customClass = null, children
    }: Props
) => {
    const classes = useStyles({drawLine, backgroundColor});
    return (
        <div className={clsx(classes.item, customClass)}>
            {children}
        </div>
    );
};
export default DrawLineItem;
