import toastr from "toastr";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { getAll, removeProduct } from "../../../api/products";
import { reRender } from "../../../utils";
import { getAllCate } from "../../../api/category";
import "toastr/build/toastr.min.css";

const AdminProduct = {
        async render() {
            const allProduct = await getAll();
            const allCate = await getAllCate();

            return /* html */ `
         ${await NavbarAdmin.render()}
         <header class="bg-white shadow ">
         <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
           <h1 class="text-3xl font-bold text-gray-900">
             Trang Sản Phẩm
           </h1>
        <span class="rounded bg-gray-900 py-1 px-2">
        <a class="text-white text-xs " href= "/admin/products/add">Thêm Mới</a>
        </span>
         </div>
       </header>
       <main class = "container m-auto">
                <div class="flex pt-12  justify-center">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 ">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tên Sản Phẩm
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Loại Hàng
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Giá Tiền
                            </th>
                       
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hình ảnh
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Chức năng
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                            </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    ${allProduct.data.map((item) =>/* html */ `
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                       
                        <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            ${item.name}
                        </div>
                        <div class="text-sm text-gray-500">              
                        </div>
                        </div>
                    </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <select  name="" id="cate_id"  class="appearance-none" disabled="disabled">
                    ${allCate.data.map((itemCate) =>/* html */ `
                      <option ${itemCate.id === +item.id_Cate ? "selected" : ""}>${itemCate.name}</option>
                    `).join("")}
                     </select>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${item.price}</div>
                    </td>
                
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="text-sm text-gray-900">
                    <img width = "200" src="${item.image}" alt="">
                    </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/admin/products/${item.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit /</a>
                    <button data-id="${item.id}" class=" btn text-indigo-600 hover:text-indigo-900">Delete</button>
                    </td>
                 </tr>
                    `).join("")}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
            </div>
       </main>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa sản phẩm này");
                if (confirm) {
                    removeProduct(id).then(() => {
                        toastr.error("Xóa sản phẩm thành công");
                        reRender(AdminProduct, "#app");
                    });
                }
            });
        });
    },
};
export default AdminProduct;