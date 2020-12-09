import React from 'react';
import {Grid, Theme, useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import DetailLink from "../../links/DetailLink";
import CategoryLink from "../../links/CategoryLink";
import {useLineGridStyles} from "../GridStyles";
import SectionInfo from "../SectionInfo";
import DrawLineItem from "../../DrawLineItem";
import useCategoryFilterList from "../category/useCategoryFilterList";

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        height: '320px !important'
    },
    info: {
        width: '100%',
        padding: '40px 20px',
        borderBottom: `3px solid ${theme.palette.primary.main}`
    },
    title: {
        marginBottom: '20px'
    },
    cover: {
        position: 'absolute',
        width: '320px'
    },
    WuXinRong: {
        position: 'absolute',
        width: '310px',
        left: 0,
        transform: 'translate(-31%,2%)',
        bottom: 0,
    },
    YeShiTao: {
        position: 'absolute',
        width: '300px',
        right: 0,
        transform: 'translate(13%,4%)',
        bottom: 0
    },
    LuJiaXing: {
        position: 'absolute',
        width: '280px',
        right: 0,
        transform: 'translate(25%,2%)',
        bottom: 0
    },
    JiangYuanShu: {
        position: 'absolute',
        width: '360px',
        left: 0,
        bottom: 0,
        transform: 'translate(-20%,10%)'
    },
    GuoBaiChuan: {
        position: 'absolute',
        width: '290px',
        left: 0,
        bottom: 0,
        transform: 'translate(-10%,4%)'
    },
    LiaoZhiDe: {
        position: 'absolute',
        width: '300px',
        right: 0,
        bottom: 0,
        transform: 'translate(24%,10%)'
    },
    YoichiHatta: {
        position: 'absolute',
        width: '340px',
        right: 0,
        bottom: 0,
        transform: 'translate(25%,10%)'
    },
    SunLiLian: {
        position: 'absolute',
        width: '300px',
        left: 0,
        bottom: 0,
        transform: 'translate(-10%,4%)'
    },
    Mayaque: {
        position: 'absolute',
        width: '300px',
        left: 0,
        bottom: 0,
        transform: 'translate(-16%,7%)'
    },
    WangJinHe: {
        position: 'absolute',
        width: '320px',
        right: 0,
        bottom: 0,
        transform: 'translate(20%,10%)'
    },
    XuZangChun: {
        position: 'absolute',
        width: '320px',
        left: 0,
        bottom: 0,
        transform: 'translate(-10%,5%)'
    },
    ThomasBuckley: {
        position: 'absolute',
        width: '320px',
        right: 0,
        bottom: 0,
        transform: 'translate(20%,10%)'
    }
}));
const HomeCTA = () => {

    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <section>

            {/* Intro */}
            <Grid container>
                <Grid item xs={12}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}>
                        <SectionInfo>
                            <Typography variant={"h3"} color={"primary"} align={"center"} className={classes.title}>
                                臺南名人堂特展
                            </Typography>
                            <Typography variant={"body1"} align={"center"}>
                                於臺南總圖四樓同步展覽之「臺南名人堂特展」，以文物、影象、文字、互動影音為你介紹兩百多位臺南名人。
                            </Typography>
                        </SectionInfo>
                    </DrawLineItem>
                </Grid>
            </Grid>

            {/* 文學 */}
            <Grid container direction={mdUp ? 'row' : 'column-reverse'}>
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={8}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <DrawLineItem drawLine={{xs: true, sm: true, md: true}}
                                                  customClass={classes.item}>
                                        <DetailLink href={`/detail/46/${encodeURIComponent('吳新榮')}`}
                                                    name={'吳新榮'}
                                                    caption={'左翼詩人的故鄉情懷'}
                                                    years={'1907~1967'}
                                                    yearsAlign={"right"}
                                                    infoReverse
                                                    textAlign={"right"}
                                                    backgroundColor={useTheme().palette.grey["300"]}>
                                            <img src="/images/home/wu-xinrong.png" alt=""
                                                 className={classes.WuXinRong}/>
                                        </DetailLink>
                                    </DrawLineItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <DrawLineItem drawLine={{xs: false, sm: true, md: true}}
                                                  customClass={classes.item}>
                                        <DetailLink href={`/detail/50/${encodeURIComponent('葉石濤')}`}
                                                    name={'葉石濤'}
                                                    caption={'沒有土地哪有文學'}
                                                    years={'1925~2008'}
                                                    backgroundColor={useTheme().palette.common.white}>
                                            <img src="/images/home/ye-shitao.png" alt="" className={classes.YeShiTao}/>
                                        </DetailLink>
                                    </DrawLineItem>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <DrawLineItem drawLine={{xs: false, sm: false, md: true}}
                                          customClass={classes.item}>
                                <DetailLink href={`/detail/87/${encodeURIComponent('盧嘉興')}`}
                                            name={'盧嘉興'}
                                            caption={'臺灣文史學人'}
                                            years={'1918~1992'}
                                            infoReverse
                                >
                                    <img src="/images/home/lu-jiaxing.png" alt="" className={classes.LuJiaXing}/>
                                </DetailLink>
                            </DrawLineItem>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/2/${encodeURIComponent('文學')}`}
                                      title={'文學'}
                                      label={'LITERATURE'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-literature.png'}/>
                    </DrawLineItem>
                </Grid>
            </Grid>

            {/* 政治 */}
            <Grid container>
                <Grid item xs={12} sm={6} md={8}>
                    <DrawLineItem drawLine={{xs: false, sm: true, md: true}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/4/${encodeURIComponent('政治')}`}
                                      title={'政治'}
                                      label={'POLITICS'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-politics.png'}/>
                    </DrawLineItem>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                  customClass={classes.item}>
                        <DetailLink href={`/detail/109/${encodeURIComponent('蔣元樞')}`}
                                    name={'蔣元樞'}
                                    caption={'府城蔣公子與八廟之說'}
                                    years={'1738~1781'}
                                    infoReverse
                                    textAlign={"right"}
                                    yearsAlign={"right"}
                        >
                            <img src="/images/home/jiang-yuanshu.png" alt="" className={classes.JiangYuanShu}/>
                        </DetailLink>
                    </DrawLineItem>
                </Grid>
            </Grid>

            {/* 藝術 */}
            <Grid container direction={mdUp ? 'row' : 'column-reverse'}>
                <Grid item xs={12} md={4}>
                    <Grid container>
                        <Grid item xs={6}>
                            <DrawLineItem drawLine={{xs: true, sm: true, md: true}}
                                          customClass={classes.item}>
                                <DetailLink href={`/detail/19/${encodeURIComponent('郭柏川')}`}
                                            name={'郭柏川'}
                                            caption={'時代性、民族性、自我性的藝術情操'}
                                            years={'1901~1974'}
                                            textAlign={"right"}
                                            yearsAlign={"right"}
                                            backgroundColor={useTheme().palette.grey["300"]}>
                                    <img src="/images/home/guo-baichuan.png" alt="" className={classes.GuoBaiChuan}/>
                                </DetailLink>
                            </DrawLineItem>
                        </Grid>
                        <Grid item xs={6}>
                            <DrawLineItem drawLine={{xs: false, sm: false, md: true}}
                                          customClass={classes.item}>
                                <DetailLink href={`/detail/209/${encodeURIComponent('廖枝德')}`}
                                            name={'廖枝德'}
                                            caption={'大木作工藝的極致'}
                                            years={'1930~2015'}
                                            backgroundColor={useTheme().palette.common.white}>
                                    <img src="/images/home/liao-zhide.png" alt="" className={classes.LiaoZhiDe}/>
                                </DetailLink>
                            </DrawLineItem>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/1/${encodeURIComponent('藝術')}`}
                                      title={'藝術'}
                                      label={'ART'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-art.png'}/>
                    </DrawLineItem>
                </Grid>
            </Grid>


            {/* 技術 */}
            <Grid container>
                <Grid item xs={12} sm={7} md={8}>
                    <DrawLineItem drawLine={{xs: false, sm: true, md: true}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/8/${encodeURIComponent('技術')}`}
                                      title={'技術'}
                                      label={'TECHNOLOGY'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-technology.png'}/>
                    </DrawLineItem>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                  customClass={classes.item}>
                        <DetailLink href={`/detail/211/${encodeURIComponent('八田與一')}`}
                                    name={'八田與一'}
                                    caption={'嘉南大圳之父'}
                                    years={'1886~1942'}
                                    backgroundColor={useTheme().palette.common.white}>
                            <img src="/images/home/yoichi-hatta.png" alt="" className={classes.YoichiHatta}/>
                        </DetailLink>
                    </DrawLineItem>
                </Grid>
            </Grid>


            {/* 學術教育 */}
            <Grid container direction={smUp ? 'row' : 'column-reverse'}>
                <Grid item xs={12} sm={5} md={4}>
                    <DrawLineItem drawLine={{xs: false, sm: true, md: true}}
                                  customClass={classes.item}>
                        <DetailLink href={`/detail/200/${encodeURIComponent('孫理蓮')}`}
                                    name={'孫理蓮'}
                                    caption={'為臺灣奉獻的母親'}
                                    years={'1901~1983'}
                                    iconTop
                                    infoReverse
                                    textAlign={"right"}
                                    yearsAlign={"right"}
                        >
                            <img src="/images/home/sun-lilian.png" alt="" className={classes.SunLiLian}/>
                        </DetailLink>
                    </DrawLineItem>
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/3/${encodeURIComponent('學術教育')}`}
                                      title={'學術教育'}
                                      label={'EDUCATION'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-education.png'}/>
                    </DrawLineItem>
                </Grid>
            </Grid>


            {/* 醫療 */}
            <Grid container>
                <Grid item xs={12} md={6}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: true}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/5/${encodeURIComponent('醫療')}`}
                                      title={'醫療'}
                                      label={'MEDICAL'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-medical.png'}/>
                    </DrawLineItem>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <DrawLineItem drawLine={{xs: true, sm: true, md: true}}
                                          customClass={classes.item}>
                                <DetailLink href={`/detail/192/${encodeURIComponent('馬雅各')}`}
                                            name={'馬雅各'}
                                            caption={'為臺灣引進現代醫療的先驅'}
                                            years={'1836~1921'}
                                            textAlign={"right"}
                                            yearsAlign={"right"}
                                            backgroundColor={useTheme().palette.grey["300"]}>
                                    <img src="/images/home/mayaque.png" alt="" className={classes.Mayaque}/>
                                </DetailLink>
                            </DrawLineItem>
                        </Grid>
                        <Grid item xs={6}>
                            <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                          customClass={classes.item}>
                                <DetailLink href={`/detail/159/${encodeURIComponent('王金河')}`}
                                            name={'王金河'}
                                            caption={'臺灣烏腳病之父'}
                                            years={'1836~1921'}
                                >
                                    <img src="/images/home/wang-jinhe.png" alt="" className={classes.WangJinHe}/>
                                </DetailLink>
                            </DrawLineItem>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            {/* 經濟 */}
            <Grid container direction={smUp ? 'row' : 'column-reverse'}>
                <Grid item xs={12} sm={5} md={4}>
                    <DrawLineItem drawLine={{xs: false, sm: true, md: true}}
                                  customClass={classes.item}>
                        <DetailLink href={`/detail/188/${encodeURIComponent('許藏春')}`}
                                    name={'許藏春'}
                                    caption={'見證五條港的風華'}
                                    years={'1853~1919'}
                                    textAlign={"right"}
                                    yearsAlign={"right"}
                                    backgroundColor={useTheme().palette.common.white}>
                            <img src="/images/home/xu-zangchun.png" alt="" className={classes.XuZangChun}/>
                        </DetailLink>
                    </DrawLineItem>
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/6/${encodeURIComponent('經濟')}`}
                                      title={'經濟'}
                                      label={'ECONOMIC'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-economic.png'}/>
                    </DrawLineItem>
                </Grid>
            </Grid>

            {/* 宗教 */}
            <Grid container>
                <Grid item xs={12} sm={7} md={8}>
                    <DrawLineItem drawLine={{xs: false, sm: true, md: true}}
                                  customClass={classes.item}>
                        <CategoryLink href={`/category/7/${encodeURIComponent('宗教')}`}
                                      title={'宗教'}
                                      label={'RELIGIONS'}
                                      textAlign={"left"}
                                      imgUrl={'/images/cover-religions.png'}/>
                    </DrawLineItem>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                    <DrawLineItem drawLine={{xs: false, sm: false, md: false}}
                                  customClass={classes.item}>
                        <DetailLink href={`/detail/194/${encodeURIComponent('湯瑪斯巴克禮')}`}
                                    name={'湯瑪斯·巴克禮'}
                                    caption={'為愛航向福爾摩沙'}
                                    years={'1849~1935'}
                        >
                            <img src="/images/home/thomas-buckley.png" alt="" className={classes.ThomasBuckley}/>
                        </DetailLink>
                    </DrawLineItem>
                </Grid>
            </Grid>
        </section>
    );
};
export default HomeCTA;
