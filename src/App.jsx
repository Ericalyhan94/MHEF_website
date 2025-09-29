import NavBar from "./NavBar";
import HomePage from "./HomePage";
import PageAbout from "./PageAbout";
import PageResearch from "./PageResearch";
import PagePeople from "./PagePeople";
import PageContact from "./PageContact";
import NavBar2 from "./NavBar2";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




export default function App() {


  return (
    <BrowserRouter>
      <>
        <div className="text-3xl">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<PageAbout />} />
            <Route path="/Research" element={<PageResearch />} />
            <Route path="/People" element={<PagePeople />} />
            <Route path="/Contact" element={<PageContact />} />

          </Routes>
          <NavBar2 />
        </div>
      </>
    </BrowserRouter>
  )
}