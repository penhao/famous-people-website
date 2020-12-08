import {useEffect, useState} from "react";


export interface ICategory {
    name: '藝術' | '文學' | '學術教育' | '政治' | '醫療' | '經濟' | '宗教' | '技術'
    label: string
}

const useCategory = (initCategoryName?: string) => {
    const [categoryList, setCategoryList] = useState<ICategory[] | null>(null);
    const [category, setCategory] = useState<ICategory | null | undefined>({name: '藝術', label: ''});

    const getCategoryByName = (name: string) => {
        return (categoryList && categoryList.length)
            ?
            categoryList.find((item: ICategory) => {
                return item.name === name;
            })
            :
            null;
    };
    const changeCategory = (name: string) => {
        const currentCategory = getCategoryByName(name);
        setCategory(currentCategory);
    };
    useEffect(() => {
        /*if (initCategoryName) {
            changeCategory(initCategoryName);
        }*/
        setCategoryList(
            [
                {name: '藝術', label: ''},
                {name: '文學', label: ''},
                {name: '學術教育', label: ''},
                {name: '政治', label: ''},
                {name: '醫療', label: ''},
                {name: '經濟', label: ''},
                {name: '宗教', label: ''},
                {name: '技術', label: ''}
            ]
        );
    }, []);

    return [category, categoryList, changeCategory] as const;
};
export default useCategory;