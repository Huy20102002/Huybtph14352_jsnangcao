// eslint-disable-next-line no-unused-vars
import toastr from "toastr";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getLocalStorage, reRender } from "../../utils";
import { AddPayment } from "../../api/payment";

// eslint-disable-next-line no-unused-vars
import {
    increaseQuantityFromCart,
    decreaseQuantityFromCart,
    removeItemFromCart,
    getTotalPriceproduct,
    shippingCart,

} from "../../utils/cart";
import "toastr/build/toastr.min.css";
import { AddOrder } from "../../api/order";

const CartDetails = {
        async render() {
            const data = await getLocalStorage("cart");
            return /* html */ `
        <!-- component -->
          <header>${Header.render()}</header>
          <main>
          <!-- component -->
            <div class="flex justify-center my-6">
            <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <form id="form-info-payment">
            
            <div class="flex-1">
                <table class="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                    <tr class="h-12 uppercase">
                    <th class="hidden md:table-cell"></th>
                    <th class="text-left">Sản Phẩm</th>
                    <th class="lg:text-right text-left pl-5 lg:pl-0">
                        <span class="lg:hidden" title="Quantity">Qtd</span>
                        <span class="hidden lg:inline">Số Lượng</span>
                    </th>
                    <th class="hidden text-right md:table-cell">Đơn giá</th>
                    <th class="text-right">Tông Tiền</th>
                    </tr>
                </thead>
                <tbody>
                  ${data.map((item) => /* html */ `
                              <tr>
                              <td class="hidden pb-4 md:table-cell">
                                  <a href="#">
                                  <img src="${item.image}" class="w-20 rounded" alt="Thumbnail">
                                  </a>
                              </td>
                              <td>
                                  <p class="mb-2 md:ml-4">${item.name}</p>
                                      <button type="submit" data-id="${item.id}" class="btn btn-remove" class="text-gray-700 md:ml-4">
                                      <small>(Xóa sản phẩm)</small>
                                      </button>
                                  </a>
                              </td>
                              <td class="justify-center md:justify-end flex md:flex mt-6">
                              <button data-id="${item.id}" class="btn bg-stone-900 rounded text-white p-1 mx-2 btn btn-decrease">Giảm</button>
                                  <div class="w-20 h-10">
                                  <div class="relative flex flex-row w-full h-8">
                                  <input type="number" value="${item.quantity}" min="0" id="cart_quantity" class=" w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                  </div>
                                  </div>
                              <button data-id="${item.id}" class="btn bg-stone-900 rounded text-white p-1 mx-2 btn btn-increase">Tăng</button>

                              </td>
                              <td class="hidden text-right md:table-cell">
                                  <span class="text-sm lg:text-base font-medium">
                                  ${item.price}
                                  </span>
                              </td>
                              <td class="text-right">
                                  <span id="totals" class="text-sm lg:text-base font-medium">
                                  ${item.price * item.quantity}    
                                  </span>
                              </td>
                              </tr> 
                              `).join("")}  
                </tbody>
                </table>
                <hr class="pb-6 mt-6">
                <div class="my-4 mt-6 -mx-2 lg:flex">
                <div class="lg:px-2 lg:w-1/2">  
                  <div class="p-4  bg-gray-100 rounded-full">
                  <h1 class="ml-2 font-bold uppercase">Thông tin thanh toán</h1>
                  </div>
                  <div class ="p-4">
                  <h2 class ="ml-2 font-bold">Họ Tên: </h2>
                  <input type = "text" id="username" class ="border p-1 mt-3 rounded  w-full">
                  </div>
                  <div class ="p-4">
                  <h2 class ="ml-2 font-bold">Số Điện Thoại</h2>
                  <input type = "text" id="number_phone" class ="border p-1 mt-3 rounded  w-full">
                  </div>
                  <div class ="p-4">
                  <h2 class ="ml-2 font-bold">Email: </h2>
                  <input type = "text" id="email" class ="border p-1 mt-3 rounded  w-full">
                  </div>
                  <div class ="p-4">
                  <h2 class ="ml-2 font-bold">Địa chỉ</h2>
                  <textarea id="address" class="w-full h-24 p-2 bg-gray-100 rounded mt-2"></textarea>

                  </div>
                  <div class="p-4">
                  <p class="mb-4 italic">Nếu bạn có một số thông tin cho người bán, bạn có thể để lại chúng trong khung bên dưới</p>
                  <textarea id="massage" class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
                  </div>
                </div>
                <div class="lg:px-2 lg:w-1/2">
                    <div class="p-4 bg-gray-100 rounded-full">
                    <h1 class="ml-2 font-bold uppercase">Chi Tiết Đơn Hàng</h1>
                    </div>
                    <div class="p-4">
                    <p class="mb-6 italic">Chi phí vận chuyển và chi phí cộng thêm được tính dựa trên các giá trị bạn đã nhập</p>
                        <div class="flex justify-between border-b">
                        <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                           Tổng Tiền Sản Phẩm
                        </div>
                        <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                           ${getTotalPriceproduct()}
                        </div>
                        </div>
                      
                        <div class="flex justify-between pt-4 border-b">
                            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                            Phí Ship
                            </div>
                            <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            ${shippingCart()}
                            </div>
                        </div>
                       
                        <div class="flex justify-between pt-4 border-b">
                            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                           Tổng Tiền
                            </div>
                            <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            ${getTotalPriceproduct() + shippingCart()}
                            <input type="hidden" value="${getTotalPriceproduct() + shippingCart()}" id ="total">
                            </div>
                        </div>
                        <button type="submit" class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                            <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                            <span class="ml-2 mt-5px">Thanh Toán</span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </form>

            </div>
            </div>
          </main>
          <footer>${Footer.render()}</footer>

        `;
    },
    async afterRender() {
        Header.afterRender();
        const formPayMent = document.querySelector("#form-info-payment");
        const today = new Date();
        const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const dateTime = `${date} ${time}`;
        const ButtonElement = document.querySelectorAll(".btn");
        const Cart = await getLocalStorage("cart");
        const User = await getLocalStorage("user");
        formPayMent.addEventListener("submit", async (e) => {
            e.preventDefault();
            const { data } = await AddPayment({
                id_User: User.id,
                Username: document.querySelector("#username").value,
                Phone: document.querySelector("#number_phone").value,
                Email: document.querySelector("#email").value,
                AddRess: document.querySelector("#address").value,
                Massage: document.querySelector("#massage").value,
                total: document.querySelector("#total").value,
                time_order: dateTime,
                Status: 1,
            });
            Cart.forEach((item) => {
                AddOrder({
                    id_Payment: data.id,
                    id_User: User.id,
                    id_Product: item.id,
                    image: item.image,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price,
                });
            });
            window.localStorage.removeItem("cart");
        });
        ButtonElement.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantityFromCart(id, () => {
                        reRender(CartDetails, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantityFromCart(id, () => {
                        reRender(CartDetails, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-remove")) {
                    removeItemFromCart(id, () => {
                        reRender(CartDetails, "#app");
                    });
                }
            });
        });
    },
};
export default CartDetails;