import { getLocalStorage, reRender } from "../utils";
import { getCountCart } from "../utils/cart";

const Header = {
        render() {
            return /* html */ `
        <div class="bg-neutral-100">
     <div class="top-header m-auto container h-8 py-1 px-16 flex justify-between">
     <div class="icon">
         <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32"><path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg>
     </div>
     <div class="h-function">
         <a class="text-xs" href="">Hỗ trợ | </a>
         <a class="text-xs" href="">Liên hệ |</a>
         <a class="text-xs" href="">Ngôn ngữ</a>
         <a class ="text-xs" href ="/admin/dashboard">|Quản trị</a>
     </div>
     </div>
  </div>
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-white-900 text-slate-800 shadow-lg navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <button class="flex  navbar-toggler text-black-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
        <a class="ml-72 pr-2" href="#">
        <img class="w-20  lg:w-12" src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt="">
        </a>
      </button>
            <div class="collapse navbar-collapse container m-auto flex-grow items-center" id="navbarSupportedContent1">
            <div class="pr-2 ">
            <a class=" sm:hidden md:hidden lg:block xl:block logo" href="#">
                <img class="w-20 " src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt="">
            </a>
            </div>
                <!-- Left links -->
                <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                    <li class="nav-item p-2">
                        <a class="nav-link text-black font-semibold" href="/home">Trang chủ</a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link text-black  font-semibold" href="/product">Sản Phẩm</a
                        >
                    </li>
                    
                    <li class="nav-item p-2">
                        <a  class="nav-link text-black  font-semibold" href="/news">Tin Tức</a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link text-black text-black font-semibold" href="/about">Giới Thiệu</a
                        >
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link text-black text-black font-semibold" href="#">Liên Hệ</a>
                    </li>
                </ul>
                <div class="search">
                <input class="w-52 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="" type="text" placeholder="Tìm kiếm.....">
                <button class="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm  text-white py-2 px-2 rounded" type="button">
                    <i class="fas fa-search"></i>
                  </button>
              </div>
              <div id="userlogin" class="btn flex">
              ${getLocalStorage("user") ? `<a href="/cart" class="flex h-10 ml-2 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner">
              <svg class="h-6 w-6 leading-none text-gray-300 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
             </svg>
              <span id = "quantity_cart" class="pl-1 text-gray-500 text-md">${getLocalStorage("cart") ? getCountCart().length : 0}</span>
                </a>
              <a href="/profile" id="info" class="text-black text-base font-medium p-2"></a>
              <button id="logout" class="text-black text-base font-medium p-2">Đăng Xuất</button>  ` : ` <a href="#/signin" class=" text-black text-base font-medium p-2">Đăng Nhập </a>
              <a href="/signup" class="text-black text-base font-medium p-2">Đăng Ký</a>`}
         
          </div>
            </div>

        </div>
    </nav>
            `;
    },
    afterRender() {
        const { username } = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#info").innerHTML = `Xin chào: ${username}`;
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                window.localStorage.removeItem("user");
                reRender(Header, "header");
            });
        }
    },
};

export default Header;