import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LeftMenu(): JSX.Element {
    const leftMenuStyle: string = `flex flex-col lg:w-full w-0 text-lg overflow-hidden bg-white`;
    const sidebarItem: string = `px-7 py-3 hover:bg-primaryGrey`;

    const dashboardLeftMenu: JSX.Element = <nav className={leftMenuStyle}>
        <h6 className="p-6 text-xl font-bold text-gray-400">DASHBOARD</h6>
        <hr />
        <Link href={"/admin-dashboard"}><a className={sidebarItem}>Dashboard</a></Link>
    </nav>

    const carsLeftMenu: JSX.Element = <nav className={leftMenuStyle}>
        <h6 className="p-6 text-xl">CARS</h6>
        <hr />
        <Link href={"/admin-cars"}><a className={sidebarItem}>List Car</a></Link>
    </nav>

    // if the active Route path is Login, then disable Sidebar
    const currentRoute = useRouter().pathname;
    if (currentRoute === '/admin-dashboard') {
        return dashboardLeftMenu;
    } else {
        return carsLeftMenu;
    }
}