import Header from "../components/header";
import Footer from "../components/footer";

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
                          Giày Dép
                      </h1>
                  </div>
                  <div class="main-right-product">
                      <div class="details-product">
                          <div class="grid md:grid-cols-4 gap-12 mt-5 ">
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dee60c30-766a-4bda-a69d-48ac9f884a98/dunk-high-retro-se-shoes-tXRLdK.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09f9cbc5-c958-40a2-a34a-b05751d9f14a/jordan-series-2-dear-deloris-shoe-nS3GqL.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
                              <div class="rounded-lg shadow-lg bg-white max-w-sm m-auto">
                                  <a href="#!">
                                      <img class="rounded-t-lg" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09f9cbc5-c958-40a2-a34a-b05751d9f14a/jordan-series-2-dear-deloris-shoe-nS3GqL.png" alt="" />
                                  </a>
                                  <div class="p-6">
                                      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                      <p class="text-gray-700 text-base mb-4">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đặt Hàng</button>
                                  </div>
                              </div>
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