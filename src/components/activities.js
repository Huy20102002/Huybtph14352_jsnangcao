import data from "../data/data";

const Activities = {
        render() {
            return `
        <div class="n-title">
        <h2 class="text-blue-900  uppercase font-bold text-xl my-5  ">Hoạt Động Sinh Viên</h2>
       </div>
    <div class="actives">
        <div class="news-details grid md:grid-cols-3 gap-10 ">
           ${data.map((post) => `
               <div class="posts border-2 mx-auto p-6">
                  <div class="img ">
                    <a href=" ">
                      <img src="${post.image}" alt=" ">
                       </a>
                    </div>
                <div class="text w-64 mt-2">
                   <h3>
                      <a class="text-amber-800 font-bold " href=" ">${post.name}</a>
                       </h3>
                  <p class="text-sm  mt-2">${post.details}</p>
               </div>
                </div>        
           `).join("")}
        </div>
    </div>
        `;
    },
};

export default Activities;