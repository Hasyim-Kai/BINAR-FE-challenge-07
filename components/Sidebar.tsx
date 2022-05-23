import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar(): JSX.Element {
    // get the active Route path
    let isLoginPage = useRouter().pathname === '/' ? true : false
    const sidebarItem: string = `w-full p-1 text-center text-white hover:bg-blue-700`;
    const sidebarWidth: string = `w-20 bg-darkblue`;

    // if the active Route path is Login, then disable Sidebar
    return isLoginPage ? <></> : <div className={sidebarWidth}>
        <nav className={`fixed h-screen z-50 flex flex-col gap-3 items-center text-lg ${sidebarWidth}`}>
            <Link href={"/admin-dashboard"}>
                <a className="py-3">
                    <img className="mx-auto" src="/images/logo1.png" alt="logo1" />
                </a>
            </Link>
            <Link href={"/admin-dashboard"}>
                <a className={sidebarItem}>
                    <img className="mx-auto" src="/images/icons/home.svg" alt="Dashboard" />
                    <span><small><b>Dashboard</b></small></span>
                </a>
            </Link>
            <Link href={"/admin-cars"}>
                <a className={sidebarItem}>
                    <img className="mx-auto" src="/images/icons/fi_truck.svg" alt="Cars" />
                    <span><small><b>Cars</b></small></span>
                </a>
            </Link>
        </nav>
        <div className={sidebarWidth}></div>
    </div>
}