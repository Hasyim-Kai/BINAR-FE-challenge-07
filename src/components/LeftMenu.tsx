import { Link, useLocation } from "react-router-dom";

export default function LeftMenu(): JSX.Element {
    const leftMenuStyle: string = `flex flex-col lg:w-full w-0 text-lg overflow-hidden bg-white`;
    const sidebarItem: string = `px-7 py-3 hover:bg-primaryGrey`;

    const dashboardLeftMenu: JSX.Element = <nav className={leftMenuStyle}>
        <h6 className="p-6 text-xl font-bold text-gray-400">DASHBOARD</h6>
        <hr />
        <Link to={"/admin-dashboard"} className={sidebarItem}><b>Dashboard</b></Link>
    </nav>

    const carsLeftMenu: JSX.Element = <nav className={leftMenuStyle}>
        <h6 className="p-6 text-xl">CARS</h6>
        <hr />
        <Link to={"/admin-cars"} className={sidebarItem}><b>List Car</b></Link>
    </nav>

    // if the active Route path is Login, then disable Sidebar
    const currentRoute = useLocation().pathname;
    if (currentRoute === '/admin-dashboard') {
        return dashboardLeftMenu;
    } else {
        return carsLeftMenu;
    }
}