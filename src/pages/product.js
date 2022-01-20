import Header from "../components/header";
import Footer from "../components/footer";
import DataProducts from "../data/DataProduct";

const ListProduct = {
        render() {
            return `
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
                          <p><a class="m-2 text-slate-800 font-medium " href="">Jorden</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Running</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Football</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Golf</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Tennis</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Walking</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Jorden</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Running</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Football</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Golf</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Tennis</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Walking</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Jorden</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Running</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Football</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Golf</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Tennis</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Walking</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Jorden</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Running</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Football</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Golf</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Tennis</a></p>
                          <p><a class="m-2 text-slate-800 font-medium " href="">Walking</a></p>
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
                          ${DataProducts.map((item) => `
                          <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                          <a href="product/${item.id}">
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

                      </div>
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
};
export default ListProduct;