import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import HomeBanner from "../components/sections/home/HomeBanner";
import HomeCTA from "../components/sections/home/HomeCTA";
import HomeLocation from "../components/sections/home/HomeLocation";
import {fetchDocumentData} from "../api/ApiService";

const Index = () => {
    const getData = async () => {
        await fetchDocumentData('吳新榮', 1, 20);
    };
    useEffect(() => {
        const fetchData = getData().then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <Layout>
            <HomeBanner/>
            <HomeCTA/>
            <HomeLocation/>
        </Layout>
    );
};
export default Index;
