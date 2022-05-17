import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";
import GreenButton from "../components/GreenButton";
import Navbar from "../components/Navbar";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function HomePage() {
    const flexDisplay = `flex flex-col lg:flex-row gap-5 bg-backgroundGrey`;

    return <>
        <div className={flexDisplay}>
            <div className="ml-9 lg:ml-14 xl:ml-24 2xl:ml-48 my-16 lg:my-auto flex-1">
                <h2 className="text-4xl font-bold mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                <p className="max-w-md">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmuuntuk sewa mobil selama 24 jam.</p>
                <GreenButton text="Mulai Sewa Mobil" additionalStyles="mt-5" />
            </div>
            <img className="flex-1" src="./images/search_page_car.png" alt="Car" />
        </div>

        {/* <!-- GIRL --> */}
        <section className="mt-20 flex justify-center gap-20 items-center flex-wrap" id="services">
            <img src="./images/img_service.png" className="" alt="girl" />
            <div className="max-w-lg">
                <h3 className="mb-5 font-bold text-2xl">Best Car Rental for any kind of trip in Malang!</h3>
                <p className="mb-5 text-sm">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
                    mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <p className="mb-4">
                    <img src="./images/icons/check.svg" className="mr-4 inline-block" alt="" />
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
                <p className="mb-4">
                    <span><img src="./images/icons/check.svg" className="mr-4 inline-block" alt="" /></span>
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
                <p className="mb-4">
                    <span><img src="./images/icons/check.svg" className="mr-4 inline-block" alt="" /></span>
                    Sewa Mobil Jangka Panjang Bulanan
                </p>
                <p className="mb-4">
                    <span><img src="./images/icons/check.svg" className="mr-4 inline-block" alt="" /></span>
                    Gratis Antar - Jemput Mobil di Bandara
                </p>
                <p className="mb-4">
                    <span><img src="./images/icons/check.svg" className="mr-4 inline-block" alt="" /></span>
                    Layanan Airport Transfer / Drop In Out
                </p>
            </div>
        </section>

        {/* <!-- FEATURES --> */}
        <section className="max-w-5xl mx-auto mt-20">
            <div className="mb-4">
                <h3 className="mb-5 font-bold text-2xl">Why Us?</h3>
                <p className="mb-10">Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="flex gap-7 flex-col lg:flex-row">
                <div className="border-2 p-5 rounded-lg lg:w-4/12">
                    <img src="./images/icons/icon_complete.svg" alt="icon" />
                    <p className="font-bold my-3">Mobil Lengkap</p>
                    <p className="text-sm">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>

                <div className="border-2 p-5 rounded-lg lg:w-4/12">
                    <img src="./images/icons/icon_price.svg" alt="icon" />
                    <p className="font-bold my-3">Harga Murah</p>
                    <p className="text-sm">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>

                <div className="border-2 p-5 rounded-lg lg:w-4/12">
                    <img src="./images/icons/icon_24hrs.svg" alt="icon" />
                    <p className="font-bold my-3">Layanan 24 Jam</p>
                    <p className="text-sm">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>

                <div className="border-2 p-5 rounded-lg lg:w-4/12">
                    <img src="./images/icons/icon_professional.svg" alt="icon" />
                    <p className="font-bold my-3">Sopir Professional</p>
                    <p className="text-sm">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
            </div>
        </section>

        <TestimonialCarousel />

        {/* <!-- BANNER --> */}
        <section className="max-w-5xl mx-auto my-32">
            <div className="bg-darkblue container py-16 rounded-lg text-white text-center">
                <h1 className='font-semibold text-4xl'>Sewa Mobil di Malang Sekarang</h1>
                <p className='text-sm font-light mt-6 mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor<br />incididunt ut labore et
                    dolore magna aliqua.</p>
                <GreenButton text="Mulai Sewa Mobil" additionalStyles="" />
            </div>
        </section>


        {/* <!-- FAQ --> */}
        <section className="max-w-5xl mx-auto flex gap-24 flex-col lg:flex-row">
            <div className="lg:w-4/12">
                <h2 className="mb-5 font-bold text-2xl">Frequently Asked Question</h2>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            {/* <!-- FAQ Section --> */}
            <div className="grow">
                <Accordion title='Apa saja syarat yang dibutuhkan?' />
                <Accordion title='Berapa hari minimal sewa mobil lepas kunci?' />
                <Accordion title='Berapa hari sebelumnya sabaiknya booking sewa mobil?' />
                <Accordion title='Apakah Ada biaya antar-jemput?' />
                <Accordion title='Bagaimana jika terjadi kecelakaan?' />
            </div>
        </section>
    </>
}