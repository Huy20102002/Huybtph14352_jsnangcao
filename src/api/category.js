import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const getAllCate = () => {
    const url = "/category";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
};
export const addCate = (post) => {
    const url = `/category`;
    return instance.post(url, post);
};
export const removeCate = (id) => {
    const url = `/category/${id}`;
    return instance.delete(url);
};
export const UpdateCate = (id, post) => {
    const url = `/category/${id}`;
    return instance.put(url, post);
};