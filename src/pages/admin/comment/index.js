import toastr from "toastr";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Allcomment, deleteComment } from "../../../api/comment";
import { getAll } from "../../../api/products";
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";

const Listcomment = {
        async render() {
            const { data } = await Allcomment();
            console.log(data);

            return `
       <header>
       ${NavbarAdmin.render()}
       </header>
        <main class = "container m-auto">
        <div class="flex pt-12  justify-center">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 ">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bình luận
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sản phẩm
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Người bình luận
                    </th>
               
                    
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chức năng
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                    </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            ${data.map((item) =>/* html */ `
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
               
                <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                    ${item.Content}
                </div>
                <div class="text-sm text-gray-500">              
                </div>
                </div>
            </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
            </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
            ${item.Username}
            </div>
            </td>
        
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button data-id="${item.id}" class="btn-comment text-indigo-600 hover:text-indigo-900">Delete</button>
            </td>
         </tr>
            `).join("")}
            </tbody>
        </table>
        </div>
    </div>
    </div>
    </div>
</main>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();
        const BtnComment = document.querySelectorAll(".btn-comment");
        BtnComment.forEach((value) => {
            value.addEventListener("click", () => {
                const { id } = value.dataset;
                const confirm = window.confirm("Bạn có chắc muốn xóa comment này");
                if (confirm) {
                    deleteComment(id);
                    toastr.error("Xóa thành công");
                    reRender(Listcomment, "#app");
                }
            });
        });
    },
};
export default Listcomment;