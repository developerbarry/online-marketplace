import { useEffect, useState } from "react";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";
import useAuth from "../../hookes/useAuth";
import toast, { Toaster } from 'react-hot-toast';
import { useMutation, useQuery } from "@tanstack/react-query";
import Loder from "../../privateRoute/Loder";


const BidRequests = () => {
    const { user } = useAuth();
    // const [bids, setBids] = useState([]);
    const secure = useAxiosSecure();


    const { data: bids = [], error: queryError, isError: isQueryError, isLoading: isQueryLoading } = useQuery({
        queryKey: ['bids', user?.email], queryFn: async () => {
            const result = await secure.get(`/bids/buyer?email=${user?.email}`);
            return result.data;
        }
    })


    const { mutateAsync, isLoading: isMutationLoading, isError: isMutationError, error: mutationError } = useMutation({
        mutationFn: async ({ id, status }) => {
            const result = await secure.patch(`/bid/${id}`, { status })
            return result.data
        },
        onSuccess: () => {
            toast.success("Updated");

        }
    })


    if (isQueryLoading || isMutationLoading) {
        return <Loder />; // Show loading state if either query or mutation is loading
    }

    if (isQueryError || isMutationError) {
        // Handle errors from either query or mutation
        return toast.error(queryError?.message || mutationError?.message || "An error occurred");
    }



    // useEffect(() => {
    //     const bidRequests = async () => {
    //         try {
    //             const result = await secure.get(`/bids/buyer?email=${user?.email}`)
    //             // console.log(result.data)
    //             setBids(result.data)
    //         }
    //         catch (error) {
    //             toast.error("Something went Wrong!")
    //         }
    //     }

    //     if (user?.email) {
    //         bidRequests()
    //     }
    // }, [user?.email])

    // console.log(bids)


    const handleAccept = async (id, prevStatus, status) => {

        console.log(id, prevStatus, status)
        if (prevStatus === status) {
            toast.error("Already Accepted")
            return;
        }

        await mutateAsync({ id, status })
    }


    const handleReject = async (id, prevStatus, status) => {
        if (prevStatus === status) {
            toast.error("Already Rejected");
            return;
        }

        try {

            const result = await secure.patch(`/bid/${id}`, { status })
            if (result.data.modifiedCount > 0) {
                const remaining = bids.filter(bid => bid._id !== id);
                const match = bids.find(bid => bid._id === id);
                match.status = 'Rejected';
                const newBids = [match, ...remaining]
                setBids(newBids)
                toast.success("Rejected")
            }
        }
        catch (error) {
            toast.error("Something went wrong")
        }
    }


    return (
        <section>
            <div className="container mx-auto">
                <div className="px-4 pt-12 font-onest min-h-[calc(100vh-72px)]">
                    <div className='flex items-center gap-x-3'>
                        <h2 className='text-lg font-medium text-gray-800 '>Bid Requests</h2>

                        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                            {bids?.length} Requests
                        </span>
                    </div>

                    <div className='flex flex-col mt-6'>
                        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                    <table className='min-w-full divide-y divide-gray-200'>
                                        <thead className='bg-gray-50'>
                                            <tr>
                                                <th
                                                    scope='col'
                                                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <div className='flex items-center gap-x-3'>
                                                        <span>Title</span>
                                                    </div>
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <div className='flex items-center gap-x-3'>
                                                        <span>Email</span>
                                                    </div>
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <span>Deadline</span>
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <button className='flex items-center gap-x-2'>
                                                        <span>Price</span>
                                                    </button>
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    Category
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    Status
                                                </th>

                                                <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200 '>
                                            {
                                                bids.map(bid => (
                                                    <tr key={bid._id}>
                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {bid?.job_title}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {bid?.email}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {bid?.dateline}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            ${bid?.bidPrice}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center gap-x-2'>
                                                                <p
                                                                    className={`px-3 py-1 rounded-full ${bid?.job_category === 'Web Development' &&
                                                                        'text-blue-500 bg-blue-100/60'
                                                                        } ${bid?.job_category === 'Graphics Design' &&
                                                                        'text-emerald-500 bg-emerald-100/60'
                                                                        } ${bid?.job_category === 'Digital Marketing' &&
                                                                        'text-pink-500 bg-pink-100/60'
                                                                        } text-xs`}
                                                                >
                                                                    {bid?.job_category}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                            <div
                                                                className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${bid.status === 'pending' &&
                                                                    'bg-yellow-100/60 text-yellow-500'
                                                                    } ${bid.status === 'In Progress' &&
                                                                    'bg-blue-100/60 text-blue-500'
                                                                    } ${bid.status === 'Complete' &&
                                                                    'bg-emerald-100/60 text-emerald-500'
                                                                    } ${bid.status === 'Rejected' &&
                                                                    'bg-red-100/60 text-red-500'
                                                                    } `}
                                                            >
                                                                <span
                                                                    className={`h-1.5 w-1.5 rounded-full ${bid.status === 'pending' && 'bg-yellow-500'
                                                                        } ${bid.status === 'In Progress' && 'bg-blue-500'
                                                                        } ${bid.status === 'Complete' && 'bg-green-500'} ${bid.status === 'Rejected' && 'bg-red-500'
                                                                        }  `}
                                                                ></span>
                                                                <h2 className='text-sm font-normal '>{bid.status}</h2>
                                                            </div>
                                                        </td>
                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center gap-x-6'>
                                                                {/* Accept Button: In Progress */}
                                                                <button
                                                                    onClick={() => handleAccept(bid?._id, bid?.status, "In Progress")}
                                                                    disabled={bid?.status === 'Complete'}
                                                                    className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                                                                >
                                                                    <svg
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        fill='none'
                                                                        viewBox='0 0 24 24'
                                                                        strokeWidth='1.5'
                                                                        stroke='currentColor'
                                                                        className='w-5 h-5'
                                                                    >
                                                                        <path
                                                                            strokeLinecap='round'
                                                                            strokeLinejoin='round'
                                                                            d='m4.5 12.75 6 6 9-13.5'
                                                                        />
                                                                    </svg>
                                                                </button>
                                                                {/* Reject Button */}
                                                                <button
                                                                    onClick={() => handleReject(bid?._id, bid?.status, "Rejected")}
                                                                    disabled={bid.status === 'Complete'}
                                                                    className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                                                                >
                                                                    <svg
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        fill='none'
                                                                        viewBox='0 0 24 24'
                                                                        strokeWidth='1.5'
                                                                        stroke='currentColor'
                                                                        className='w-5 h-5'
                                                                    >
                                                                        <path
                                                                            strokeLinecap='round'
                                                                            strokeLinejoin='round'
                                                                            d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Toaster />
                </div>
            </div>

        </section>
    );
};

export default BidRequests;