import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../useAxiosSecure/useAxiosSecure';

const JobCategoriesTab = () => {
    const [jobs, setJobs] = useState([]);
    const secure = useAxiosSecure();

    useEffect(() => {
        const jobDatas = async () => {
            const result = await secure.get('/jobs');
            setJobs(result.data);
            //Here we should used try and catch block for handling the error
        };

        jobDatas();
    }, []);

    console.log(jobs)
    return (
        <section className='py-14'>
            <div className='container mx-auto'>
                <div className='font-onest px-5'>
                    <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                        Browse Jobs By Categories
                    </h1>

                    <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
                        Three categories available for the time being. They are Web
                        Development, Graphics Design and Digital Marketing. Browse them by
                        clicking on the tabs below.
                    </p>
                </div>
                <Tabs>
                    <div className='flex justify-center items-center font-onest mb-5'>
                        <TabList>
                            <div className={'space-y-4 text-center md:space-y-0 md:text-left lg:space-y-0 lg:text-left'}>
                                <Tab>Web Development</Tab>
                                <Tab>Graphics Design</Tab>
                                <Tab>Digital Marketing</Tab>
                            </div>
                        </TabList>
                    </div>

                    <div className='px-4 md:px-4 font-onest'>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    jobs.filter(j => j.job_categories[0] === 'Web Development').map(job => <JobCard key={job._id} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    jobs.filter(j => j.job_categories[0] === 'Graphics Design').map(job => <JobCard key={job._id} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    jobs.filter(j => j.job_categories[0] === 'Digital Marketing').map(job => <JobCard key={job._id} />)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default JobCategoriesTab;