import toastr from "toastr";
import { getAll, remove } from "../../../api/posts";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { reRender } from "../../../utils";
import "toastr/build/toastr.min.css";
// import DataProducts from "../../../data/DataProduct";

const Adminnews = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
        ${await NavbarAdmin.render()}
        <header class="bg-white shadow ">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Trang tin tức
          </h1>
       <span class="rounded bg-gray-900 py-1 px-2">
       <a class="text-white text-xs " href= "/admin/news/add">Thêm Mới</a>
       </span>
        </div>
      </header>
        <main class= "container m-auto">
        <div class="flex pt-12  justify-center">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 ">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STT
                  </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tên Tin Tức
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nội Dung
                    </th>
                  
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Người đăng
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
          ${data
        .map(
            (item, index) => /* html */ `
          <tr>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">${index + 1}</div>
        </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img class="h-10 w-10 rounded-full" src="${item.image}" alt="">
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                 ${item.title}
                </div>
                <div class="text-sm text-gray-500">              
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">${item.content}</div>
          </td>
        
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="/admin/news/${item.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit /</a>
            <button data-id="${item.id}" class=" btn text-indigo-600 hover:text-indigo-900">Delete</button>
          </td>
        </tr>
          `,
        )
        .join("")}
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
        const Buttons = document.querySelectorAll(".btn");
        Buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa tin tức này");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Xóa Thành Công");
                        reRender(Adminnews, "#app");
                    });
                }
            });
        });
    },
};
export default Adminnews;