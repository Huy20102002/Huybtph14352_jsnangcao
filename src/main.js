import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import PageNews from "./pages/page_News";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#main").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/home": () => {
        print(HomePage.render());
    },
    "/tintuc": () => {
        print(PageNews.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/admin/dashboard": () => {
        print("Trang Quản trị admin");
    },
    "/admin/news": () => {
        print("Trang quản lý tin tức");
    },
    "/admin/news/add": () => {
        print("Trang thêm tin tức");
    },
    "/admin/news/:id/edit": () => {
        print("Trang cập nhật tin tức");
    },
});

router.resolve();