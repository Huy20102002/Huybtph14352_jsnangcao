const Header = {
    render() {
        return /* html */ `
        <div class="logo bg-blue-900 pt-5 pb-4">
        <a class="" href="">
            <img class="m-auto w-1/6" src="./image/logo.png" alt="">
        </a>
    </div>
    <nav class="menu bg-amber-600">
        <ul class="flex text-center">
            <li class="block  ml-4 p-2 hover:list-decimal">
                <a class="text-white text-sm hover:underline" href="/home">Trang chủ</a>
            </li>
            <li class="block  ml-4 p-2">
                <a class="text-white text-sm hover:underline" href="/tintuc">Tin Tức</a>
            </li>
            <li class="block  ml-4 p-2">
                <a class="text-white text-sm hover:underline" href="/chuongtrinh">Chương trình đào tạo</a>
            </li>
            <li class="block ml-4 p-2">
                <a class="text-white text-sm hover:underline" href="/sinhvien">Góc sinh viên</a>
            </li>
            <li class="block ml-4 p-2">
                <a class="text-white text-sm hover:underline" href="/tuyendung">Tuyển dụng</a>
            </li>
            <li class="block  ml-32 p-2">
                <input class="border-none " type="text" id="">
                <button class="bg-blue-900 text-white text-base w-24 ml-2">Tìm Kiếm</button>
            </li>
        </ul>
    </nav>
            `;
    },
};

export default Header;