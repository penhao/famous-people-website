import React, {ChangeEvent, FormEvent, useState} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        '& .MuiGrid-container': {
            '& .MuiGrid-item': {
                '&:nth-child(1)': {
                    flex: '1 1 auto'
                },
                '&:nth-child(2)': {
                    flex: '0 0 48px'
                }
            }
        }
    },
    search: {
        height: '48px',
        paddingLeft: '20px',
        paddingRight: '20px',
        '& .MuiInput-root': {
            width: '100%',
            height: '100%'
        }
    },
    submit: {
        width: '48px',
        minWidth: 'auto',
        height: '48px',
        padding: 0,
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.primary.main,
        borderRadius: 0,
        '& svg': {
            width: '20px'
        }
    }
}));
const SearchForm = () => {
    const classes = useStyles();
    const router = useRouter();
    const [keyword, setKetWord] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKetWord(event.target.value);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search/${keyword}`);
    };
    return (
        <form action={"#"} autoComplete={'off'} onSubmit={handleSubmit} className={classes.form}>

            <Grid container alignItems={"center"}>
                <Grid item>
                    <TextField type={"search"}
                               placeholder={"名人搜尋"}
                               required
                               fullWidth
                               value={keyword}
                               onChange={handleChange}
                               InputProps={{disableUnderline: true}}
                               className={classes.search}/>
                </Grid>
                <Grid item>
                    <Button type={'submit'} className={classes.submit}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
export default SearchForm;
