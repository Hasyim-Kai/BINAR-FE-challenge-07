import Link from 'next/link'
import Image from 'next/image'
import Accordion from "../components/Accordion";
import DoughnutChart from "../components/DoughnutChart";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NextHead from '../components/NextHead';
import HomeHero from '../components/HomeHero';

export default function HomePage() {
    const mulaiSewaMobilBtn = `py-2 px-3 text-white font-semibold bg-green-500 rounded-sm`;

    return <>
        <NextHead title='Home' />
        <Navbar />
        <HomeHero />
        

        {/* <!-- GIRL --> */}
        <section className="mt-20 flex justify-center gap-20 items-center flex-wrap" id="services">
            <div className='lg:w-4/12'>
                <Image alt="girl" src='/images/img_service.png' layout='responsive' width={100} height={100} />
            </div>
            {/* <img src="./images/img_service.png" className="" alt="girl" /> */}
            <div className="max-w-md">
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

        <DoughnutChart />

        <TestimonialCarousel />

        {/* <!-- BANNER --> */}
        <section className="max-w-5xl mx-auto my-32">
            <div className="bg-darkblue container py-16 rounded-lg text-white text-center">
                <h1 className='font-semibold text-4xl'>Sewa Mobil di Malang Sekarang</h1>
                <p className='text-sm font-light mt-6 mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor<br />incididunt ut labore et
                    dolore magna aliqua.</p>
                <Link href='/search'><a className={mulaiSewaMobilBtn}>Mulai Sewa Mobil</a></Link>
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
        <Footer />
    </>
}