import toastr from "toastr";
import Header from "../components/header";
import Footer from "../components/footer";
import {get, getAll } from "../api/products";
import { getAllCate } from "../api/category";
import { addTocart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const ListProduct = {
        async render() {
            const { data } = await getAll();
            const datacate = await getAllCate();
            return /* html */ `
      <header>
      ${Header.render()}
      </header>
      <main>
        <div>
        <div class="product m-auto  container">
            <div class="top-product">
            </div>
                <div class="main-product mt-5 md:flex">
                    <div class="left-listproduct">
                        <div class="title-listproduct leading-9 ">
                            <div class="lg:w-52 md:w-full  text-center lg:h-96  flex md: md:flex-col overflow-auto touch-auto ...">
                            ${datacate.data.map((itemcate) => `
                            <p><a class="m-2 text-slate-800 font-medium " href="/category/${itemcate.id}">${itemcate.name}</a></p>
                            `).join("")}    
                            </div>
                        </div>
                    </div>
                    <div class="right-product ml-5">
                        <div class="right-title ml-3">
                            <h1 class="text-xl font-medium">
                                Sản Phẩm
                            </h1>
                        </div>
                        <div class="main-right-product">
                            <div class="details-product">
                                <div class="grid md:grid-cols-4 gap-12 mt-5 ">
                                ${data.map((item) => /* html */ `
                                <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                <a href="product/${item.id}">
                                    <img class="rounded-t-lg" src="${item.image}" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">${item.name}</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                    ${item.price}
                                    </p>
                                    <button type="button" data-id= "${item.id}"  id="addTocart" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Đặt Hàng</button>
                                </div>
                            </div>
                            `).join("")}
                            </div>
                        </div>
                    </div>
                    <div>
                    <ul class="flex pl-0 list-none rounded my-2">
                        <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"><a class="page-link" href="#">Previous</a></li>
                        <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a class="page-link" href="#">1</a></li>
                        <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a class="page-link" href="#">2</a></li>
                        <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a class="page-link" href="#">3</a></li>
                        <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"><a class="page-link" href="#">Next</a></li>
                    </ul>
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
    afterRender() {
        Header.afterRender();
        const buttonAddCart = document.querySelectorAll("#addTocart");
        buttonAddCart.forEach((btn) => {
            const { id } = btn.dataset;

            btn.addEventListener("click", async (e) => {
                e.preventDefault();
                const { data } = await get(id);
                addTocart({ ...data, quantity: 1 }, () => {
                    toastr.success("Thêm sản phẩm vào giỏ hàng thành công");
                });
            });
        });
    },
};
export default ListProduct;