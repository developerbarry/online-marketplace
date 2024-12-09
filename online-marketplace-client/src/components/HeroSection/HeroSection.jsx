
const HeroSection = () => {
    return (
        <section>
            <div className="bg-[#EEF3FA]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap flex-col-reverse items-center justify-between md:flex-row font-onest px-6 py-16">
                        <div className="w-full mt-6 md:mt-0 md:w-2/5 space-y-7">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-loose">
                                Hire the best freelancers in the tech industry
                            </h2>
                            <p className="text-gray-600">
                            Connect with top freelancers in the tech industry who specialize in delivering high-quality solutions for your business needs. Whether you are looking for developers, designers, or tech experts, hire the best professionals to bring your projects to life. Get reliable, skilled talent to help you succeed!
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700">
                                    Hire Freelancer
                                </button>
                                <button className="border border-blue-600 text-blue-600 px-4 py-3 rounded-md hover:bg-blue-50">
                                    Apply as Freelancer
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-3/5">
                            <img src="https://i.ibb.co.com/LhcBM3X/bg2.png" className="mx-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;