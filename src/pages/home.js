import Banner from "../components/banner";
import News from "../components/news";
import Activities from "../components/activities";

const HomePage = {
    render() {
        return `
        <div class="banner mt-2">
          ${Banner.render()}
        </div>
        <div class="news ">
         ${News.render()}
         </div>
         <div class="news-actives ">
        ${Activities.render()}
        </div>
        `;
    },
};

export default HomePage;