import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";
import { formatDistanceToNow } from 'date-fns';
import useAuth from "../../hookes/useAuth";
import toast, { Toaster } from 'react-hot-toast';


const JobDetails = () => {

    const { user } = useAuth();
    const [job, setJob] = useState(null);
    const secure = useAxiosSecure();
    const param = useParams();
    const navigate = useNavigate();


    let timeLeft;
    if (job?.deadline) {
        timeLeft = formatDistanceToNow(new Date(job?.deadline), { addSuffix: true });

    }

    useEffect(() => {
        const individualData = async () => {
            try {
                const result = await secure.get(`/job/${param?.id}`)
                setJob(result.data)
            }
            catch (error) {
                console.log(error)
            }
        }

        if (param?.id) {
            individualData()

        }

    }, [param?.id])

    // Here, I need to check if the user has already applied. If they have, they can't apply again.
    const handleApplyJob = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const job_title = job?.job_title;
        const name = form.get('name');
        const email = user?.email;
        const price = form.get('price');
        const bidPrice = price.toString(price);
        const dateline = form.get('deadline');
        const bid_message = form.get('message');
        const job_category = job?.job_categories;
        const status = 'pending';
        const buyer_info = {
            name: job?.buyer_info?.name,
            email: job?.buyer_info?.email,
        }

        if (job?.buyer_info?.email === user?.email) {
            toast.error("You cannot apply for your own job!");
            return;
        }

        if (job?.applicants?.includes(freelancer_email)) {
            toast.error("You have already submitted a bid for this job.");
            return;
        }

        if (bidPrice <= job?.hourly_rate?.min) {
            toast.error("Please increase your price!");
            return;
        } else if (bidPrice >= job?.hourly_rate?.max) {
            toast.error("Please enter a price less than the maximum.");
            return;
        }

        if (dateline <= job?.deadline) {
            toast.error("Input a Valid Date!");
            return;
        }

        const newBid = { job_title, name, email, bidPrice, dateline, bid_message, job_category, buyer_info, status };

        try {
            const result = await secure.post('/bid', newBid);
            if (result.data.insertedId) {
                toast.success('Successfully Bid!');
                navigate('/my-bids')
            }
        } catch (error) {
            toast.error('Something went wrong!');
        }
    }




    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-6 md:py-14 font-onest">
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl mb-2">
                            {job?.job_title}
                        </h2>
                        <p className="text-gray-500 text-sm mb-4">Posted {timeLeft} ago • Worldwide</p>
                        <p className="text-gray-600 text-sm md:text-base mb-4">
                            {job?.description}
                        </p>
                        <div className="border-t border-gray-200 pt-4 grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8m-4-8v8m0-8V8m0-4V8m0 4V4" />
                                </svg>
                                <p className="text-gray-700 text-sm">Less than {job?.estimated_time?.hours_per_week}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h12M8 6h12m-6 6V4" />
                                </svg>
                                <p className="text-gray-700 text-sm">{job?.estimated_time?.duration}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8m0-8h-8m8 4H8m0-8h8m-8 12h8" />
                                </svg>
                                <p className="text-gray-700 text-sm">${job?.hourly_rate?.min}.00-${job?.hourly_rate?.max}.00</p>
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
                                <p className="text-gray-700 text-sm">{job?.job_level}</p>
                            </div>

                        </div>

                        <div className="flex items-center mt-8">
                            <img src={job?.buyer_info?.photo} alt="Profile" className="w-12 h-12 rounded-full" />
                            <div className="ml-4">
                                <p className="text-lg font-bold">{job?.buyer_info?.name}</p>
                                <p className="text-sm text-gray-500">{job?.buyer_info?.email}</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Apply for the Job</h2>
                        <form
                            onSubmit={handleApplyJob}
                            className="space-y-4">
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" required placeholder="Enter your name"
                                        className="mt-1 px-4 py-1.5 px-4 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" defaultValue={user?.email} disabled required placeholder="Enter your email"
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

                        <Toaster />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;