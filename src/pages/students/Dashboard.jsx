
import React from "react";
import stats from "../../../data.json";

const Dashboard = () => {

    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome Back, Student!
                </h1>
                <p className="text-gray-500 mt-1">
                    Here's your assignment overview.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.bg} p-6 rounded-xl shadow-sm`}
                    >
                        <h2 className="text-gray-600 font-medium">
                            {item.title}
                        </h2>

                        <p className={`text-3xl font-bold mt-3 ${item.color}`}>
                            {item.count}
                        </p>
                    </div>
                ))}

            </div>

            {/* Recent Assignments */}
            <div className="bg-white rounded-xl shadow-sm p-6">

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    Recent Assignments
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">

                        <thead>
                            <tr className="border-b text-gray-500 text-sm">
                                <th className="py-3">Assignment</th>
                                <th className="py-3">Subject</th>
                                <th className="py-3">Deadline</th>
                                <th className="py-3">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b">
                                <td className="py-4">React Project</td>
                                <td>Web Development</td>
                                <td>10 Nov 2026</td>
                                <td>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                        Submitted
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-4">Database Assignment</td>
                                <td>DBMS</td>
                                <td>12 Nov 2026</td>
                                <td>
                                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                                        Pending
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-4">JavaScript Task</td>
                                <td>Programming</td>
                                <td>15 Nov 2026</td>
                                <td>
                                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                                        Pending
                                    </span>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            

        </div>
    );
};

export default Dashboard;
