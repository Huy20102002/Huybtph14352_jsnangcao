import Footer from "../components/footer";
import Header from "../components/header";
import { getLocalStorage } from "../utils";
import { getorder } from "../api/order";

const Profile = {
        async render() {
            const user = getLocalStorage("user");
            const getorders = await getorder();
            const orderid = getorders.data.filter((payment) => payment.id_User === user.id);

            return `
                <header>
                ${Header.render()}
                </header>
         <main>
         <div class="h-full">
         <div class="border-b-2 block md:flex">
             <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
             <div class="flex justify-between">
                 <span class="text-xl font-semibold block">Admin Profile</span>
                 <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
             </div>

             <span class="text-gray-600">This information is secret so be careful</span>
             <div class="w-full p-8 mx-2 flex justify-center">
                 <img id="showImage" class="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="">                          
                 </div>
             </div>
             <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
             <div class="rounded  shadow p-6">
                 <div class="pb-6">
                 <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
                 <div class="flex">
                     <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${user.username}" />
                 </div>
                 </div>
                 <div class="pb-4">
                 <label for="about" class="font-semibold text-gray-700 block pb-1">Email</label>
                 <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="${user.email}" />
                 </div>
             </div>
             </div>
         </div>
         
         </div>
         <div class="flex pt-12  justify-center">
           <div class="my-2 ">
               <div class="py-2  align-middle inline-block  sm:px-6 lg:px-8">
                   <div class="shadow border-b  border-gray-200 ">
                   <table class="min-w-full divide-y divide-gray-200">
                   <thead class="bg-gray-50">
                       <tr>
                       <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Tên Sản Phẩm
                       </th>
                       <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tổng tiền
                       </th>
                       <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Hình ảnh
                       </th>
                       <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Tình trạng
                      </th>
                  
                       
                       </tr>
               </thead>
               <tbody class="bg-white divide-y divide-gray-200">
               ${orderid.map((item) =>/* html */ `
             <tr>
               <td class="px-6 py-4 whitespace-nowrap">
               <div class="flex items-center">
                  
                   <div class="ml-4">
                   <div class="text-sm font-medium text-gray-900">
                       ${item.name}
                   </div>
                   <div class="text-sm text-gray-500">              
                   </div>
                   </div>
               </div>
               </td>
            
               <td class="px-6 py-4 whitespace-nowrap">
               <div class="text-sm text-gray-900">${item.price}</div>
               </td>
           
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               <div class="text-sm text-gray-900">
               <img width = "200" src="${item.image}" alt="">
               </div>
              
            </tr>
               `).join("")}
               </tbody>
           </table>
                   </div>
               </div>
           </div>
       </div>
         </main>
            </footer>
            ${Footer.render()}
            </footer>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};

export default Profile;