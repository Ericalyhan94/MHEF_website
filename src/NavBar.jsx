import { useState } from "react";
import mcgillLogo from './assets/mcgill_logo2.png'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center shadow-lg bg-red-50 font-serif_title">
        <div className="flex flex-col justify-between w-full max-w-6xl px-4 py-2">
          <div className="flex items-center  text-4xl ">

            <img src={mcgillLogo} className="w-12 md:w-16" />
            <h1 className="ml-4 text-xl font-ubuntu md:text-5xl text-red-600">McGill Hydrogen Embrittlement Facility </h1>
          </div>
          
          <div className="items-end justify-end hidden text-lg md:flex text-red-600 ">
            <Link to="/"> <button className="p-2 text-2xl">Home</button> </Link>
            <Link to="/About"> <button className="p-2 text-2xl">About</button></Link>
            <Link to="/Research"> <button className="p-2 text-2xl">Research</button></Link>
            <Link to="/People"> <button className="p-2 text-2xl">People</button></Link>
            <Link to="/Contact"> <button className="p-2 text-2xl">Contact</button></Link>

            <button className=" p-2 text-2xl">
              <i className="fa-solid fa-magnifying-glass "></i>
            </button>

          </div>
          <button className="flex items-center md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <i className="px-2 text-2xl fas fa-bars text-red-800"></i>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 flex">
          <div className="flex flex-col w-48 pt-2 pb-2 rounded-bl-lg shadow-lg bg-red-900 text-red-200">
             <Link to="/"><button className="flex justify-start  pl-8 text-sm">Home</button> </Link>
            <Link to="/About"> <button className="flex justify-start  pl-8 text-sm">About</button></Link>
            <Link to="/Research"> <button className="flex justify-start  pl-8 text-sm">Research</button> </Link>
             <Link to="/People"> <button className="flex justify-start  pl-8 text-sm">People</button></Link> 
            <Link to="/Contact"><button className="flex justify-start  pl-8 text-sm">Contact</button></Link> 
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <i className="absolute top-0 right-0 m-3 text-sm fa-solid fa-square-xmark text-red-300"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
