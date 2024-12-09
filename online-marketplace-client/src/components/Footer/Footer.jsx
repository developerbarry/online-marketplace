const Footer = () => {
    return (
        <footer className="bg-white font-onest py-4">
            <div className="md:border-y-2">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Logo and Description Section */}
                    <div className="md:w-[38%] md:border-r-2 pt-12 px-6 md:px-10 lg:px-14">
                        <h2 className="text-xl font-bold text-gray-900">Workplace X</h2>
                        <p className="text-gray-500 mt-4 w-[90%]">
                            Discover the perfect talent for your tech projects with our curated network of top freelancers. From web developers to creative designers, find professionals with the expertise to meet your business goals. Build your dream team and achieve success with confidence, backed by skilled and dedicated specialists!
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                                Hire freelancer
                            </button>
                            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50">
                                Apply now
                            </button>
                        </div>
                    </div>

                    <div className="md:w-[60%] flex flex-col justify-between md:flex-row pt-6 px-6 md:px-10 lg:px-14 ">

                        {/* Main Pages Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Main pages</h3>
                            <ul className="mt-4 space-y-2 text-gray-500">
                                <li>Home</li>
                                <li>Home (Sales)</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Blog Post</li>
                                <li>Freelancers</li>
                                <li>Freelancer single</li>
                                <li>Freelancer Category</li>
                            </ul>
                        </div>

                        {/* Utility Pages Section */}
                        <div className="mt-5 md:mt-0">
                            <h3 className="text-lg font-semibold text-gray-900">Utility pages</h3>
                            <ul className="mt-4 space-y-2 text-gray-500">
                                <li>Start here</li>
                                <li>Styleguide</li>
                                <li>404 Not found</li>
                                <li>Password protected</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                                <li className="text-blue-600 hover:underline">
                                    <a href="#">More Webflow Templates</a>
                                </li>
                            </ul>
                        </div>

                        {/* Freelance Categories Section */}
                        <div className="mt-5 md:mt-0">
                            <h3 className="text-lg font-semibold text-gray-900">Freelance Categories</h3>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <img src="/icons/design-icon.svg" alt="Design Icon" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium">Design</p>
                                        <a href="#" className="text-blue-600 hover:underline text-sm">
                                            Explore category →
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <img src="/icons/development-icon.svg" alt="Development Icon" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium">Development</p>
                                        <a href="#" className="text-blue-600 hover:underline text-sm">
                                            Explore category →
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <img src="/icons/marketing-icon.svg" alt="Marketing Icon" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium">Marketing</p>
                                        <a href="#" className="text-blue-600 hover:underline text-sm">
                                            Explore category →
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;




