import Navigo from "navigo";
import HomePage from "./pages/home";
import PageNews from "./pages/page_News";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import AdminDashboard from "./pages/admin/dashboard";
import Adminnews from "./pages/admin/news/news";
import AddNews from "./pages/admin/news/Addnews";
import UpdateNews from "./pages/admin/news/Update_news";
import ListProduct from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
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
    "/product": () => {
        print(ListProduct.render());
    },
    "/admin/dashboard": () => {
        print(AdminDashboard.render());
    },
    "/admin/news": () => {
        print(Adminnews.render());
    },
    "/admin/news/add": () => {
        print(AddNews.render());
    },
    "/admin/news/:id/edit": (value) => {
        print(UpdateNews.render(value.data.id));
    },
});

router.resolve();