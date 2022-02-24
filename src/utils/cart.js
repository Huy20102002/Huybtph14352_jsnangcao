/* eslint-disable no-const-assign */
import toastr from "toastr";
import { setLocalStorage, getLocalStorage } from "./index";
import "toastr/build/toastr.min.css";

// Cart
let cart = [];

let shipping;
if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
}

export const addTocart = (newProduct, next) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);

    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += +newProduct.quantity;
    }

    setLocalStorage("cart", cart);
    next();
};
export const increaseQuantityFromCart = (id, next) => {
    // eslint-disable-next-line no-plusplus
    const increaseProduct = cart.find((item) => item.id === +id);
    // eslint-disable-next-line no-plusplus
    increaseProduct.quantity++;
    // eslint-disable-next-line no-plusplus
    setLocalStorage("cart", cart);
    next();
};
export const decreaseQuantityFromCart = (id, next) => {
    const currentProduct = cart.find((item) => item.id === +id);
    // eslint-disable-next-line no-plusplus
    if (currentProduct.quantity > 0) {
        currentProduct.quantity--;
    }
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có chắc muốn xóa không");
        if (confirm) {
            // eslint-disable-next-line no-const-assign
            cart = cart.filter((item) => item.id !== +id);
        }
    }
    setLocalStorage("cart", cart);
    next();
};
export const removeItemFromCart = (id, next) => {
    // eslint-disable-next-line no-use-before-define
    const confirm = window.confirm("Bạn có chắc muốn xóa không ?");
    if (confirm) {
        cart = cart.filter((item) => item.id !== +id);
        toastr.error("Xóa thành công");
    }
    setLocalStorage("cart", cart);
    next();
};
export const getTotalPriceproduct = () => {
    const datacart = getLocalStorage("cart");
    let total = 0;
    let sum = 0;
    datacart.forEach((element) => {
        total = element.quantity * element.price;
        sum += total;
    });
    return sum;
};
export const shippingCart = () => {
    shipping = 30000;
    return shipping;
};
export const getCountCart = () => {
    let countcart = 0;
    const datacart = getLocalStorage("cart");
    countcart = datacart;
    return countcart;
};