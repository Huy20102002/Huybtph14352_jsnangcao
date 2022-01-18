import Header from "../components/header";
import Footer from "../components/footer";

const About = {
    render() {
        return `
             <header>
             ${Header.render()}
             </header>
             <main>
                <div class="container m-auto">
                <div class="aboutus">
                    <div class="head-about">
                        <h2 class="text-center mt-7 text-3xl text-slate-800 font-medium">Về Chúng Tôi</h2>
                    </div>
                    <div class="title-about border-b border-gray-700 pb-2">
                        <p class="xl:text-lg md:text-base lg:text-base   text-slate-700 pt-2">Catering to your requirements, handling your needs with care
                        </p>
                    </div>
                    <div class="details-about pt-3">
                        <p class="text-base text-slate-600">Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience. Forget about struggling to do everything at once: taking care of
                            the family, running your business, walking your dog, cleaning the house, doing the shopping, etc. Purchase the goods you need every day or just like in a few clicks or taps, depending on the device you use to access the Internet.
                            We work to make your life more enjoyable.</p>
                    </div>
                    <div class="container m-auto ">
                        <div class="service grid md:grid-cols-3 mt-3 ">
                            <div class="about-box flex">
                                <div class="box-icon text-center">
                                    <h2 class="text-black text-4xl border border-black rounded-full w-16 h-16 "><i class="mt-3 fas fa-map-marker-alt"></i></h2>
                                </div>

                                <div class="about-text  ">
                                    <div class="ml-5 leading-10">
                                        <p class="text-base"> Địa chỉ: Số 2, Trịnh Văn Bô, Hà nội</p>
                                        <p class="text-base"> 255 Bình Lợi, P. 13, Q. Bình Thạnh. Tp.HCM
                                        </p>
                                        <p class="text-base">587 Bình Lợi, P. 13, Q. Bình Thạnh. Tp.HÀ Nội</p>
                                    </div>
                                </div>
                            </div>
                            <div class="about-box flex">
                                <div class="box-icon text-center">
                                    <h2 class="text-black text-4xl border border-black rounded-full w-16 h-16 "><i class="mt-3 fas fa-shipping-fast"></i></h2>
                                </div>
                                <div class="about-text ml-5 leading-10">
                                    <p>Vận chuyển 24/24</p>
                                    <p>Giao hàng nhanh chóng</p>
                                </div>
                            </div>
                            <div class="about-box flex">
                                <div class="box-icon text-center">
                                    <h2 class="text-black text-4xl border border-black rounded-full w-16 h-16 "><i class="mt-3 fas fa-clock"></i></h2>
                                </div>
                                <div class="ml-5 leading-10 about-text">
                                    <p>Thứ 2 - Thứ 6 : 9h00 - 22h00 </p>
                                    <p>Thứ 7 - Chủ nhật : 9h00 - 12h00</p>
                                </div>
                            </div>
                        </div>
                        <div class="ourteam ">
                            <div class="team-title border-b border-gray-500 pb-2">
                                <h2 class="text-slate-900 font-medium text-xl mt-4 ">Đội Ngũ Sáng Lập</h2>
                            </div>
                            <div class="_team pt-4 m-auto  grid md:grid-cols-4 gap-16">
                                <div class="t_profile">
                                    <img src="https://cdn.shopify.com/s/files/1/0221/7879/1524/files/photo_1_270x270.jpg?v=1548247401" alt="">
                                    <div class="t_info mt-2 ">
                                        <span class="">John Doe
                                        </span>
                                        <p class="text-base w-auto w-9/12 mt-3">
                                            Senior salesman with 15 years of experience. He knows everything about the products he offers.
                                        </p>
                                    </div>
                                </div>
                                <div class="t_profile">
                                    <img src="https://cdn.shopify.com/s/files/1/0221/7879/1524/files/photo_2_270x270.jpg?v=1548247403" alt="">
                                    <div class="t_info mt-2">
                                        <span class="">
                                        Jessica Priston
                                        </span>
                                        <p class="text-base w-auto w-9/12 mt-3">
                                            Mega positive shop assistant always ready to help you make the right choice and charm you with a smile.
                                        </p>
                                    </div>
                                </div>
                                <div class="t_profile">
                                    <img src="https://cdn.shopify.com/s/files/1/0221/7879/1524/files/photo_3_270x270.jpg?v=1548247405" alt="">
                                    <div class="t_info mt-2">
                                        <span class="">Sam Kromstain</span>
                                        <p class="text-base w-auto w-9/12 mt-3">
                                            Wholesale manager. Contact him if you want to buy a batch of the products offered at our store.
                                        </p>
                                    </div>
                                </div>
                                <div class="t_profile">
                                    <img src="https://cdn.shopify.com/s/files/1/0221/7879/1524/files/photo_4_270x270.jpg?v=1548247407" alt="">
                                    <div class="t_info mt-2">
                                        <span class="">Edna Barton</span>
                                        <p class="text-base w-auto w-9/12 mt-3">
                                            Quality control manager. Her mission is to check the products we ship and settle quality issues if any
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             </main>
             <footer>
             ${Footer.render()}
             </footer>        
        `;
    },
};
export default About;