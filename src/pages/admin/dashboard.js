import NavbarAdmin from "../../components/NavbarAdmin";

const AdminDashboard = {
    render() {
        return /* html */ `
       
         ${NavbarAdmin.render()}
         <header class="bg-white shadow">
         <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
           <h1 class="text-3xl font-bold text-gray-900">
             Quản trị
           </h1>
        
         </div>
       </header>
        `;
    },
};
export default AdminDashboard;