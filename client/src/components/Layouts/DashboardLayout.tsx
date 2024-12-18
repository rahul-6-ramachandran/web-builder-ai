import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Sidebar from "../Dashboard/Sidebar";
import '../../App.css'

export default function Dashboard() {
    return (
        <>
            <div>


                <NavBar />
                <div className="flex flex-col gap-3 px-4 bg-black overflow-auto">

                    <div className="h-full bg-black w-1/6   py-5  fixed w-full left-0 z-40   text-white  flex flex-row items-center  ">


                        <Sidebar />

                    </div>



                    <div className="flex-1 ml-[16.67%] p-5  bg-black">
                        <div className="w-full items-center p-5 rounded-lg h-full border border-slate-800 ">
                            <Outlet />
                        </div>
                    </div>

                </div>



            </div>



        </>
    )
}