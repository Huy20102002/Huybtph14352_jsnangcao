import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const AddPayment = (post) => {
    const url = "/payment";
    return instance.post(url, post);
};
export const getPayment = (post) => {
    const url = "/payment";
    return instance.get(url);
};
export const getPaymentid = (id) => {
    const url = `/payment/${id}`;
    return instance.get(url);
};
export const deletepayment = (id) => {
    const url = `/payment/${id}`;
    return instance.delete(url);
};
export const updatePayment = (id, post) => {
    const url = `/payment/${id}`;
    return instance.put(url, post);
};
export const deletePayandorder = (id) => {
    const url = `/payment/${id}?_embed=Order`;
    return instance.delete(url);
};