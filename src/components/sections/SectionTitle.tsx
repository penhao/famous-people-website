import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import {TypographyProps} from "@material-ui/core/Typography";

interface ITitle {
    color?: TypographyProps["color"]
    align?: TypographyProps["align"]
    children?: React.ReactNode
}
const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: '15px'
    }
}));
const SectionTitle = ({color = 'initial', align = 'left', children}: ITitle) => {
    const classes = useStyles();
    return (
        <Typography variant={"h3"} color={color} align={align} className={classes.title}>
            {children}
        </Typography>
    );
};
export default SectionTitle;
