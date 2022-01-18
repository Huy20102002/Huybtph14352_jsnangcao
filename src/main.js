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
import About from "./pages/about";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
};

router.on({
    "/": () => { print(HomePage); },
    "/home": () => { print(HomePage); },
    "/signup": () => {
        print(Signup);
    },
    "/signin": () => {
        print(Signin);
    },
    "/product": () => {
        print(ListProduct);
    },
    "/news": () => {
        print(PageNews);
    },
    "/about": () => { print(About); },
    "/admin/dashboard": () => {
        print(AdminDashboard);
    },
    "/admin/news": () => {
        print(Adminnews);
    },
    "/admin/news/add": () => {
        print(AddNews);
    },
    "/admin/news/:id/edit": ({ data }) => { print(UpdateNews, data.id); },

});

router.resolve();