export const hasEmptyValue = (formData) => {
    return Object.values(formData).some(value => Boolean(value) === false);
};
