import React from 'react';
import Head from "next/head";
import { domain } from "../../public/config.json";

interface Props {
    title?: string;
}

const PageHead = ({ title = '臺南名人堂特展 | 臺南歷史名人資料庫' }: Props) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta property="og:site_name" content="CloudMile" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${domain}/images/share.jpg`} />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />
            <meta property="og:title" content={title} />
            <meta property="og:description"
                content={'這是一場跨越時空的對話，200多位臺南名人在此齊聚，文學家、宗教家、政治家、實業家、教育家、藝術家、及來自異鄉的奉獻者，歷史記憶光影流轉，見證屬於臺南的理性與感性。'} />
            <meta property="og:url" content={`${domain}`} />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
                rel="stylesheet" />
            <title>{title}</title>
        </Head>
    );
};
export default PageHead;
