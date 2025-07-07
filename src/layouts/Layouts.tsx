import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Layouts = () => {
    return (
        <>
            <Navbar />
            <div className="py-12">
            <Outlet />

            </div>
            <Footer />
        </>
    )
}

export default Layouts