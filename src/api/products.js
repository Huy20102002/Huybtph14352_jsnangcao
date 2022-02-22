import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const addProduct = (post) => {
    const url = `/products`;
    return instance.post(url, post);
};
export const addProductDt = (post) => {
    const url = `/product_details`;
    return instance.post(url, post);
};
export const removeProduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const UpdateProduct = (id, post) => {
    const url = `/products/${id}`;

    return instance.put(url, post);
};
export const search = (post) => {
    const url = `/products/?q=${post}`;
    return instance.get(url);
};