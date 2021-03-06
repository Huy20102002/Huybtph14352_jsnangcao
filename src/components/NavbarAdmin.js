const NavbarAdmin = {
    render() {
        return /* html */ `
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
                        <a class="nav-link text-black font-semibold" href="/admin/dashboard">Th???ng K??</a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link text-black  font-semibold" href="/admin/news">Qu???n L?? Tin T???c</a
                        >
                    </li>
                    
                    <li class="nav-item p-2">
                        <a  class="nav-link text-black  font-semibold" href="/admin/news/add">Qu???n L?? Danh M???c</a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link text-black text-black font-semibold" href="#">Qu???n L?? S???n Ph???m</a
                        >
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link text-black text-black font-semibold" href="#">Qu???n L?? B??nh Lu???n</a>
                    </li>
                </ul>
            </div>

        </div>
        
    </nav>
        `;
    },
};
export default NavbarAdmin;