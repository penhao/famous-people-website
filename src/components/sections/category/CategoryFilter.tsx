import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useGlobalStyles} from "../../../mui/GlobalStyles";
import NavLink from "../../links/NavLink";
import {useRouter} from "next/router";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import {genderType} from "./useGender";

interface Props {
    categoryFilterList: any[] | null;
    genderList: genderType[];
    genderChangeHandler: (gender: genderType) => void;
}
const useStyles = makeStyles((theme: Theme) => ({
    filter: {},
    categoryList: {
        '& > .MuiGrid-item': {
            borderRight: `1px solid ${theme.palette.common.black}`,
            borderBottom: `1px solid ${theme.palette.common.black}`,
            [theme.breakpoints.only('xs')]: {
                '&:nth-child(even)': {
                    borderRight: 'none'
                }
            },
            [theme.breakpoints.only('sm')]: {
                '&:nth-child(4)': {
                    borderRight: 'none'
                }
            },
            '&:last-child': {
                borderRight: 'none'
            }
        }
    },
    genderList: {
        borderBottom: `1px solid ${theme.palette.common.black}`,
        '& > .MuiGrid-item': {
            [theme.breakpoints.up('md')]: {
                flex: '0 1 12.5%'
            }
        }
    },
    link: {
        padding: '15px 20px',
        '&:hover': {
            color: theme.palette.primary.main
        },
        '&.active': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main
        },
        '& > span': {
            display: 'block',
            fontSize: theme.typography.pxToRem(18),
            textAlign: 'center',
            fontWeight: 600
        }
    },
    gender: {
        padding: '15px 20px',
        fontSize: theme.typography.pxToRem(18),
        textAlign: 'center',
        fontWeight: 600,
        '&.active': {
            color: theme.palette.primary.main,
            textDecoration: 'underline'
        }
    }
}));
const CategoryFilter = ({categoryFilterList, genderList, genderChangeHandler}: Props) => {
    const router = useRouter();
    const categoryId = (router && router.query.slug) ? router.query.slug[0] : -1;
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    return (
        <div className={classes.filter}>
            {
                (categoryFilterList && categoryFilterList.length)
                    ?
                    <Grid container className={classes.categoryList}>
                        {
                            categoryFilterList.map((category: any, index: number) => {
                                return (
                                    <Grid item xs={6} sm={3} md key={index}>
                                        <NavLink hrefPath={'/category/[...slug]'}
                                                 asPath={`/category/${category.id}/${encodeURIComponent(category.title)}`}
                                                 fullWidth
                                                 className={clsx(classes.link, (Number(categoryId) === index + 1) ? 'active' : null)}
                                        >
                                            <span className={globalClasses.fontSerif}>{category.title}</span>
                                        </NavLink>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                    :
                    null
            }
            {/* Gender */}
            <Grid container className={classes.genderList} justify={"center"}>
                <Grid item xs={6} sm={3} md>
                    <Button
                        fullWidth
                        onClick={() => {
                            genderChangeHandler('男')
                        }}
                        className={clsx(classes.gender, genderList.includes('男') ? 'active' : null)}>
                        <span className={globalClasses.fontSerif}>男</span>
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3} md>
                    <Button
                        fullWidth
                        onClick={() => {
                            genderChangeHandler('女')
                        }}
                        className={clsx(classes.gender, genderList.includes('女') ? 'active' : null)}>
                        <span className={globalClasses.fontSerif}>女</span>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};
export default CategoryFilter;
