import React from 'react';
import NavLink from "./NavLink";
import Typography, {TypographyProps} from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import IconArrowStatic from "../icons/IconArrowStatic";


interface Props {
    href: string
    name: string
    caption: string
    years: string
    iconTop?: boolean
    infoReverse?: boolean
    backgroundColor?: string
    textAlign?: TypographyProps["align"]
    yearsAlign?: TypographyProps["align"]
    className?: string | null
    imgUrl?: string;
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        width: '100%',
        height: '100%'
    },
    info: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '13px 20px',
        zIndex: 1,
        backgroundColor: ({backgroundColor}: Props) => backgroundColor,
        [theme.breakpoints.up('sm')]: {}
    },
    name: {
        fontWeight: 600,
        '& span': {
            // padding: '5px',
            backgroundColor: theme.palette.grey["200"]
        }
    },
    caption: {
        '& span': {
            // padding: '5px',
            backgroundColor: theme.palette.grey["200"]
        }
    },
    years: {
        fontFamily: ['"Playfair Display"', '"serif"'].join(','),
        '& span': {
            // padding: '5px',
            backgroundColor: theme.palette.grey["200"]
        }
    },
    iconWrapper: {
        textAlign: ({textAlign}: Props) => textAlign,
        marginTop: ({iconTop}: Props) => (iconTop) ? 0 : '5px',
        marginBottom: ({iconTop}: Props) => (iconTop) ? '5px' : 0,
        '& svg': {
            width: '24px'
        }
    },
    imgWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
    }
}));
const DetailLink = (
    {href, name, caption, years, imgUrl = '', backgroundColor = 'transparent', infoReverse = false, textAlign = 'left', yearsAlign = 'left', iconTop = false, className = null, children}: Props
) => {
    const classes = useStyles({textAlign, iconTop, backgroundColor});
    return (
        <NavLink hrefPath={'/detail/[name]'} asPath={href} fullWidth={true} fullHeight={true} className={classes.link}>
            <div className={classes.imgWrapper}>
                {children}
            </div>
            <Box display={'flex'}
                 flexDirection={infoReverse ? 'column-reverse' : 'column'}
                 justifyContent={'space-between'}
                 className={classes.info}>
                <Box display={'flex'} flexDirection={iconTop ? 'column-reverse' : 'column'}>
                    <div>
                        <Typography variant={"h5"} align={textAlign} className={classes.name}>
                            <span>{name}</span>
                        </Typography>
                        <Typography variant={"body1"} align={textAlign}
                                    className={classes.caption}>
                            <span>{caption}</span>
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <span><IconArrowStatic/></span>
                    </div>
                </Box>
                <Typography variant={"h5"}
                            component={'div'}
                            color={"primary"}
                            align={yearsAlign}
                            className={classes.years}>
                    <span>{years}</span>
                </Typography>
            </Box>
        </NavLink>
    );
};

export default DetailLink;
