import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
function Layout() {
    return (
        <div className=" w-full h-[100%] bg-gray-50">
            <div className="grid grid-cols-12 h-full sm:grid-cols-12">
                <div className=" col-span-2 h-full flex border-r border- flex-col justify-between  bg-white p-8">
                    <Sidebar />
                </div>
                <div className=" col-span-10 sm:col-span-10  flex justify-center  p-8 m-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout