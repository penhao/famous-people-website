import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";

interface Props {
    maxWidth?: { xs?: number | string, sm?: number | string, md?: number | string };
    children: React.ReactNode;
}

interface StyleProps {
    maxWidth: { xs?: number | string, sm?: number | string, md?: number | string };
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'relative',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
const Container = ({maxWidth, children}: Props) => {
    const classes = useStyles({maxWidth});
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};
export default Container;
