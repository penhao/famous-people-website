import React, {Fragment, useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CategoryItem from "./CategoryItem";
import ReplayIcon from '@material-ui/icons/Replay';

interface Props {
    isMore: boolean;
    postData: any[];
    moreHandler: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        '& .MuiGrid-item': {
            borderBottom: `1px solid ${theme.palette.common.black}`,
            [theme.breakpoints.only('xs')]: {},
            [theme.breakpoints.only('sm')]: {
                borderRight: `1px solid ${theme.palette.common.black}`,
                '&:nth-child(2n+2)': {
                    borderRight: 'none',
                }
            },
            [theme.breakpoints.up('md')]: {
                borderRight: `1px solid ${theme.palette.common.black}`,
                '&:nth-child(4n+4)': {
                    borderRight: 'none',
                },
                '&:nth-child(-1n+4)': {}
            }
        }
    },
    moreContainer: {
        borderTop: `1px solid ${theme.palette.common.black}`,
        borderBottom: `1px solid ${theme.palette.common.black}`,
        marginTop: '-1px'
    },
    more: {
        width: '100%',
        height: '60px',
        fontFamily: ['"Noto Serif TC"', '"serif"'].join(','),
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 600,
        color: theme.palette.primary.main,
        '& .MuiButton-endIcon': {
            '& svg': {
                fontSize: theme.typography.pxToRem(24)
            }
        }
    }
}));
const CategoryList = ({postData, isMore, moreHandler}: Props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container className={classes.list}>
                {
                    postData.map((data: any, index: number) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <CategoryItem href={`/detail/${data.id}/${data.username}`}
                                              caption={data.category}
                                              name={data.username}
                                              desc={data.life_intro}
                                              years={data.start_over_year}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid container className={classes.moreContainer}>
                <Grid item xs={12}>
                    <Button disabled={!isMore}
                            endIcon={<ReplayIcon/>}
                            onClick={moreHandler}
                            className={classes.more}>
                        {
                            isMore ? '載入更多' : '已載入完成'
                        }
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
};
export default CategoryList;
