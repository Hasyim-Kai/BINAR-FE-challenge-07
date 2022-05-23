import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import AdminLayout from "../components/AdminLayout";
import CarTable from "../components/CarTable";
import OrderTable from "../components/OrderTable";

export default function AdminDashboard(): JSX.Element {
    return <AdminLayout>
        {/* BREADCRUMB */}
        <ol className="flex items-center mb-7 space-x-1 md:space-x-3" aria-label="Breadcrumb">
            <li><Link to='/dashboard'><b>Dashboard</b></Link></li>
            <li className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <Link to='/dashboard' className="ml-1 md:ml-2">Dashboard</Link>
            </li>
        </ol>

        <h1 className="text-2xl mb-8"><b>Dashboard</b></h1>
        <OrderTable />
        <CarTable />
    </AdminLayout>
}