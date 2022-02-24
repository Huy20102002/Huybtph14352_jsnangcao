import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const signup = (users) => {
    const url = `/signup`;
    return instance.post(url, users);
};
export const signin = (users) => {
    const url = "/signin";
    return instance.post(url, users);
};