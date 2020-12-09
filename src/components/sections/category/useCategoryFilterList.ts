import {useEffect, useState} from "react";

const useCategoryFilterList = () => {
    const [categoryList, setCategoryList] = useState<any[]>([]);
    const getCategoryById = (id: number) => {
        return categoryList.find((category: any) => {
            return category.id === id;
        });
    };
    useEffect(() => {
        setCategoryList([
            {
                id: 1,
                title: '藝術',
                caption: 'ART',
                imgUrl: '/images/cover-art.png'
            },
            {
                id: 2,
                title: '文學',
                caption: 'LITERATURE',
                imgUrl: '/images/cover-literature.png'
            },
            {
                id: 3,
                title: '學術教育',
                caption: 'EDUCATION',
                imgUrl: '/images/cover-education.png'
            },
            {
                id: 4,
                title: '政治',
                caption: 'POLITICS',
                imgUrl: '/images/cover-politics.png'
            },
            {
                id: 5,
                title: '醫療',
                caption: 'MEDICAL',
                imgUrl: '/images/cover-medical.png'
            },
            {
                id: 6,
                title: '經濟',
                caption: 'ECONOMIC',
                imgUrl: '/images/cover-economic.png'
            },
            {
                id: 7,
                title: '宗教',
                caption: 'RELIGIONS',
                imgUrl: '/images/cover-religions.png'
            },
            {
                id: 8,
                title: '技術',
                caption: 'TECHNOLOGY',
                imgUrl: '/images/cover-technology.png'
            }
        ]);
    }, []);

    return [categoryList, getCategoryById] as const;
};
export default useCategoryFilterList;


