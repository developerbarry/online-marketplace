import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';

const JobCategoriesTab = () => {
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
                            <div className='flex flex-col md:flex-row gap-6'>
                                <JobCard />
                                <JobCard />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <JobCard />
                        </TabPanel>
                        <TabPanel>
                            <JobCard />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default JobCategoriesTab;