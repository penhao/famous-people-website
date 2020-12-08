import {useEffect, useState} from "react";

export type genderType = '男' | '女';
const useGender = () => {
    const [genders, setGenders] = useState<genderType[]>([]);
    const changeGender = (gender: genderType) => {
        setGenders((genders.includes(gender))
            ? genders.filter((item) => {
                return item !== gender
            })
            : [gender, ...genders]
        );
    };
    useEffect(() => {
        setGenders(['男', '女'])
    }, []);
    return [genders, changeGender] as const;
};
export default useGender;