import { formatDistanceToNow } from 'date-fns';
import { Link } from "react-router";

const JobCard = ({ job }) => {
    const { _id, deadline, job_title, job_level, hourly_rate, estimated_time, job_tags, description, } = job;

    const timeLeft = formatDistanceToNow(new Date(deadline), { addSuffix: true });

    return (
        <div className="p-4 max-w-2xl border rounded-lg shadow-md bg-white space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                <div>
                    <p className="text-sm text-gray-500">Posted {timeLeft} ago</p>
                    <Link to={`/job/${_id}`} className="text-xl font-semibold">{job_title}</Link>
                </div>
                <Link to={`/job/${_id}`} className="px-4 py-2 text-sm font-semibold border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">View job</Link>
            </div>

            <div className="text-sm flex flex-wrap gap-4">
                <p className="flex items-center flex-wrap md:flex-nowrap">
                    <span className="font-semibold">{job_level} ·</span>
                    <span className="ml-1">${hourly_rate?.min}.00 - ${hourly_rate?.min}.00/hr ·</span>
                    <span className="ml-1">Est. time: Less than {estimated_time?.duration}, {estimated_time?.hours_per_week}</span>
                </p>
            </div>

            <div className="text-sm text-gray-600">
                <p>
                    {description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">{job_tags[0]}</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">{job_tags[1]}</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">{job_tags[2]}</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">{job_tags[3]}</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">{job_tags[4]}</span>
            </div>
        </div>
    );
};

export default JobCard;