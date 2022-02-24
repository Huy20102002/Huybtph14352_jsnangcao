import Header from "../components/header";
import Footer from "../components/footer";
import { getAll } from "../api/posts";

const PageNews = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
        <header>${Header.render()}</header>
        <main class="">
        <div class="pt-8 container m-auto  ">
            <div class="news container m-auto flex">
                <div class="left-news  w-3/4">
                    <div class="left-news-title pb-5">
                        <h2 class="text-xl font-medium">Tin Tức Trong Ngày</h2>
                    </div>
                    <div class="main-news ">
                        <div>
                        ${data.map((item) =>/* html */ `
                                        <div class="post md:flex pb-3">
                                            <div class="img-news">
                                                <a href=""> <img src="${item.image}" class="md:w-96 rounded"  alt=""></a>
                                            </div>
                                            <div class="text-news ml-6">
                                                <div class="title-post">
                                                    <a href="">
                                                        <p class="font-medium text-xl md:w-3/4">${item.title}</p>
                                                    </a>
                                                </div>
                                                <div class="details-post">
                                                    <p class="text-slate-800 font-italic text-sm md:w-2/4">${item.content}</p>
                                                </div>
                                            </div>
                                        </div>
                        `).join("")};                                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </main>
          <footer>${Footer.render()}</footer>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default PageNews;