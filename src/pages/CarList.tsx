import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import CarCard from "../components/CarCard";
import { fetchCars } from "../redux/car/carAction";

export default function CarList(): JSX.Element {
    let { isAddCarSuccess } = useParams();
    const [SuccessAlert, setSuccessAlert] = useState(false)

    const Cars = useSelector((state: RootStateOrAny) => state.car)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCars())
        if (isAddCarSuccess === `true`) { setSuccessAlert(true) }
    }, [])

    const filterBtn = `px-3 py-2 border-2 border-gray-400 text-gray-400 bg-white rounded hover:border-darkblue hover:text-darkblue hover:bg-blue-200`;
    const successAlert: JSX.Element = <div className="font-bold p-4 mb-4 text-white bg-green-600 border shadow-lg rounded-lg w-7/12 mx-auto flex justify-between" role="alert">
        <p>Add Car Success!</p> <button className="" onClick={() => setSuccessAlert(false)}>X</button>
    </div>

    return <AdminLayout>
        {isAddCarSuccess && SuccessAlert ? successAlert : <></>}

        {/* BREADCRUMB */}
        <ol className="flex items-center mb-7 space-x-1 md:space-x-3" aria-label="Breadcrumb">
            <li><Link to='/admin-cars'><b>Cars</b></Link></li>
            <li className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <Link to='/admin-cars' className="ml-1 md:ml-2">List Cars</Link>
            </li>
        </ol>

        {/* <!-- TITLE & ADD BUTTON --> */}
        <div className="flex justify-between mb-3">
            <h1 className="text-2xl"><b>List Car</b></h1>
            <Link to='addCar'>
                <button className="bg-darkblue flex gap-2 px-3 py-2 text-white">
                    <img src="/images/icons/fi_plus.svg" alt="Plus" /> Add New Car
                </button>
            </Link>
        </div>

        {/* <!-- FILTER BUTTON GROUP --> */}
        <div className="flex gap-4 mb-7">
            <button className="px-3 py-2 border-2 border-darkblue text-darkblue bg-blue-200 rounded"><b>All</b></button>
            <button className={filterBtn}><b>Small</b></button>
            <button className={filterBtn}><b>Medium</b></button>
            <button className={filterBtn}><b>Large</b></button>
        </div>

        <section className="flex gap-2 justify-center flex-wrap">
            {Cars?.cars.map((car: any) => <CarCard id={car[`id`]} name={car[`name`]} category={car[`category`]} price={car[`price`]} image={car[`image`]} />)}
        </section>
    </AdminLayout>
}