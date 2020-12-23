import axios, {AxiosRequestConfig} from "axios";
import CatchAxiosError from "./Error";

const apiDomain = 'https://tafame.5781000.co';
/*
*  '1'=>'藝術類',
    '2'=>'文學類',
    '3'=>'學術教育類',
    '4'=>'政治類',
    '5'=>'醫療類',
    '6'=>'經濟類',
    '7'=>'宗教類',
    '8'=>'技術類'
    *
    * https://tafame.5781000.co/api

cat=分類
keyword=關鍵字
gender=男/女
page=頁次
* */
const baseConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const get = async (url: string, config: AxiosRequestConfig) => {
    const requestConfig = {
        ...baseConfig,
        ...config
    };
    return await axios.get(url, requestConfig).catch(CatchAxiosError)
};
export const fetchDocumentData = async (keyword: string, start: number, limit: number = 10) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            identify: 'TN',
            func: 'findBibliographicDetailByKw',
            start: start,
            limit: limit,
            sb: 'relevance',
            ob: 'asc',
            kw: keyword
        }
    };
    //http://163.26.71.106:8080/toread/API?identify=TN&func=findBibliographicDetailByKw&start=1&limit=20&sb=relevance&ob=asc&keyword=%2525E5%252590%2525B3%2525E6%252596%2525B0%2525E6%2525A6%2525AE
    // http://163.26.71.106:8080/toread/API?identify=TN&func=findBibliographicDetailByKw&start=0&limit=5&sb=relevance&ob=asc&kw=%E5%90%B3%E6%96%B0%E6%A6%AE
    const response: any = await get(`http://163.26.71.106:8080/toread/API`, requestConfig);
    return response;
};
export const fetchCategoryData = async (categoryId: number, pageId: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            cat: categoryId,
            page: pageId
        }
    };
    const response: any = await get(`${apiDomain}/api/`, requestConfig);
    return response?.status ? response.data : response;
};
export const fetchDetailData = async (id: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            userid: id
        }
    };
    const response: any = await get(`${apiDomain}/api/user`, requestConfig);
    return response?.status ? response.data : response;
};
export const fetchSearchData = async (keyword: string, page: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            keyword: keyword,
            page: page
        }
    };
    const response: any = await get(`${apiDomain}/api/`, requestConfig);
    return response?.status ? response.data : response;
};