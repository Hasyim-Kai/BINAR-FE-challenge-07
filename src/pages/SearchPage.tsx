import SearchMenu from "../components/SearchMenu";

export default function SearchPage() {
    const flexDisplay = `flex flex-col lg:flex-row gap-5  bg-backgroundGrey`;

    return <>
        <div className={flexDisplay}>
            <div className="ml-9 lg:ml-14 xl:ml-24 2xl:ml-48 my-16 lg:my-auto flex-1">
                <h2 className="text-4xl font-bold mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                <p className="max-w-md">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmuuntuk sewa mobil selama 24 jam.</p>
            </div>
            <img className="flex-1" src="./images/search_page_car.png" alt="Car" />
        </div>

        {/* SEARCH SECTION */}
        <SearchMenu />
    </>
}