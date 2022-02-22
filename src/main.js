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
import DetailsProduct from "./pages/DetailsProduct";
import AddProduct from "./pages/admin/product/addProduct";
import UpdateProducts from "./pages/admin/product/UpdateProduct";
import AdminProduct from "./pages/admin/product";
import AdminCate from "./pages/admin/category";
import AddCate from "./pages/admin/category/AddCate";
import UpdateCategory from "./pages/admin/category/UpdateCate";
import CartDetails from "./pages/cart";
import Categories from "./pages/categories";
import Order from "./pages/admin/order";
import Search from "./pages/search";
import Profile from "./pages/profile";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async(content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) {
        await content.afterRender(id);
    }
};
router.on("/admin/*/", () => {}, {
    before(done, match) {
        const { id } = JSON.parse(localStorage.getItem("user"));
        if (localStorage.getItem("user")) {
            if (id === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => { print(HomePage); },
    "/home": () => { print(HomePage); },
    "/profile": () => { print(Profile); },
    "/signup": () => { print(Signup); },
    "/signin": () => { print(Signin); },
    "/product": () => { print(ListProduct); },
    "/product/:id": ({ data }) => { print(DetailsProduct, data.id); },
    "/product/search/:keyword": ({ data }) => { print(Search, data.keyword); },
    "/news": () => { print(PageNews); },
    "/about": () => { print(About); },
    "/cart": () => { print(CartDetails); },
    "/category/:id": ({ data }) => { print(Categories, data.id); },
    "/admin/dashboard": () => { print(AdminDashboard); },
    "/admin/news": () => { print(Adminnews); },
    "/admin/news/add": () => { print(AddNews); },
    "/admin/news/:id/edit": ({ data }) => { print(UpdateNews, data.id); },
    "/admin/products": () => { print(AdminProduct); },
    "/admin/products/add": () => { print(AddProduct); },
    "/admin/products/:id/edit": ({ data }) => { print(UpdateProducts, data.id); },
    "/admin/category": () => { print(AdminCate); },
    "/admin/category/add": () => { print(AddCate); },
    "/admin/category/:id/edit": ({ data }) => { print(UpdateCategory, data.id); },
    "/admin/order": () => { print(Order); },

});
router.resolve();