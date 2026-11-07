import { NoticeBar } from "./components/NoticeBar"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"

const App = () => {
  return (
    <div className="bg-[#070B14] text-white min-h-screen w-full flex flex-col font-sans selection:bg-[#F5B942] selection:text-black">
      <NoticeBar />
      <NavBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App