import React from 'react';
import DocumentAccordion from "../../accordion/DocumentAccordion";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CollectionAccordion from "../../accordion/CollectionAccordion";

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
    }
}));
const DetailCollectionList = ({documentData}: Props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.list}>
            {
                documentData?.length
                    ?
                    documentData.map((document: any, index: number) => {
                        console.log(document);
                        return (
                            <Grid item xs={12} key={index}>
                                <CollectionAccordion id={index + 1} data={document}/>
                            </Grid>
                        )
                    })
                    :
                    null
            }
        </Grid>
    );
};
export default DetailCollectionList;
