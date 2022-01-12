import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import PageNews from "./pages/page_News";

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
});

router.resolve();