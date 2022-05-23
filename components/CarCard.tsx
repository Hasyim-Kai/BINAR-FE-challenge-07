import { useSelector } from "react-redux";
import Link from 'next/link'

type CarCardPropType = {
    id: number,
    name: string,
    category: string,
    price: number,
    image: string
};

export default function CarCard(props: CarCardPropType) {
    const pilihMobilBtn = `p-2.5 text-white font-semibold bg-green-500 rounded-sm flex justify-center`;
    const Cars = useSelector((state: any) => state.car)

    return <div className="bg-white mb-5 p-5 max-w-xs border-2 rounded-lg" key={props.id}>
        <img className="pt-2 px-1 mb-10 w-72 h-48" src={props.image} alt="Car" />

        <p className="mb-2 font-medium">{props.name} / {props.category}</p>
        <p className="mb-3 text-lg"><b>Rp. {props.price} / Hari</b></p>
        <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mb-3 flex text-sm"><img className="mr-2" src="/images/icons/fi_users.svg" alt="user" />{Cars.carDetail.capacity}</p>
        <p className="mb-3 flex text-sm"><img className="mr-2" src="/images/icons/fi_settings.svg" alt="car_type" />{Cars.carDetail.transmission}</p>
        <p className="mb-5 flex text-sm"><img className="mr-2" src="/images/icons/fi_calendar.svg" alt="manufactured_date" />{Cars.carDetail.manufacturDate}</p>


        <Link href={`/car-detail/${props.id}`}><a className={pilihMobilBtn}>Pilih Mobil</a></Link>
        {/* <Link href={`/car-detail/${props.id}`}><GreenButton text="Pilih Mobil" additionalStyles='text-xs w-full mt-5' /></Link> */}
    </div>
}