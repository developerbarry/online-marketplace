
const HireCard = () => {
    return (
        <section className="pt-8 pb-14">
            <div className="container mx-auto">
                <div
                    className="bg-white flex flex-col lg:flex-row overflow-hidden my-10 px-8"
                >
                    <div className="lg:w-1/2">
                        <img
                            src="https://cdn.prod.website-files.com/63becc2faa5fe5779ca9a7a5/63c04996531ee67cd1681f04_a-world-of-freelancers-talent-image-workplace-x-webflow-template-p-1080.jpg"
                            alt="Freelancer"
                            className="w-full h-full rounded-xl object-cover"
                        />
                    </div>

                    <div
                        className="lg:w-1/2 md:p-8 flex flex-col justify-between text-gray-700"
                    >
                        <h1 className="text-3xl font-bold text-gray-900 mb-8 lg:text-3xl">
                            A whole world of freelancers talent at your fingertips.
                        </h1>

                        <div className="flex items-start space-x-4 mb-6">
                            <div
                                className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full"
                            >
                                💰
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">The best for every budget</h3>
                                <p className="text-base">
                                    The best for every budget" means you can find freelancers who fit your needs, no matter how big or small your budget is. Whether you're starting small or looking for premium services, you’ll get great value for your money
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 mb-6">
                            <div
                                className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full"
                            >
                                ⏱️
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Quality work done quickly</h3>
                                <p className="text-base">
                                Quality work done quickly" ensures that you get professional and reliable results in less time. Freelancers deliver high-quality work while meeting your deadlines, so you can focus on what matters most.
                                </p>
                            </div>
                        </div>

                        <button
                            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Hire freelancer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireCard;