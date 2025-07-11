import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Layouts = () => {
    return (
        <>
            <Navbar />
            <div className="py-12 print:py-0 bg-gray-100 ">
            <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layouts