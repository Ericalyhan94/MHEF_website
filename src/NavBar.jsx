import { useState } from "react";
import mcgillLogo from './assets/mcgill_logo2.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <div className="flex justify-center shadow-lg bg-red-50 font-serif_title">
                <div className="w-full max-w-6xl px-4 py-2">
                    {/* --- 第一行：Logo、标题和移动端汉堡包按钮 --- */}
                    <div className="flex items-center justify-between">
                        {/* Logo 和标题 */}
                        <div className="flex items-center">
                            <img src={mcgillLogo} className="w-12 md:w-16" alt="McGill Logo" />
                            <h1 className="ml-4 text-xl font-ubuntu md:text-5xl text-red-600">
                                McGill Hydrogen Embrittlement Facility
                            </h1>
                        </div>

                        {/* 移动端汉堡包按钮 (只在小屏幕显示) */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
                                <i className="text-3xl fas fa-bars text-red-800"></i>
                            </button>
                        </div>
                    </div>

                    {/* --- 第二行：桌面端导航链接 --- */}
                    {/* 这个 div 在移动端会通过 'hidden' 被隐藏，在桌面端通过 'md:flex' 显示 */}
                    <div className="hidden md:flex justify-end items-center text-lg text-red-600 mt-2">
                        <Link to="/" className="p-2 text-2xl hover:text-red-800">Home</Link>
                        <Link to="/About" className="p-2 text-2xl hover:text-red-800">About</Link>
                        <Link to="/Research" className="p-2 text-2xl hover:text-red-800">Research</Link>
                        <Link to="/People" className="p-2 text-2xl hover:text-red-800">People</Link>
                        <Link to="/Contact" className="p-2 text-2xl hover:text-red-800">Contact</Link>
                        <button className="p-2 text-2xl hover:text-red-800">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* --- 增大了的移动端弹出菜单 --- */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 bg-red-900 text-red-200">
                    {/* 关闭按钮 */}
                    <button onClick={closeMobileMenu} className="absolute top-4 right-4 p-2">
                        <i className="text-4xl fa-solid fa-square-xmark text-red-300"></i>
                    </button>

                    {/* 菜单链接 */}
                    <Link to="/" onClick={closeMobileMenu} className="text-3xl font-bold hover:text-white">Home</Link>
                    <Link to="/About" onClick={closeMobileMenu} className="text-3xl font-bold hover:text-white">About</Link>
                    <Link to="/Research" onClick={closeMobileMenu} className="text-3xl font-bold hover:text-white">Research</Link>
                    <Link to="/People" onClick={closeMobileMenu} className="text-3xl font-bold hover:text-white">People</Link>
                    <Link to="/Contact" onClick={closeMobileMenu} className="text-3xl font-bold hover:text-white">Contact</Link>
                </div>
            )}
        </>
    );
};

export default Navbar;