import React, {useEffect} from 'react';
import Layout from "../../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {GetServerSidePropsContext} from "next";
import {fetchDetailData, fetchDocumentData} from "../../api/ApiService";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import DetailDocumentList from "../../components/sections/detail/DetailDocumentList";
import DetailIntro from "../../components/sections/detail/DetailIntro";
import DetailCollectionList from "../../components/sections/detail/DetailCollectionList";
import {useGlobalStyles} from "../../mui/GlobalStyles";
import clsx from "clsx";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
    label: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: 600,
        backgroundColor: theme.palette.primary.main,
        padding: '10px 20px',
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {}
    },
    head: {
        padding: '30px 20px',
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {}
    },
    name: {
        fontSize: theme.typography.pxToRem(40),
        fontWeight: 700,
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(48)
        }
    },
    actionYears: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 600,
        marginBottom: '10px',
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(16),
        },
        [theme.breakpoints.up('md')]: {}
    },
    tabList: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        '& .MuiTab-root': {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 700,
            width: '33.3333%',
            minWidth: 'auto',
            padding: '16px 10px',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(18),
            },
            [theme.breakpoints.up('md')]: {}
        },
        '& .Mui-selected': {
            color: theme.palette.primary.main,
            '& .MuiTab-wrapper': {
                textDecoration: 'underline'
            }
        }
    }
}));
const FamousPeopleDetail = ({fetchPost, fetchDocument}) => {

    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const router = useRouter();
    const [value, setValue] = React.useState(0);
    const [documentData, setDocumentData] = React.useState([]);

    useEffect(() => {
        if (fetchDocument.status === 'ok' && fetchDocument.querys.length) {
            setDocumentData(fetchDocument.querys);
        }
    }, [fetchPost, fetchDocument]);

    const TabPanel = (props: any) => {
        const {children, value, index, ...other} = props;
        return (
            <div id={`scrollable-auto-tabpanel-${index}`}
                 role="tabpanel"
                 hidden={value !== index}
                 {...other}>
                {value === index && (
                    <Box>
                        {children}
                    </Box>
                )}
            </div>
        );
    };
    const a11yProps = (index: number) => {
        return {
            id: `detail-tab-${index}`,
            'aria-controls': `detail-tabpanel-${index}`,
        };
    };
    const handleChange = (event: React.MouseEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Layout>
            {
                fetchPost?.data.username
                    ?
                    <Grid container>
                        <Grid item xs={12} className={globalClasses.item}>
                            <Typography align={"center"} className={clsx(classes.label, globalClasses.fontSerif)}>
                                {fetchPost.data.category}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={globalClasses.item}>
                            <div className={classes.head}>
                                <Typography color={"primary"}
                                            align={"center"}
                                            className={clsx(classes.actionYears, globalClasses.fontSerif)}>
                                    {fetchPost.data.start_over_year}
                                </Typography>
                                <Typography variant={"h2"}
                                            color={"primary"}
                                            align={"center"}
                                            className={clsx(classes.name, globalClasses.fontSerif)}>
                                    {fetchPost.data.username}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} className={globalClasses.item}>
                            <Tabs value={value}
                                  centered
                                  TabIndicatorProps={{style: {display: 'none'}}}
                                  onChange={handleChange}
                                  className={classes.tabList}>
                                <Tab label="關於名人" {...a11yProps(0)} className={globalClasses.fontSerif}/>
                                <Tab label="相關文獻" {...a11yProps(1)} className={globalClasses.fontSerif}/>
                                {
                                    (fetchPost.data.collectible.length)
                                        ?
                                        <Tab label="名人典藏" {...a11yProps(2)} className={globalClasses.fontSerif}/>
                                        :
                                        null
                                }
                            </Tabs>
                        </Grid>
                        {/* Tab */}
                        <Grid item xs={12}>
                            <TabPanel value={value} index={0}>
                                <DetailIntro postData={fetchPost.data}/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <DetailDocumentList documentData={documentData}/>
                            </TabPanel>
                            {
                                (fetchPost.data.collectible.length)
                                    ?
                                    <TabPanel value={value} index={2}>
                                        <DetailCollectionList documentData={fetchPost.data.collectible}/>
                                    </TabPanel>
                                    :
                                    null
                            }
                        </Grid>
                    </Grid>
                    :
                    null
            }
        </Layout>
    );
};

export const getServerSideProps = async ({query, res}: GetServerSidePropsContext) => {
    const detailId = Number(query?.slug[0]);
    const fetchPost = await fetchDetailData(detailId);
    const fetchDocument = await fetchDocumentData(query?.slug[1], 1, 500);
    if (fetchPost.error) {
        const redirectUrl = `/404`;
        res.setHeader("location", redirectUrl);
        res.statusCode = 302;
        res.end();
    }
    return {
        props: {
            fetchPost,
            fetchDocument
        }
    }
};
export default FamousPeopleDetail;
