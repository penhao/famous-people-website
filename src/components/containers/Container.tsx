import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";

interface Props {
    fullHeight?: boolean;
    maxWidth?: { xs?: number | string, sm?: number | string, md?: number | string };
    children: React.ReactNode;
}

interface StyleProps {
    fullHeight: boolean;
    maxWidth: { xs?: number | string, sm?: number | string, md?: number | string };
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'relative',
        width: '100%',
        height: ({fullHeight}: StyleProps) => fullHeight ? '100%' : 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 20px',
        maxWidth: ({maxWidth}: StyleProps) => {
            return maxWidth?.xs ? maxWidth.xs : 'none';
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: ({maxWidth}: StyleProps) => {
                return maxWidth?.sm ? maxWidth.sm : 'none';
            }
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: ({maxWidth}: StyleProps) => {
                return maxWidth?.md ? maxWidth.md : 'none';
            }
        }
    }
}));
const Container = ({maxWidth, fullHeight = false, children}: Props) => {
    const classes = useStyles({maxWidth, fullHeight});
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};
export default Container;
