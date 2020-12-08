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
                imgUrl: ''
            },
            {
                id: 2,
                title: '文學',
                caption: 'LITERATURE',
                imgUrl: ''
            },
            {
                id: 3,
                title: '學術教育',
                caption: 'EDUCATION',
                imgUrl: ''
            },
            {
                id: 4,
                title: '政治',
                caption: 'POLITICS',
                imgUrl: ''
            },
            {
                id: 5,
                title: '醫療',
                caption: 'MEDICAL',
                imgUrl: ''
            },
            {
                id: 6,
                title: '經濟',
                caption: 'ECONOMIC',
                imgUrl: ''
            },
            {
                id: 7,
                title: '宗教',
                caption: 'RELIGIONS',
                imgUrl: ''
            },
            {
                id: 8,
                title: '技術',
                caption: 'TECHNOLOGY',
                imgUrl: ''
            }
        ]);
    }, []);

    return [categoryList, getCategoryById] as const;
};
export default useCategoryFilterList;


