import axios from "axios";
import { getAllCate, removeCate } from "../../../api/category";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { reRender } from "../../../utils";

const AdminCate = {
        async render() {
            const { data } = await getAllCate();
            return /* html */ `
            ${await NavbarAdmin.render()}
            <header class="bg-white shadow ">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
              <h1 class="text-3xl font-bold text-gray-900">
                Trang Danh Mục
              </h1>
           <span class="rounded bg-gray-900 py-1 px-2">
           <a class="text-white text-xs" href= "/admin/category/add">Thêm Mới</a>
           </span>
            </div>
          </header> 
          <main class="container m-auto">
          <div class="flex pt-12  justify-center">
              <div class="my-2 sm:-mx-6 lg:-mx-8 ">
                  <div class="py-2  align-middle inline-block  sm:px-6 lg:px-8">
                      <div class="shadow border-b  border-gray-200 ">
                          <table class="w-100 divide-y divide-gray-200">
                              <thead class="bg-gray-50">
                                  <tr>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          STT
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Tên Danh Mục
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Chức Năng
                                      </th>
                                  </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200">
                                  ${data.map((item, index) =>/* html */ `
                                  <tr>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          ${index + 1}
                                      </td>
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
                                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                          <a href="/admin/category/${item.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit /</a>
                                          <button data-id="${item.id}" class=" btnCate text-indigo-600 hover:text-indigo-900">Delete</button>
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

        const Buttons = document.querySelectorAll(".btnCate");
        Buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa danh mục này ?");
                if (confirm) {
                    removeCate(id).then(() => {
                        alert("Đã Xóa thành công");
                        reRender(AdminCate, "#app");
                    });
                }
            });
        });
    },
};
export default AdminCate;