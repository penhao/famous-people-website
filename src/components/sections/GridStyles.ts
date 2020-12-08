import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";

export const useLineGridStyles = makeStyles((theme: Theme) => ({
    container: {
        '& > .MuiGrid-item': {
            borderBottom: `3px solid ${theme.palette.primary.main}`
        }
    },
    item: {
        borderBottom: `1px solid ${theme.palette.common.black}`,
    },
    drawXsUp: {
        '& > .MuiGrid-item': {
            position: 'relative',
            borderRight: `1px solid ${theme.palette.common.black}`,
            '&:last-child': {
                borderRight: 'none'
            }
        }
    },
    drawSmUp: {
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
    drawMdUp: {
        [theme.breakpoints.up('md')]: {
            '& > .MuiGrid-item': {
                position: 'relative',
                borderRight: `1px solid ${theme.palette.common.black}`,
                '&:last-child': {
                    borderRight: 'none'
                }
            }
        }
    },

}));