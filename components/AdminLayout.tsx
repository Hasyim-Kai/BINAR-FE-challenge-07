import AdminNavbar from "./AdminNavbar";
import LeftMenu from "./LeftMenu"
import Sidebar from "./Sidebar"

type Props = {
    children?: JSX.Element | JSX.Element[];
}

export default function AdminLayout({ children }: Props) {
    return <>
        <div className="flex">
            <Sidebar />
            <div className="grow">
                <AdminNavbar />
                <div className="grid grid-cols-6">
                    <LeftMenu />
                    <section className="bg-backgroundGrey p-10 min-h-screen col-span-5">
                        {children}
                    </section>
                </div>
            </div>
        </div>
    </>
}