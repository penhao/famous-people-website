import {AxiosError} from "axios";

export type ErrorResponse = {
    error: string
};
const CatchAxiosError = (error: AxiosError): ErrorResponse => {
    let message = "Something happened in setting up the request that triggered an Error";
    if (error.response) {
        message = error.response.data.message;
    } else if (error.request) {
        message = "The request was made, but no response was received";
    }
    return {
        error: message
    };
};
export default CatchAxiosError;