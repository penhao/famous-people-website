import React from 'react';
import Head from "next/head";
import {domain} from "../../public/config.json";

interface Props {
    title?: string;
}

const PageHead = ({title = '臺南名人堂特展'}: Props) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <meta property="og:site_name" content="CloudMile"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content={`${domain}/images/share.jpg`}/>
            <meta property="og:image:width" content="600"/>
            <meta property="og:image:height" content="315"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description"
                  content={'這是⼀個跨越時空的平台，兩百多位名⼈在此⿑聚⼀堂，以理性和感性的面向；透過藝術、文學、政治、醫療、經濟、宗教、技術與學術教育交織出臺南記憶，編織出當代臺南的氛圍與樣貌，期許你能透過台南名人搜尋平台，理解一下每一位名人的生平貢獻。'}/>
            <meta property="og:url" content={`${domain}`}/>
            <title>{title}</title>
        </Head>
    );
};
export default PageHead;
