import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import CategoryHead from "../../components/sections/category/CategoryHead";
import CategoryFilter from "../../components/sections/category/CategoryFilter";
import useCategoryFilterList from "../../components/sections/category/useCategoryFilterList";
import {useRouter} from "next/router";
import useGender, {genderType} from "../../components/sections/category/useGender";
import CategoryList from "../../components/sections/category/CategoryList";
import {fetchCategoryData, fetchSearchData} from "../../api/ApiService";
import {GetServerSidePropsContext} from "next";
import SearchHead from "../../components/sections/search/SearchHead";

const SearchPage = ({fetchCategory}) => {
    const router = useRouter();
    const categoryId = (router && router.query.slug) ? Number(router.query.slug[0]) : -1;

    const [categoryFilterList, getCategoryById] = useCategoryFilterList();
    const [genderList, changeGender] = useGender();

    const [startCount, setStartCount] = useState(1);
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMore, setIsMore] = useState(false);

    const handleGender = (gender: genderType) => changeGender(gender);
    const handleMore = () => {
        setIsLoading(true);
        getPostData().then((response) => {
            if (response.status) {
                setStartCount(startCount + 1);
                setPostList([...postList, ...response.data]);
                setIsMore(startCount + 1 < response.total_page);
            }
        });
        setIsLoading(false);
    };
    const getPostData = async () => {
        return await fetchCategoryData(categoryId, startCount + 1);
    };
    const getFilterPostData = () => {
        return postList.filter((data: any) => {
            return genderList.includes(data.gender);
        });
    };
    useEffect(() => {
        if (fetchCategory.status) {
            setStartCount(1);
            setIsLoading(false);
            setPostList(fetchCategory.data);
            setIsMore(1 < fetchCategory.total_page);
        }
    }, [router, fetchCategory]);
    return (
        <Layout>
            <SearchHead keyword={router.query.slug[0]} total={getFilterPostData().length}/>
            <CategoryFilter categoryFilterList={categoryFilterList}
                            genderList={genderList}
                            genderChangeHandler={handleGender}/>
            <CategoryList postData={getFilterPostData()} isMore={isMore} moreHandler={handleMore}/>
        </Layout>
    );
};
export const getServerSideProps = async ({query, res}: GetServerSidePropsContext) => {
    const fetchCategory = await fetchSearchData(query.slug[0], 1);
    if (fetchCategory?.error) {
        const redirectUrl = `/404`;
        res.setHeader("location", redirectUrl);
        res.statusCode = 302;
        res.end();
    }
    return {
        props: {
            fetchCategory
        }
    }
};
export default SearchPage;