import data_news from "../data/data_news";

const PageNews = {
        render() {
            return /* html */ `
          <div class = "title">
          <h2 class="text-blue-900  uppercase font-bold text-xl my-5  ">Tin Tức</h2>
          </div>
          <div class="news-details grid md:grid-cols-3 gap-10 ">
          ${data_news.map((post) => `
              <div class="posts border-2 mx-auto p-6">
                 <div class="img ">
                   <a href=" ">
                     <img src="${post.img}" alt=" ">
                      </a>
                   </div>
               <div class="text w-64 mt-2">
                  <h3>
                     <a class="text-amber-800 font-bold " href=" ">${post.title}</a>
                      </h3>
                 <p class="text-sm  mt-2">${post.desc}</p>
              </div>
               </div>        
          `).join("")}
       </div>
        `;
    },
};
export default PageNews;