import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const AddOrder = (post) => {
    const url = "/order";
    return instance.post(url, post);
};
export const getorder = () => {
    const url = "/order";
    return instance.get(url);
};
export const getidorder = (id) => {
    const url = `/order/${id}`;
    return instance.get(url);
};
export const deleteorder = (id) => {
    const url = `/order/${id}`;
    return instance.delete(url);
};