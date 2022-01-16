const NavbarAdmin = {
    render() {
        return /* html */ `

        <nav x-data="{show:false}" class="flex items-center justify-between flex-wrap bg-gray-800 p-6  ">
        <div class="flex items-center flex-shrink-0 text-white mr-6 ">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </div>
        <div class=" block md:hidden">
          <button @click="show=!show" class=" flex items-center px-3 py-2 border rounded text-gray-100 border-gray-200 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div @click.away="show = false" :class=" { 'block': show, 'hidden': !show }" class=" w-full block flex-grow md:flex md:justify-end md:w-auto">
          <div class="">
          <a href="/admin/dashboard" class=" block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0" aria-current="page">Trang chủ</a>
          <a href="/admin/news" class=" block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Quản lý tin tức</a>
          <a href="#" class=" block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Quản lý danh mục</a>
          <a href="#" class=" block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Quản lý sản phẩm</a>
          <a href="#" class=" block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Quản lý bình luận</a>
          <a href="#" class=" block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Thống kê</a>
          </div>
        </div>
      </nav>
        `;
    },
};
export default NavbarAdmin;