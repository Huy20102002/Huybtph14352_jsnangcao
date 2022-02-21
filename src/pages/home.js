import producthot from "../components/producthot";
import ProductClothes from "../components/productClothes";
import ProductShoes from "../components/productShoes";
import Banner from "../components/banner";

import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    async render() {
        return /* html */ `
        <header>
         ${Header.render()}
        </header>
    <main>
    <div class="container m-auto"> 
 <div class="banner mt-4 ">
 ${Banner.render()}
   </div>
<div class="product-hot">
    <div class="title-product">
        <h1 class="text-slate-800 text-xl font-medium mt-5">Sản Phẩm Nổi Bật</h1>
    </div>
    <div class="details-product">
       ${await producthot.render()}
    </div>
</div>
<div class="product-clothes">
<div class="title-product">
    <h1 class="text-slate-800 text-xl font-medium mt-5">Quần áo</h1>
</div>
<div class="details-product">
  ${await ProductClothes.render()}
</div>
</div>
<div class="product-shoe">
<div class="title-product">
    <h1 class="text-slate-800 text-xl font-medium mt-5">Giày Dép</h1>
</div>
<div class="details-product">
${await ProductShoes.render()}
</div>
</div>
 </div>
    </main>
    <footer>
    ${Footer.render()}
    </footer>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};

export default HomePage;