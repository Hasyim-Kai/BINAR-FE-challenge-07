import { Link, useLocation } from "react-router-dom";
import GreenButton from "./GreenButton";

export default function SearchMenu() {
    const currentRoute = useLocation().pathname;
    let isDetailPage = currentRoute.includes('car-rent-detail') ? true : false

    const flexDisplay = `flex gap-3 flex-col lg:flex-row justify-around lg:items-end`;
    const inputStyle = `py-1.5 px-2 border border-gray-300 w-full rounded`;
    const labelStyle = `mb-2 text-sm`;
    const divStyle = `flex-1`;

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
        <Link to='/search-result'><GreenButton text='Cari Mobil' additionalStyles="" /></Link>
    </section>
}