import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import {get, getAll } from "../api/products";
import { addTocart } from "../utils/cart";
import { getAllCate } from "../api/category";
import { AddComment, Allcomment } from "../api/comment";
import { getLocalStorage, reRender } from "../utils";

const DetailsProduct = {
        async render(id) {
            const { data } = await get(id);
            const dataproduct = await getAll();
            const datacomment = await Allcomment();
            const productinvolve = dataproduct.data.filter((products) => products.id_Cate === data.id_Cate);
            const commentproduct = datacomment.data.filter((comment) => comment.Productid === +id);
            return /* html */ `
       <header>${Header.render()}</header>
       <main>
       <div class="container m-auto">
           <div class="product_dt">
                <div class="py-6">
                <!-- Breadcrumbs -->
                <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="${data.image}" alt="${data.name}">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-gray-700 uppercase text-lg">${data.name}</h3>
                    <span class="text-gray-500 mt-3">${data.price}</span>
                    <hr class="my-3">
                    <div class="mt-2">
                        <label class="text-gray-700 text-sm" for="count">Count:</label>
                        <div class="flex items-center mt-1">
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span class="text-gray-700 text-lg mx-2">20</span>
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="text-gray-700 text-sm" for="count">Color:</label>
                        <div class="flex items-center mt-1">
                            <button class="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                        </div>
                    </div>
                    <div class="flex items-center mt-6">
                        <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500" id="btnAddTocart">Đặt ngay</button>
                        <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                </div>            
            </div>
                </div>
                <div id="task-comments" class="pt-4">
                <!--     comment-->
                <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Danh sách bình luận</h2>
                   ${commentproduct.map((comment) => `
                   <div class="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start mb-4">
                   <div class="flex flex-row justify-center mr-2">
                       <img alt="avatar" width="48" height="48" class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png">
                       <h3 class="text-purple-600 font-semibold text-lg text-center md:text-left ">${comment.Username}</h3>
                   </div>
                       <p style="width: 90%" class="text-gray-600 text-lg text-center md:text-left ">${comment.Content}</p>
                   </div>   
                   </div>   
                   `).join("")}
                    ${getLocalStorage("user") ? `
                    <div class="flex mx-auto items-center justify-center  max-w-lg">
                    <form id="form-add-comment" class="w-screen bg-white rounded-lg px-4 pt-2">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Thêm một bình luận</h2>
                        <div class="w-screen container m-auto md:w-screen px-3 mb-2 mt-2">
                            <textarea id="comment_post" class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body"></textarea>
                        </div>
                        <div class="w-full md:w-full flex items-start md:w-full px-3">
                            <div class="-mr-1">
                                <button type='submit' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">Bình luận</button>
                            </div>
                        </div>
                    </form>
                    </div>
                    ` : "Vui lòng đăng nhập để bình luận"}
                </div>
                    <div class="mt-16">
                    <h3 class="text-gray-600 text-2xl font-medium">Sản Phẩm Liên Quan</h3>
                     <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                     ${productinvolve.slice(0, 4).map((iteminvolce) => `
                     <a href="/product/${iteminvolce.id}">
                     <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${iteminvolce.image}')">
                         
                        </div>
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">${iteminvolce.name}</h3>
                            <span class="text-gray-500 mt-2">${iteminvolce.price}</span>
                        </div>
                    </div>
                     </a>
                     `).join("")}
                     
                    
                 </div>
                </div>
                </div>
           </div>
           
       </div>
   </main>
        <footer>
        ${Footer.render()}
        </footer>
            `;
    },
    afterRender(id) {
        Header.afterRender();
        const buttonAddCart = document.querySelector("#btnAddTocart");
        const user = getLocalStorage("user");
        buttonAddCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addTocart({ ...data, quantity: 1 }, () => {
                toastr.success("Thêm vào giỏ hàng thành công");
            });
        });
        const formadd = document.querySelector("#form-add-comment");
        formadd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const dataproduct = await get(id);

            AddComment({
                Content: document.querySelector("#comment_post").value,
                Userid: user.id,
                Username: user.username,
                Productid: dataproduct.data.id,
            }).then(() => {
                document.location.href = `/product/${id}`;
            });
        });
    },
};
export default DetailsProduct;