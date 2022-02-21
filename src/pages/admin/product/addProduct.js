import axios from "axios";
import swal from "sweetalert";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { addProduct } from "../../../api/products";
import { getAllCate } from "../../../api/category";
import { reRender } from "../../../utils";
import AdminProduct from ".";

const AddProduct = {
        async render() {
            const { data } = await getAllCate();
            return /* html */ `
        ${NavbarAdmin.render()}
        <header class="bg-white shadow ">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Thêm sản phẩm
          </h1>
       <span class="rounded bg-gray-900 py-1 px-2">
       <a class="text-white text-xs " href= "#/admin/products">Quay Lại</a>
       </span>
        </div>
      </header>
      <main class = "container m-auto w-full">
      <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div class="p-6 bg-white border-b border-gray-200">
                      <form method="POST" action="" id="form-add-product">
                          <div class="mb-4">
                              <label class="text-xl text-gray-600">Tên sản phẩm<span class="text-red-500">*</span></label></br>
                              <input type="text" id="name-product" class="border-2 border-gray-300 p-2 w-full" name="title" id="title" value="" required>
                          </div>
                          <div class="mb-4">
                              <label class="text-xl text-gray-600">Danh Mục</label>
                              <select class="" name="" id="cate_id">
                              ${data.map((itemCate) =>/* html */ `
                                <option value="${itemCate.id}">${itemCate.name}</option>
                              `).join("")}
                              </select>                   
                          </div>
                          <div class="mb-4">
                          <label class="text-xl text-gray-600">Giá Tiền<span class="text-red-500">*</span></label></br>
                          <input type="number" id="price-product" class="border-2 border-gray-300 p-2 w-full" name="title" id="title" value="" required>
                         </div>
                          <div class="mb-4">
                          <label class="text-xl text-gray-600">Ảnh minh họa</label>
                          <input type="file" id="image-product" class="mt-2 block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-dark-700
                          hover:file:bg-violet-100 "  placeholder="(Optional)">
                          <div class="shrink-0 mt-5">
                          <img class="h-32 w-32 object-cover " id="displayImage" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" alt="Current profile photo" />
                        </div>
                          </div>
                          <div class="mb-8">
                              <label class="text-xl text-gray-600">Nội Dung <span class="text-red-500">*</span></label>
                              <textarea name="content" id="content-product" class="border-2 border-gray-500"></textarea>
                          </div>
                          <div class="flex p-1">
                              <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Thêm sản phẩm</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          </div>
      </main>
        `;
    },
    afterRender() {
        CKEDITOR.replace("content");
        NavbarAdmin.afterRender();
        const formAddProduct = document.querySelector("#form-add-product");
        const imgDisplay = document.querySelector("#displayImage");
        const imgProduct = document.querySelector("#image-product");
        const CLOUND_DINARY_API_URL = "https://api.cloudinary.com/v1_1/fpt-com/image/upload";
        const CLOUND_DINARY_PRESET = "nwtidwxs";
        imgProduct.addEventListener("change", (e) => {
            e.preventDefault();
            imgDisplay.src = URL.createObjectURL(e.target.files[0]);
        });
        formAddProduct.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgProduct.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUND_DINARY_PRESET);
            const { data } = await axios.post(CLOUND_DINARY_API_URL, formData, {
                headers: {
                    "Content-type": "application/form-data",
                },
            });
            addProduct({
                name: document.querySelector("#name-product").value,
                content: document.querySelector("#content-product").value,
                price: document.querySelector("#price-product").value,
                id_Cate: document.querySelector("#cate_id").value,
                image: data.url,
            }).then(() => {
                swal("Thêm sản phẩm thành công!", "vui lòng kích vào nút!", "success");
            }).then(() => {
                reRender(AdminProduct, "#app");
            });
        });
    },
};
export default AddProduct;