import React, { useEffect, useState } from 'react';
import DocumentAccordion from "../../accordion/DocumentAccordion";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/core/SvgIcon/SvgIcon";

interface Props {
    documentData: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        '& > .MuiGrid-item': {
            borderBottom: `1px solid ${theme.palette.common.black}`,
        },
        '& > .MuiGrid-item:nth-child(even)': {
            backgroundColor: theme.palette.grey['300']
        },
        '& > .MuiGrid-item:nth-child(odd)': {
            backgroundColor: theme.palette.common.white
        }
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
const DetailDocumentList = ({ documentData }: Props) => {
    const classes = useStyles();
    const [isMore, setIsMore] = useState(true);
    const [limit, setLimit] = useState(50);
    const [postData, setPostData] = useState<any[]>([]);
    const handleMoreClick = () => {
        const listRange = 10;
        const total = (limit + listRange <= documentData.length) ? limit + listRange : documentData.length;
        setLimit(total);
        setPostData(getPostList(total));
    };
    const getPostList = (total: number) => {
        return documentData.filter((item: any, index: number) => {
            return index < total
        });
    };
    useEffect(() => {
        setPostData(getPostList(limit));
    }, [documentData]);
    return (
        <Grid container className={classes.list}>
            {
                postData?.length
                    ?
                    postData.map((document: any, index: number) => {
                        return (
                            <Grid item xs={12} key={index}>
                                <DocumentAccordion data={document} />
                            </Grid>
                        )
                    })
                    :
                    null
            }
            <Grid item xs={12}>
                <Button disabled={postData.length >= documentData.length}
                    endIcon={<ReplayIcon />}
                    onClick={handleMoreClick}
                    className={classes.more}>
                    {
                        !documentData.length ? '無相關資料' : postData.length < documentData.length ? '載入更多' : '已全部載入'
                    }
                </Button>
            </Grid>
        </Grid>
    );
};
export default DetailDocumentList;
