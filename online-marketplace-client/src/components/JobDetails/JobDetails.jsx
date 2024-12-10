import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";

const JobDetails = () => {

    const [job, setJob] = useState({});
    const secure = useAxiosSecure();
    const param = useParams();

    useEffect(() => {
        const individualData = async() => {
            const result = await secure.get(`/jobs/${param?.id}`)
            console.log(result)
            setJob(result.data)
        }

        individualData()
    },[])


    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-6 md:py-14 font-onest">
                    <div className="w-full">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            AWS Solutions Architect Needed for Cloud Infrastructure Design
                        </h2>
                        <p className="text-gray-500 text-sm mb-4">Posted 22 seconds ago • Worldwide</p>
                        <p className="text-gray-600 text-sm mb-4">
                            We are seeking an experienced AWS Solutions Architect to design and implement robust cloud
                            infrastructure solutions for our organization. The ideal candidate will have a deep understanding
                            of AWS services and best practices to optimize performance, scalability, and security. You will
                            work closely with our development team to ensure seamless integration and deployment. If you have
                            a proven track record of delivering AWS solutions, we would love to hear from you!
                        </p>
                        <div className="border-t border-gray-200 pt-4 grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8m-4-8v8m0-8V8m0-4V8m0 4V4" />
                                </svg>
                                <p className="text-gray-700 text-sm">Less than 30 hrs/week</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h12M8 6h12m-6 6V4" />
                                </svg>
                                <p className="text-gray-700 text-sm">1-3 months</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8m0-8h-8m8 4H8m0-8h8m-8 12h8" />
                                </svg>
                                <p className="text-gray-700 text-sm">$40.00-$75.00</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H8m0-8H8m8 4H8m0-8H8" />
                                </svg>
                                <p className="text-gray-700 text-sm">Remote Job</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8m0-8H8m8 4H8m8-8H8" />
                                </svg>
                                <p className="text-gray-700 text-sm">Expert</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8m0-8H8m8 4H8m8-8H8" />
                                </svg>
                                <p className="text-gray-700 text-sm">Ongoing project</p>
                            </div>

                            <div className="flex items-center mb-4">
                                <img src="https://via.placeholder.com/50" alt="Profile" className="w-12 h-12 rounded-full" />
                                <div className="ml-4">
                                    <p className="text-lg font-bold">John Doe</p>
                                    <p className="text-sm text-gray-500">john.doe@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Apply for the Job</h2>
                        <form action="#" method="POST" className="space-y-4">
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" required placeholder="Enter your name"
                                        className="mt-1 px-4 py-1.5 px-4 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" required placeholder="Enter your email"
                                        className="mt-1 px-4 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="price" className="block text-base font-medium text-gray-700">Proposed Price ($)</label>
                                    <input type="number" id="price" name="price" required placeholder="Enter your price"
                                        className="mt-1 px-4 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900" />
                                </div>

                                <div>
                                    <label htmlFor="deadline" className="block text-base font-medium text-gray-700">Deadline</label>
                                    <input type="date" id="deadline" name="deadline" required
                                        className="mt-1 px-4 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900" />
                                </div>
                            </div>


                            <div>
                                <label htmlFor="message" className="block text-base font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" required placeholder="Write a message to the client"
                                    className="mt-1 px-4 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"></textarea>
                            </div>



                            <div>
                                <button type="submit"
                                    className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Place Bid
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;