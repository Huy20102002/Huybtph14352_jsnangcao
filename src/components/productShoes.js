import { getAll } from "../api/products";

const ProductShoes = {
        async render() {
            const { data } = await getAll();
            const productshoes = data.filter((products) => products.id_Cate === "2");
            return /* html */ `
                <div class="grid md:grid-cols-4 gap-12 mt-5 ">
                ${productshoes.map((item) => `
                <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                        <a href="product/${item.id}">
                            <img class="rounded-t-lg" src="${item.image}" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">${item.name}</h5>
                            <p class="text-gray-700 text-base mb-4">
                            ${item.price}
                            </p>
                            <button type="button" data-id="${item.id}" id="addTocart"  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                        </div>
                    </div>`).join("")}
                </div>
`;
    },
};
export default ProductShoes;