import swal from "sweetalert";
import { data } from "jquery";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { getPayment, getPaymentid, updatePayment } from "../../../api/payment";
import { getorder, getidorder } from "../../../api/order";
import { reRender } from "../../../utils";

const Order = {
        async render() {
            const { data } = await getPayment();
            const data_order = await getorder();
            return /* html */ `
        ${NavbarAdmin.render()}
        <div class="md:px-32 py-8 w-full">
        <p class="text-2xl m-2 pb-3">Quản lý đơn hàng</p>
          <div class="shadow overflow-hidden rounded border-b border-gray-200">
            <table class="min-w-full bg-white">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Khách Hàng</th>
                  <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Số điện thoại</th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Địa chỉ</th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Ngày đặt hàng</th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Tình Trạng</th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Chức năng</td>
                </tr>
              </thead>
            <tbody class="text-gray-700">
            ${data.map((item, index) => /* html */ `
            <tr>
            <td class="text-left py-3 px-4">${item.Username}</td>
            <td class="text-left py-3 px-4">${item.Phone}</td>
            <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">${item.AddRess}</a></td>
            <td class="text-left py-3 px-4">${item.time_order}</td>
            <td class="text-left py-3 px-4">
            <div class="col-span-6 sm:col-span-4">
           <select id="status${index + 1}" class="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
           <option value="1" ${+item.Status === 1 ? `selected` : ``}>Đang Xử Lí</option>
           <option value="2" ${+item.Status === 2 ? `selected` : ``}>Đã xác nhận</option>
           <option value="3" ${+item.Status === 3 ? `selected` : ``}>Đang giao hàng</option>
           <option value="4" ${+item.Status === 4 ? `selected` : ``}>Đã nhận hàng</option>
           <option value="5" ${+item.Status === 5 ? `selected` : ``}>Đơn hàng bị hủy</option>
           </select>
         <button data-id="${item.id}" type="submit" class="btn-confirm p-1 bg-blue-500 text-gray-100 text-xs rounded-lg  border-blue-300">Xác nhận</button>
          </div>
            </td>
            <td class="text-left py-3 px-4">
            <button data-id="${item.id}" class="btn-delete p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg  border-blue-300">Xóa</button>
            <button data-id="${item.id}" id="open${index + 1}" class=" btn-details p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg  border-blue-300">Chi Tiêt</button>
            </td>
          </tr>
            `)
        .join(``)}
            </tbody>
            </table>
          </div>
        </div>
        <!-- component -->

        <div id="modal" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full md:px-32 px-4">
            <div class="relative top-40 mx-auto shadow-lg rounded-md bg-white">
                <!-- Modal header -->
                <div class="flex justify-between items-center bg-gray-900 text-white text-xl rounded-t-md px-4 py-2">
                    <h3>Chi tiết đơn hàng</h3>
                    <button id="closex">x</button>
                </div>
                <!-- Modal body -->
                <div class=" p-4">
                <div class="mb-8">
                <label class="text-xl text-gray-600">Họ tên</label>
                <input type="text"   class="border-2 border-gray-300 p-2 w-full"  id="username" placeholder="text.....">
               </div>
               <div class="mb-4">
               <label class="text-xl text-gray-600">Số điện thoại</label>
               <input type="text"  value="" class="border-2 border-gray-300 p-2 w-full"id="numberphone" placeholder="phone.....">
                </div>
                <div class="mb-4">
                    <label class="text-xl text-gray-600">Ngày đặt hàng<span class="text-red-500">*</span></label>
                    <input type="text"  class="border-2 border-gray-300 p-2 w-full"  id="date_order" value="" required>
                </div>
                <div class="mb-4">
                    <label class="text-xl text-gray-600">Đơn hàng</label>
                    <div id="orderlist"></div>
                </div>
          
                <div class="mb-4">
                <label class="text-xl text-gray-600">Tổng tiền</label>
                <input type="text"  class="border-2 border-gray-300 p-2 w-full"  id="price" placeholder="text.....">
                </div>     
             
                <div class="mb-8">
                    <label class="text-xl text-gray-600">Địa chỉ<span class="text-red-500">*</span></label>
                    <br>
                    <textarea id="address" cols="120" rows="5" class="border-2 border-gray-500"></textarea>
                </div>
             
                </div>
                <!-- Modal footer -->
                <div class="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" id="close">Close</button>
                </div>
            </div>
        </div>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();

        const DeleteElement = document.querySelectorAll(".btn-delete");
        const DetailsElement = document.querySelectorAll(".btn-details");
        const confirmElement = document.querySelectorAll(".btn-confirm");
        DetailsElement.forEach((datadt, index) => {
            datadt.addEventListener("click", async () => {
                const open = document.querySelector(`#open${index + 1}`);
                const close = document.querySelector("#close");
                const closex = document.querySelector("#closex");

                open.addEventListener("click", () => {
                    const modal = document.querySelector("#modal");
                    modal.classList.remove("hidden");
                });
                close.addEventListener("click", () => {
                    const modal = document.querySelector("#modal");
                    modal.classList.add("hidden");
                });
                closex.addEventListener("click", () => {
                    const modal = document.querySelector("#modal");
                    modal.classList.add("hidden");
                });
                const { id } = datadt.dataset;
                const { data } = await getorder();
                const datapayment = await getPaymentid(id);
                const orders = data.filter((orderdt) => orderdt.id_Payment === +id);
                document.querySelector("#username").value = datapayment.data.Username;
                document.querySelector("#numberphone").value = datapayment.data.Phone;
                document.querySelector("#address").value = datapayment.data.AddRess;

                document.querySelector("#date_order").value = datapayment.data.time_order;
                document.querySelector("#orderlist").innerHTML = `${orders.map((item) => `
                ${item.name} x ${item.quantity}
                `)}`;
                document.querySelector("#quantity");
                document.querySelector("#price").value = datapayment.data.total;
            });
        });
        confirmElement.forEach((btn, index) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", async () => {
                const datapayment = await getPaymentid(id);
                updatePayment(id, {
                    id_User: datapayment.data.id_User,
                    Username: datapayment.data.Username,
                    Phone: datapayment.data.Phone,
                    Email: datapayment.data.Email,
                    AddRess: datapayment.data.AddRess,
                    Massage: datapayment.data.Massage,
                    total: datapayment.data.total,
                    time_order: datapayment.data.time_order,
                    Status: document.querySelector(`#status${index + 1}`).value,
                }).then(() => {
                    reRender(Order, "#app");
                });
            });
        });
        DeleteElement.forEach((data) => {
            data.addEventListener("click", () => {
                const { id } = data.dataset;
            });
        });
    },
};
export default Order;