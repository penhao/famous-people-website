export const isValueEmpty = (value: string | number): boolean => {
    return (!value || value.toString().length === 0 || !value.toString().trim());
};