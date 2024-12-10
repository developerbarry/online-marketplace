import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="max-w-2xl p-4 border rounded-lg shadow-md bg-white animate-pulse">
            <div className='flex flex-col md:flex-row justify-between items-start md:mb-3'>
                <div className="h-6 bg-gray-200 rounded w-8/12 mb-4"></div>
                <div className="px-12 py-5 bg-gray-200 border rounded-lg"></div>
            </div>

            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>

            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                <span className="h-6 bg-gray-200 rounded-full w-16"></span>
                <span className="h-6 bg-gray-200 rounded-full w-20"></span>
                <span className="h-6 bg-gray-200 rounded-full w-24"></span>
                <span className="h-6 bg-gray-200 rounded-full w-12"></span>
                <span className="h-6 bg-gray-200 rounded-full w-20"></span>
            </div>
        </div>

    );
};

export default SkeletonLoader;