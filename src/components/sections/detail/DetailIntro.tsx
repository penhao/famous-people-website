import React from 'react';
import Grid from "@material-ui/core/Grid";
import DrawLineItem from "../../DrawLineItem";
import DetailInfo from "./DetailInfo";
import PhotoAlbumToggle from "../../buttons/PhotoAlbumToggle";
import {useLineGridStyles} from "../GridStyles";
import {useGlobalStyles} from "../../../mui/GlobalStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import clsx from "clsx";
import Sticky from "react-sticky-el";
import RatioContainer from "../../containers/RatioContainer";

interface Props {
    postData: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    bgGrey: {
        backgroundColor: theme.palette.grey['500']
    },
    bgWhite: {
        backgroundColor: theme.palette.common.white
    },
    sticky: {
        top: '90px'
    }
}));
const DetailIntro = ({postData}: Props) => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const theme = useTheme();
    console.log(postData.achieve);
    return (
        <Grid container className={globalClasses.drawLineSmUp}>
            <Grid item xs={12} sm={6} className={clsx(classes.bgGrey, globalClasses.item)}>
                <DetailInfo title={'生平小傳'}
                            desc={postData.life_intro}
                            titleColor={theme.palette.common.white}
                            descColor={theme.palette.common.white}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Grid container>
                    <Grid item xs={12} className={globalClasses.item}>
                        <DetailInfo title={'著名事蹟、成就或貢獻'}
                                    desc={postData.achieve}
                                    titleColor={theme.palette.primary.main}/>
                    </Grid>
                    <Grid item xs={12} className={globalClasses.item}>
                        <DetailInfo title={'故居或故址詳細地址與現況描述'}
                                    desc={`${postData.address}<br/>${postData.address_memo}`}/>
                    </Grid>
                    <Grid item xs={12} className={globalClasses.item}>
                        <DetailInfo title={'備註'}
                                    desc={postData.memo}
                                    titleColor={theme.palette.primary.main}/>
                    </Grid>
                    <Grid item xs={12} className={globalClasses.item}>
                        <DetailInfo title={'資料出處'}
                                    desc={postData.source}/>
                    </Grid>
                    <Grid item xs={12} className={globalClasses.item}>
                        <DetailInfo title={'相關文獻、研究資料與延伸閱讀'}
                                    desc={postData.more_read}
                                    titleColor={theme.palette.primary.main}/>
                    </Grid>
                    {
                        postData?.address_images.length
                            ?
                            <Grid item xs={12} className={globalClasses.item}>
                                <RatioContainer ratio={{xs: 380 / 640, sm: 380 / 640, md: 380 / 640}}>
                                    <PhotoAlbumToggle photoData={postData.address_images}/>
                                </RatioContainer>
                            </Grid>
                            :
                            null
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};
export default DetailIntro;
