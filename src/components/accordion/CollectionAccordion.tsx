import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Theme} from "@material-ui/core";
import RatioContainer from "../containers/RatioContainer";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinesEllipsis from 'react-lines-ellipsis';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import {isValueEmpty} from "../../utils/Utils";
import PhotoAlbumToggle from "../buttons/PhotoAlbumToggle";
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import GrainOutlinedIcon from '@material-ui/icons/GrainOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

interface Props {
    id: number;
    data: any;
}

interface StyleProps {
    coverImage: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    accordion: {
        width: '100%',
        borderRadius: '0 !important',
        boxShadow: 'none !important',
        backgroundColor: 'transparent',
        '& .MuiAccordionSummary-root': {
            padding: '10px 20px',
            backgroundColor: 'transparent',
            [theme.breakpoints.up('sm')]: {
                padding: '10px 60px 10px 20px',
            },
            [theme.breakpoints.up('md')]: {
                padding: '10px 20px',
            }
        },
        '& .MuiAccordionSummary-content': {
            margin: 0
        },
        '& .MuiAccordionSummary-expandIcon': {
            position: 'absolute',
            right: 0,
            bottom: 0,
            marginRight: '0',
            color: theme.palette.primary.main,
            [theme.breakpoints.up('md')]: {
                position: 'relative',
                marginRight: '-12px'
            }
        },
        '& .MuiAccordionDetails-root': {
            padding: 0,
            backgroundColor: theme.palette.grey["200"],
            borderTop: `1px solid ${theme.palette.common.black}`,
            [theme.breakpoints.up('md')]: {
                padding: '0 20px',
            }
        }
    },
    head: {
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 'none'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '1000px'
        }
    },
    headItem: {
        '& .MuiSvgIcon-root': {
            width: '24px',
            marginRight: '6px',
            color: theme.palette.primary.main
        }
    },
    ellipsisWrapper: {
        width: 'calc(100% - 30px)'
    },
    detailContent: {
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0',
        [theme.breakpoints.up('sm')]: {
            padding: '0 20px',
        },
        '& .MuiGrid-item': {
            [theme.breakpoints.up('sm')]: {
                // width: 'auto'
            }
        }
    },
    coverRatio: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '200px'
        },
        [theme.breakpoints.up('md')]: {
            width: '200px'
        }
    },
    cover: {
        width: '100%',
        height: '100%',
        backgroundImage: ({coverImage}: StyleProps) => `url(${coverImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    info: {
        width: '100%',
        maxWidth: '400px',
        padding: '0 20px 20px 20px',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            maxWidth: '360px',
            padding: '20px 0'
        }
    },
    bookName: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: 700,
        color: theme.palette.primary.main,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    table: {
        width: '100%',
        marginTop: '15px',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            maxWidth: '440px',
            marginTop: '20px'
        },
        '& .MuiTableCell-root': {
            fontFamily: ['"Noto Sans TC"', '"sans-serif"'].join(','),
            fontSize: theme.typography.pxToRem(14),
            borderBottom: 'none',
            verticalAlign: 'baseline'
        },
        '& th': {
            width: '100px',
            color: theme.palette.grey["500"],
            fontWeight: 400,
            padding: '3px 10px 3px 0',
        },
        '& td': {
            padding: '3px 0 3px 10px'
        }
    }
}));

const CollectionAccordion = ({id, data}: Props) => {
    const classes = useStyles({coverImage: data.externalCoverUrl});
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const getBookTitle = (title: string) => {
        return title.replace('/', '');
    };
    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ArrowDownwardOutlinedIcon/>}>
                <div className={classes.head}>
                    <Grid container spacing={mdUp ? 4 : 2}>
                        <Grid item xs={12} sm={1} md={1}>
                            <Box display={'flex'} flexWrap={'nowrap'} className={classes.headItem}>
                                <FormatListBulletedOutlinedIcon/>
                                <Typography variant={"body1"} component={'div'}>
                                    {id}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={4}>
                            <Box display={'flex'} flexWrap={'nowrap'} className={classes.headItem}>
                                <MapOutlinedIcon/>
                                <div className={classes.ellipsisWrapper}>
                                    <Typography variant={"body1"} component={'div'}>
                                        <LinesEllipsis
                                            text={getBookTitle(data.title)}
                                            maxLine='1'
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters'/>
                                    </Typography>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3}>
                            <Box display={'flex'} flexWrap={'nowrap'} className={classes.headItem}>
                                <GrainOutlinedIcon/>
                                <div className={classes.ellipsisWrapper}>
                                    <Typography variant={"body1"} component={'div'}>
                                        {data.serial}
                                    </Typography>
                                </div>
                            </Box>

                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Box display={'flex'} flexWrap={'nowrap'} className={classes.headItem}>
                                <BookmarksOutlinedIcon/>
                                <Typography variant={"body1"} component={'div'}>
                                    {data.cat}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2}>
                            <Box display={'flex'} flexWrap={'nowrap'} className={classes.headItem}>
                                <EventOutlinedIcon/>
                                <Typography variant={"body1"} component={'div'}>
                                    {data.years}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.detailContent}>
                    <Grid container
                          justify={smUp ? "center" : "flex-start"}
                          alignItems={"center"}
                          spacing={smUp ? 4 : 2}>
                        <Grid item xs={12} sm={'auto'}>
                            <RatioContainer ratio={{xs: 1, sm: 1, md: 1}}
                                            className={classes.coverRatio}>
                                <PhotoAlbumToggle photoData={data.images}/>
                            </RatioContainer>
                        </Grid>
                        <Grid item xs={12} sm={'auto'}>
                            <div className={classes.info}>
                                <Typography variant={"body1"} component={'div'}>
                                    {data.desc_text}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </AccordionDetails>
        </Accordion>
    );
};
export default CollectionAccordion;
