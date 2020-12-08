import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";

export const useGlobalStyles = makeStyles((theme: Theme) => ({
    fontSans: {
        fontFamily: ['"Noto Sans TC"', '"sans-serif"'].join(',')
    },
    fontSerif: {
        fontFamily: ['"Noto Serif TC"', '"serif"'].join(',')
    },
    container: {
        '& > .MuiGrid-item': {
            borderBottom: `3px solid ${theme.palette.primary.main}`
        }
    },
    item: {
        borderBottom: `1px solid ${theme.palette.common.black}`,
    },
    drawLineXsUp: {
        '& > .MuiGrid-item': {
            position: 'relative',
            borderRight: `1px solid ${theme.palette.common.black}`,
            '&:last-child': {
                borderRight: 'none'
            }
        }
    },
    drawLineSmUp: {
        [theme.breakpoints.up('sm')]: {
            '& > .MuiGrid-item': {
                position: 'relative',
                borderRight: `1px solid ${theme.palette.common.black}`,
                '&:last-child': {
                    borderRight: 'none'
                }
            }
        }
    },
    drawLineMdUp: {
        [theme.breakpoints.up('md')]: {
            '& > .MuiGrid-item': {
                position: 'relative',
                borderRight: `1px solid ${theme.palette.common.black}`,
                '&:last-child': {
                    borderRight: 'none'
                }
            }
        }
    }
}));