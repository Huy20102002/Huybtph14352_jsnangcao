import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import NavbarAdmin from "../../../components/NavbarAdmin";
import {get, UpdateProduct } from "../../../api/products";
import { reRender } from "../../../utils";
import AdminProduct from ".";
import { getAllCate } from "../../../api/category";

const UpdateProducts = {
        async render(id) {
            const { data } = await get(id);
            const allCate = await getAllCate();
            return /* html */ `
        ${NavbarAdmin.render()}
        <header class="bg-white shadow ">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Sửa sản phẩm
          </h1>
       <span class="rounded bg-gray-900 py-1 px-2">
       <a class="text-white text-xs " href= "/admin/products">Quay Lại</a>
       </span>
        </div>
      </header>
      <main class = "container m-auto w-full">

      <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div class="p-6 bg-white border-b border-gray-200">
                  <form id="form-update-product">
                      <div class="mb-4">
                          <label class="text-xl text-gray-600">Tên sản phẩm<span class="text-red-500">*</span></label></br>
                          <input type="text" id="name-product" value="${data.name}" class="border-2 border-gray-300 p-2 w-full" name="name-product"  value="" >
                      </div>
                      <div class="mb-4">
                          <label class="text-xl text-gray-600">Danh Mục</label>
                          <select class="" name="" id="cate_id">
                          ${allCate.data.map((itemCate) =>/* html */ `
                            <option value="${itemCate.id}" ${itemCate.id === data.id_Cate ? "selected" : ""}>${itemCate.name}</option>
                          `).join("")}
                          </select>            
                      </div>
                      <div class="mb-4">
                      <label class="text-xl text-gray-600">Giá Tiền<span class="text-red-500">*</span></label></br>
                      <input type="number" id="price-product"  value="${data.price}" class="border-2 border-gray-300 p-2 w-full" name="price-product"  >
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
                      <img class="h-32 w-32 object-cover " id="displayImage" src="${data.image}" alt="Current profile photo" />
                    </div>
                      </div>
                      <div class="mb-8">
                          <label class="text-xl text-gray-600">Nội Dung <span class="text-red-500">*</span></label>
                          <p></p>
                          <textarea name="content-product" id="content-product" cols="100" rows="5" class="border-2 border-gray-500">${data.content}</textarea>
                      </div>
                      <div class="flex p-1">
                          <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Cập nhật sản phẩm</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      </div>
      </main>
        `;
    },
    afterRender(id) {
        NavbarAdmin.afterRender();
        const formupdateProduct = document.querySelector("#form-update-product");
        const imageProduct = document.querySelector("#image-product");
        const imageDisplay = document.querySelector("#displayImage");
        const CLOUND_DINARY_API_URL = "https://api.cloudinary.com/v1_1/fpt-com/image/upload";
        const CLOUND_DINARY_PRESET = "nwtidwxs";
        let imglink = "";
        imageProduct.addEventListener("change", (e) => {
            e.preventDefault();
            imageDisplay.src = URL.createObjectURL(e.target.files[0]);
        });
        $("#form-update-product").validate({
            rules: {
                "name-product": {
                    required: true,
                },
                "content-product": {
                    required: true,
                },
                "price-product": {
                    required: true,
                },
            },
            messages: {
                "name-product": {
                    required: "Vui lòng nhập tên sản phẩm",
                },
                "content-product": {
                    required: "Vui lòng nhập nội dung sản phẩm",
                },
                "price-product": {
                    required: "Vui lòng nhập giá tiền",
                },
            },
            submitHandler: () => {
                async function HandlerUpdateProduct() {
                    const file = imageProduct.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUND_DINARY_PRESET);
                        const { data } = await axios.post(CLOUND_DINARY_API_URL, formData, {
                            headers: {
                                "Content-type": "application/form-data",
                            },
                        });
                        imglink = data.url;
                    }

                    UpdateProduct(id, {
                        name: document.querySelector("#name-product").value,
                        content: document.querySelector("#content-product").value,
                        price: document.querySelector("#price-product").value,
                        id_Cate: document.querySelector("#cate_id").value,
                        image: imglink !== "" ? imglink : imageDisplay.src,

                    }).then(() => {
                        reRender(AdminProduct, "#app");
                    });
                }
                HandlerUpdateProduct();
            },
        });
    },
};
export default UpdateProducts;