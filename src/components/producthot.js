/* eslint-disable no-unused-vars */
import DataProducts from "../data/DataProduct";

const producthot = {
        render() {
            DataProducts.find((post) => post.category === 2);
            return /* html */ `
        <div class="grid md:grid-cols-4 gap-12 mt-5 ">
        ${DataProducts.map((item) =>/* html */ `
        <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
        <a href="#!">
            <img class="rounded-t-lg" src="${item.Image}" alt="" />
        </a>
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">${item.name}</h5>
            <p class="text-gray-700 text-base mb-4">
       ${item.description}
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
        </div>
      </div>
        `).join("")}
    </div>
        `;
    },
};

export default producthot;