
const HeroSection = () => {
    return (
        <section>
            <div className="bg-[#EEF3FA]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between px-6 py-16">
                        <div className="w-full md:w-1/3 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                                Hire the best freelancers in the tech industry
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit magnis convallis lacinia urna semper ac lorem viverra.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                                    Hire Freelancer
                                </button>
                                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">
                                    Apply as Freelancer
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-3/5">
                            <img src="https://i.ibb.co.com/7zCZggv/bg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;