import React from 'react';
import Layout from "../components/Layout";
import HomeBanner from "../components/sections/home/HomeBanner";
import HomeCTA from "../components/sections/home/HomeCTA";
import HomeLocation from "../components/sections/home/HomeLocation";

const Index = () => {
    return (
        <Layout>
            <HomeBanner/>
            <HomeCTA/>
            <HomeLocation/>
        </Layout>
    );
};
export default Index;
