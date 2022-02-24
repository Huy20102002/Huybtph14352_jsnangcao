import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const getAll = () => {
    const url = "/posts";

    return instance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/posts`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};
export const Update = (id, post) => {
    const url = `/posts/${id}`;
    return instance.put(url, post);
};
export const paginationposts = (offset, limit) => {
    const url = `/posts/?_page=${offset}&_limit=${limit}`;
    return instance.get(url);
};