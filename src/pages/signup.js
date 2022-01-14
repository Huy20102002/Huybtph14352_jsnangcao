import Header from "../components/header";
import Footer from "../components/footer";

const Signup = {
    render() {
        return /* html */ `
        <header>
        ${Header.render()}
        </header>
        <main>
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="./src/image/nikelogo.png" alt="Workflow">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                   Đăng Ký
                </h2>

            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email</label>
                        <input id="email-address" name="user" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email......">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Mật Khẩu</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Mật khẩu">
                    </div>
                    <div>
                    <label for="newpassword" class="sr-only">Nhập lại mật khẩu</label>
                    <input id="newpassword" name="newpassword" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nhập lại mật khẩu">
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
            Đăng ký
              </button>
              <div class = "text-center text-xs mt-5">
             <p>Bạn có tài khoản ? <a href="/signup" class = "hover:text-indigo-500 hover:underline">Đăng nhập</a></p>
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
};
export default Signup;