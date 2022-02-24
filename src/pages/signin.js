import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { signin, signup } from "../api/users";

const Signin = {
    render() {
        return /* html */ `
       <header>
       ${Header.render()}
       </header>
       <main>
       <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       <div class="max-w-md w-full space-y-8">
           <div>
               <img class="mx-auto h-12 w-auto" src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt="Workflow">
               <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                   Đăng Nhập
               </h2>

           </div>
           <form class="mt-8 space-y-6"  id="form-login" >
               <div class="rounded-md shadow-sm -space-y-px">
                   <div>
                       <label for="email-address" class="sr-only">Email</label>
                       <input id="email" name="email" type="email"   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="email......">
                   </div>
                   <div>
                       <label for="password" class="sr-only">Mật Khẩu</label>
                       <input id="password" name="password" type="password" autocomplete="current-password"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Password">
                   </div>
               </div>
               <div class="flex items-center justify-between">
                   <div class="flex items-center">
                       <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                       <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                 Lưu tài khoản mật khẩu
               </label>
                   </div>
                   <div class="text-sm">
                       <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
               Bạn quên mật khẩu?
               </a>
                   </div>
               </div>
               <div>
                   <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                 <!-- Heroicon name: solid/lock-closed -->
                 <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                   <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                 </svg>
               </span>
              Đăng Nhập
             </button>
             <div class = "text-center text-xs mt-5">
            <p>Bạn không có tài khoản ? <a href="/register" class = "hover:text-indigo-500 hover:underline">Đăng kí</a></p>
             </div>
               </div>
           </form>
       </div>
   </div>
       </main>
       <footer>
       ${Footer.render()}
       </footer>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#form-login");
        formSignin.addEventListener("submit", async(e) => {
            e.preventDefault();
            // call api
            const { data } = await signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            localStorage.setItem("user", JSON.stringify(data.user));
            toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
            setTimeout(() => {
                if (data.user.id === 1) {
                    document.location.href = "/admin/dashboard";
                } else {
                    document.location.href = "/";
                }
            }, 3000);
        });
    },
};

export default Signin;