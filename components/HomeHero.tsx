import Link from 'next/link'
import Image from 'next/image'

export default function HomeHero() {
    const flexDisplay = `flex flex-col lg:flex-row gap-5 bg-backgroundGrey`;
    const mulaiSewaMobilBtn = `py-2 px-3 text-white font-semibold bg-green-500 rounded-sm`;

    return <div className={flexDisplay}>
        <div className="ml-9 lg:ml-14 xl:ml-24 2xl:ml-48 my-16 lg:my-auto flex-1">
            <h2 className="text-4xl font-bold mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <p className="max-w-md mb-6">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmuuntuk sewa mobil selama 24 jam.</p>
            <Link href='/search'><a className={mulaiSewaMobilBtn}>Mulai Sewa Mobil</a></Link>
        </div>
        <div className='lg:w-6/12'>
            <Image alt="Car" src='/images/search_page_car.png' layout='responsive' width={707} height={407} />
        </div>
    </div>
}