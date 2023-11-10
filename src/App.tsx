import { Outlet } from "react-router-dom"
import Navbar from "./components/Nabvar"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
