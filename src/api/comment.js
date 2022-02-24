import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const AddComment = (post) => {
    const url = "/comments";
    return instance.post(url, post);
};
export const deleteComment = (id) => {
    const url = `/comments/${id}`;
    return instance.delete(url);
};
export const Allcomment = () => {
    const url = "/comments?_expand=products";
    return instance.get(url);
};