import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UserDashboard = () => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);




    const fetchUserData = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            const res = await axios.get("https://aresuno-server.vercel.app/api/user/", { headers: { Authorization: `Bearer ${token}` } });
            const user = res.data;
            console.log(user)
            setUser(user);
            setLoading(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])


    const [editMode, setEditMode] = useState(false);


    const [userEnquiries, setUserEnquiries] = useState([
        {
            id: 1,
            title: 'Enquiry 1',
            description: 'Description of Enquiry 1',
            // other fields for enquiries
        },
        // other enquiries
    ]);
    const [userReviews, setUserReviews] = useState([
        {
            id: 1,
            title: 'Review 1',
            content: 'Content of Review 1',
            // other fields for reviews
        },
        // other reviews
    ]);

    const handleEditProfile = () => {
        setEditMode(!editMode);
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const saveProfile = () => {
        // Send an API request to save the updated profile data
        // You can implement this part based on your backend
        setEditMode(false);
    };

    return (
        <div className="container mx-auto p-6 flex justify-between gap-8">
            <div className="bg-white rounded-lg border border-gray-300 p-6 mb-6 flex-[3]">
                <h2 className="text-2xl font-bold mb-4">Profile Section</h2>


                {loading ? <div role="status" class="max-w-sm animate-pulse">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-4"></div>
                    <span className="sr-only">Loading...</span>
                </div> :
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <p className="text-gray-700">{user.name}</p>
                        <p className="text-gray-700">{user.email}</p>
                        <p className="text-gray-700">{user.phone}</p>
                    </div>
                }
            </div>


            <div className="bg-white rounded-lg border border-gray-300 p-6 mb-6 flex-[9]">
                <h2 className="text-2xl font-bold mb-4">Enquiries Section</h2>
                {userEnquiries.map((enquiry) => (
                    <div key={enquiry.id} className="mb-4">
                        <p className="text-gray-700 font-semibold">Title: {enquiry.title}</p>
                        <p className="text-gray-700 font-semibold">Description: {enquiry.description}</p>
                    </div>
                ))}
            </div>

        </div >
    );
};

export default UserDashboard;
