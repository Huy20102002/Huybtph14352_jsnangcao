import NavbarAdmin from "../../../components/NavbarAdmin";
import { addCate } from "../../../api/category";
import { reRender } from "../../../utils";
import AdminCate from "./index";

const AddCate = {
    render() {
        return /* html */ `
        ${NavbarAdmin.render()}
        <header class="bg-white shadow ">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    Trang Thêm Danh Mục
                </h1>
                <span class="rounded bg-gray-900 py-1 px-2">
              <a class="text-white text-xs" href= "/admin/category">Quay Lại</a>
             </span>
            </div>
      </header>
      <main class="container m-auto w-full">
    <div class="md:grid md:grid-cols-3 md:gap-6 pt-5">
        <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="" method="POST" id="form-add-cate" enctype="multipart/form-data">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-3 sm:col-span-2">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">
                               Tên Danh Mục
                               </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="company-website" id="name-post" class="focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none h-8 flex-1 block w-full rounded-none  rounded-r-md sm:text-sm border-gray-300">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Lưu
                </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
</main>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();
        const formAddCate = document.querySelector("#form-add-cate");
        formAddCate.addEventListener("submit", (e) => {
            e.preventDefault();
            addCate({
                name: document.querySelector("#name-post").value,
            }).then(() => {
                reRender(AdminCate, "#app");
            });
        });
    },
};
export default AddCate;