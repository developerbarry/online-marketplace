import { Link, NavLink } from "react-router";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import { useState } from "react";

const Header = () => {

    const [display, setDisplay] = useState(false)
    return (
        <>
            <header className="bg-white shadow font-onest">
                <div className="relative container mx-auto">
                    <div className=" flex items-center justify-between px-6 py-6">
                        <Link to={'/'}><h2 className="text-3xl font-bold text-blue-600">Workplace X</h2>
                        </Link>
                        <nav className="hidden md:block space-x-6">
                            <a href="#" className="text-gray-600 text-base font-medium hover:text-blue-600">Home</a>
                            <a href="#" className="text-gray-600 text-base font-medium hover:text-blue-600">About</a>
                            <a href="#" className="text-gray-600 text-base font-medium hover:text-blue-600">Blog</a>
                            <a href="#" className="text-gray-600 text-base font-medium hover:text-blue-600">Pages</a>
                            <a href="#" className="text-gray-600 text-base font-medium hover:text-blue-600">Cart (0)</a>
                        </nav>

                        <div className="hidden md:block flex space-x-4">
                            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50">
                                Apply now
                            </button>

                            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                                Hire freelancer
                            </button>
                        </div>

                        <button onClick={() => setDisplay(!display)} className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></button>

                        {/* <ProfileDropDown /> */}
                    </div>
                </div>



                <div className={`${display ? '' : 'hidden'} relative z-50`}>
                    <div
                        className="fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 font-yan flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-5">
                            <Link className="mr-auto text-3xl font-bold leading-none">
                                <h2 className="text-2xl font-bold text-blue-600">Workplace X</h2>
                            </Link>
                            <button
                                onClick={() => setDisplay(false)}
                            >
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <NavLink to={'/'} className="block p-3 text-base font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-blue-600 rounded">Home</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-3 text-base font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-blue-600 rounded">About</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-3 text-base font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-blue-600 rounded">Blog</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-3 text-base font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-blue-600 rounded">Pages</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-3 text-base font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-blue-600 rounded">Contact</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="flex space-x-4 mt-3">
                            <button className="border border-blue-600 text-sm text-blue-600 px-3 py-3 rounded-full hover:bg-blue-50">
                                Apply now
                            </button>

                            <button className="bg-blue-600 text-white text-sm px-3 py-3 rounded-full hover:bg-blue-700">
                                Hire freelancer
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;