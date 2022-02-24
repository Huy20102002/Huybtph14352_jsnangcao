// import DataProducts from "../../../data/DataProduct";
import $ from "jquery";
import validate from "jquery-validation";
import axios from "axios";
import NavbarAdmin from "../../../components/NavbarAdmin";
import {get, Update } from "../../../api/posts";
import { reRender } from "../../../utils";
import Adminnews from "./news";

const UpdateNews = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        ${NavbarAdmin.render()}
        <header class="bg-white shadow ">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Cập nhập tin tức
          </h1>
       <span class="rounded bg-gray-900 py-1 px-2">
       <a class="text-white text-xs " href= "/admin/news">Quay Lại</a>
       </span>
        </div>
      </header>
        <main class = "container m-auto w-full">
        <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div class="p-6 bg-white border-b border-gray-200">
                      <form method="POST" action="" id="form-update">
                          <div class="mb-4">
                              <label class="text-xl text-gray-600">Tiêu Đề<span class="text-red-500">*</span></label></br>
                              <input type="text" id="title-post" value="${data.title}" class="border-2 border-gray-300 p-2 w-full" name="title" value="" required>
                          </div>

                          <div class="mb-4">
                              <label class="text-xl text-gray-600">Mô tả Ngắn</label>
                              <input type="text" id="description-post" name="description-post" value="${data.shortDescription}" class="border-2 border-gray-300 p-2 w-full"  placeholder="text.....">
                          </div>
                          <div class="mb-4">
                          <label class="text-xl text-gray-600">Ảnh minh họa</label>
                          <input type="file" id="image-post" class="mt-2 block w-full text-sm text-slate-500
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
                              </p></p>
                              <textarea name="content-post" id="content-post"  rows="10" cols="30"  class="border-2 border-gray-500">${data.content}</textarea>
                          </div>
                          <div class="flex p-1">
                              <button type="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Cập nhật tin tức </button>
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
        const imgdisplay = document.querySelector("#displayImage");
        const imgPost = document.querySelector("#image-post");
        let imglink = "";
        const CLOUND_DINARY_API_URL = "https://api.cloudinary.com/v1_1/fpt-com/image/upload";
        const CLOUND_DINARY_PRESET = "nwtidwxs";
        imgPost.addEventListener("change", (e) => {
            e.preventDefault();
            imgdisplay.src = URL.createObjectURL(e.target.files[0]);
        });
        $("#form-update").validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,

                },
                "description-post": {
                    required: true,
                    minlength: 5,

                },
                "content-post": {
                    required: true,
                    minlength: 10,

                },

            },
            messages: {
                "title-post": {
                    required: "Vui lòng nhập tiêu đề",
                    minlength: "Vui lòng nhập trên 5 ký tự",
                },
                "description-post": {
                    required: "Vui lòng nhập mô tả ngắn",
                    minlength: "Vui lòng nhập trên 5 ký tự",
                },
                "content-post": {
                    required: "vui lòng nhập nội dung",
                    minlength: "Vui lòng nhập trên 10 ký tự",

                },
            },
            submitHandler: () => {
                async function updateNew() {
                    const file = imgPost.files[0];
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
                    Update(id, {
                        title: $("#title-post").val(),
                        shortDescription: $("#description-post").val(),
                        content: $("#content-post").val(),
                        image: imglink !== "" ? imglink : imgdisplay.src,
                    }).then(() => {
                        reRender(Adminnews, "#app");
                    });
                }
                updateNew();
            },
        });
    },
};
export default UpdateNews;