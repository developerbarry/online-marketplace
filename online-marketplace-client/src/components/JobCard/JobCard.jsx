
const JobCard = () => {
    return (
        <div className="p-4 max-w-2xl border rounded-lg shadow-md bg-white space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                <div>
                    <p className="text-sm text-gray-500">Posted 6 hours ago</p>
                    <h2 className="text-xl font-semibold">Interactive Figma Prototype Development</h2>
                </div>
                <button className="px-4 py-2 text-sm font-semibold border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">View job</button>
            </div>

            <div className="text-sm flex flex-wrap gap-4">
                <p className="flex items-center flex-wrap md:flex-nowrap">
                    <span className="font-semibold">Intermediate ·</span>
                    <span className="ml-1">$15.00 - $30.00/hr ·</span>
                    <span className="ml-1">Est. time: Less than 1 month, 30+ hrs/week</span>
                </p>
            </div>

            <div className="text-sm text-gray-600">
                <p>
                    We are looking for someone skilled in using Figma to build out an already designed interactive prototype
                    from a Figma file based on provided screenshots and mappings. Several screenshots may need to be generated.
                    We will provide guidance on what needs to be done.
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">Prototyping</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">Figma</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">Interaction Design</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">JavaScript</span>
                <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg">Web Design</span>
            </div>
        </div>
    );
};

export default JobCard;