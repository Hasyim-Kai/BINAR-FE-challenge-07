import { useRouter } from 'next/router'
import Link from 'next/link'

export default function SearchMenu() {
    const currentRoute = useRouter().pathname;
    let isDetailPage = currentRoute.includes('car-detail') ? true : false

    const flexDisplay = `flex gap-3 flex-col lg:flex-row justify-around lg:items-end`;
    const inputStyle = `py-1.5 px-2 border border-gray-300 w-full rounded`;
    const labelStyle = `mb-2 text-sm`;
    const divStyle = `flex-1`;
    const cariMobilBtn = `py-2 px-3 text-white font-semibold bg-green-500 rounded-sm`;

    return <section className={`${flexDisplay} relative z-50 bg-white -mt-12 lg:w-9/12 lg:mx-auto mx-7 rounded-lg shadow-lg p-6`}>
        <div className={divStyle}>
            <p className={labelStyle}>Tipe Driver</p>
            <select className={inputStyle} name="TipeDriver" disabled={isDetailPage}>
                <option value="1">Dengan Supir</option>
                <option value="2">Tanpa Supir ( Lepas Kunci )</option>
            </select>
        </div>
        <div className={divStyle}>
            <p className={labelStyle}>Tanggal</p>
            <input className={inputStyle} type="date" name="Tanggal" id="Tanggal" disabled={isDetailPage} />
        </div>
        <div className={divStyle}>
            <p className={labelStyle}>Waktu Jemput/Ambil</p>
            <input className={inputStyle} type="time" name="WaktuJemputAmbil" disabled={isDetailPage} />
        </div>
        <div className={divStyle}>
            <p className={labelStyle}>Jumlah Penumpang (Opsional)</p>
            <input className={inputStyle} type="number" name="JumlahPenumpang" placeholder="Jumlah Penumpang" disabled={isDetailPage} />
        </div>
        <Link href='/search-result'><a className={cariMobilBtn}>Cari Mobil</a></Link>
    </section>
}