import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import NavLink from "../../links/NavLink";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconArrowStatic from "../../icons/IconArrowStatic";
import LinesEllipsis from "react-lines-ellipsis";

interface IProps {
    href: string
    caption: string
    name: string
    desc: string
    years: string
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        padding: '12px 18px'
    },
    info: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    caption: {
        color: theme.palette.grey["500"]
    },
    name: {
        fontWeight: 600
    },
    years: {
        fontFamily: ['"Playfair Display"', '"serif"'].join(','),
        marginTop: 'auto'
    },
    icon: {
        display: 'inline-flex',
        position: 'absolute',
        top: '5px',
        right: 0,
        '& svg': {
            width: '24px'
        }
    }
}));
const CategoryItem = ({href, caption, name, desc, years}: IProps) => {
    const classes = useStyles();
    return (
        <NavLink hrefPath={`/detail/[...slug]`}
                 asPath={href}
                 fullWidth={true} fullHeight={true} className={classes.link}>
            <Box display={'flex'} flexDirection={'column'} className={classes.info}>
                <Typography variant={"body1"} component={'div'} className={classes.caption}>
                    {caption}
                </Typography>
                <Typography variant={"h5"} component={'div'} className={classes.name}>
                    {name}
                </Typography>
                <Typography variant={"body1"} component={'div'}>
                    <LinesEllipsis
                        text={desc}
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </Typography>
                <Typography variant={"h5"} component={'div'} color={"primary"} className={classes.years}>
                    {years}
                </Typography>
                <div className={classes.icon}>
                    <IconArrowStatic/>
                </div>
            </Box>
        </NavLink>
    );
};

export default CategoryItem;
