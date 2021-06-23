import React, { useEffect } from 'react';
import Layout from "../components/Layout";
import HomeBanner from "../components/sections/home/HomeBanner";
import HomeCTA from "../components/sections/home/HomeCTA";
import HomeLocation from "../components/sections/home/HomeLocation";
import { fetchDocumentData } from "../api/ApiService"
const Index = () => {
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchDocumentData("葉石濤", 1, 10);
            console.log(result);
        }
        fetchData();
    }, []);
    return (
        <Layout>
            <HomeBanner />
            <HomeCTA />
            <HomeLocation />
        </Layout>
    );
};
export default Index;
