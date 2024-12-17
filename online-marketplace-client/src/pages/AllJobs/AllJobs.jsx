import { useEffect, useState } from "react";
import useAxiosCommon from "../../useAxiosSecure/useAxiosCommon";
import JobCard from "../../components/JobCard/JobCard";

const AllJobs = () => {

    const secure = useAxiosCommon();
    const [itemJobs, setItemJobs] = useState([])
    const [counts, setCounts] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [categoryName, setCategoryName] = useState('')


    const numberOfPages = Math.ceil(counts / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()]
    console.log(pages)


    useEffect(() => {
        const jobs = async () => {
            try {
                const result = await secure.get(`/jobs?page=${currentPage}&size=${itemsPerPage}&filter=${categoryName}`)
                setItemJobs(result.data)
                
            }
            catch (error) {
                console.log(error)
            }
        }

        jobs()
    }, [currentPage, itemsPerPage, categoryName])

    console.log(itemJobs)

    useEffect(() => {
        const allItems = async () => {
            try {
                const result = await secure.get(`/jobs-count?filter=${categoryName}`)
                setCounts(result.data.result)
                setCurrentPage(0)
            }
            catch (error) {
                console.log(error)
            }
        }

        allItems()
    }, [categoryName])



    const handlePreviousBtn = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }


    const handleNextBtn = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    console.log(categoryName)



    return (
        <section>
            <div className="container mx-auto">
                <div className='px-6 py-10 min-h-[calc(100vh-306px)] flex flex-col justify-between font-onest'>
                    <div>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                            <div>
                                <select
                                    name='category'
                                    id='category'
                                    onChange={(e) => {
                                        const cate = e.target.value;
                                        setCategoryName(cate)
                                    }}
                                    value={categoryName}
                                    className='border p-4 rounded-lg'
                                >
                                    <option value=''>Filter By Category</option>
                                    <option value='Web Development'>Web Development</option>
                                    <option value='Graphics Design'>Graphics Design</option>
                                    <option value='Digital Marketing'>Digital Marketing</option>
                                </select>
                            </div>

                            <form>
                                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                                    <input
                                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                        type='text'
                                        name='search'
                                        placeholder='Enter Job Title'
                                        aria-label='Enter Job Title'
                                    />

                                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                        Search
                                    </button>
                                </div>
                            </form>
                            <div>
                                <select
                                    name='category'
                                    id='Job_category'
                                    className='border p-4 rounded-md'
                                >
                                    <option value=''>Sort By Deadline</option>
                                    <option value='dsc'>Descending Order</option>
                                    <option value='asc'>Ascending Order</option>
                                </select>
                            </div>
                            <button className='btn border p-4 rounded-md'>Reset</button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                            {
                                itemJobs?.map(job => <JobCard key={job._id} job={job} />)
                            }
                        </div>
                    </div>


                    <div>
                        <p>Current Page: {currentPage}</p>
                    </div>

                    <div className='flex justify-center mt-12'>
                        <button
                            onClick={handlePreviousBtn}
                            className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                            <div className='flex items-center -mx-1'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6 mx-1 rtl:-scale-x-100'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M7 16l-4-4m0 0l4-4m-4 4h18'
                                    />
                                </svg>

                                <span className='mx-1'>previous</span>
                            </div>
                        </button>

                        {pages.map(btnNum => (
                            <button
                                key={btnNum}
                                onClick={() => setCurrentPage(btnNum)}
                                className={` ${currentPage === btnNum ? 'bg-blue-500 text-white' : ''} hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md border sm:inline hover:bg-blue-500  hover:text-white`}
                            >
                                {btnNum}
                            </button>
                        ))}

                        <button
                            onClick={handleNextBtn}
                            className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                            <div className='flex items-center -mx-1'>
                                <span className='mx-1'>Next</span>

                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6 mx-1 rtl:-scale-x-100'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AllJobs;