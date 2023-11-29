import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiCategory, BiDollar, BiSolidBusiness } from "react-icons/bi";
import { BsPeopleFill, BsStarFill } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import {
    MdOutlineLeaderboard,
    MdOutlineReviews,
    MdReviews,
} from "react-icons/md";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    AreaChart,
    Area,
} from "recharts";
import {
    AiOutlineAppstore,
    AiOutlineAppstoreAdd,
    AiOutlineUser,
} from "react-icons/ai";
import { FiDelete, FiEdit, FiEdit2, FiExternalLink, FiEye, FiEyeOff, FiHome, FiLink, FiLock, FiStar, FiTrash2, FiUsers, FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";
import DeleteModal from "./DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import {setAllCategories} from "../../categoriesSlice"


const AllBusiness = ({ businesses }) => {

    const handleDelete = async (id) => {
        try {

            const res = await axios.delete(`https://aresuno-server.vercel.app/api/business/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // toast.success(res.data.message);
            window.location.reload();
        }
        catch (err) {
            // toast.error(err.response.data.message);
            console.log(err)
        }
    }



    return (
        <div>
            <div className="bg-white rounded-xl">

                <table className="w-full text-sm table-auto">
                    <thead className="">
                        <tr className="bg-gray-300">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owned by</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {businesses.map((business, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2 items-center">
                                        {business.name}
                                        <Link to={`/business/${business._id}`}><FiExternalLink className="text-blue-500 w-4 h-4 cursor-pointer" /></Link>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{business.vendorName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{business.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{business.mainCategory}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{business.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <FiTrash2 className="text-red-500 w-5 h-5 cursor-pointer" onClick={() => handleDelete(business._id)} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};
const AllUsers = ({ users }) => {

    const handleDelete = async (id) => {
        try {

            const res = await axios.delete(`https://aresuno-server.vercel.app/api/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // toast.success(res.data.message);
            window.location.reload();
        }
        catch (err) {
            // toast.error(err.response.data.message);
            console.log(err)
        }
    }



    return (
        <div>
            <div className="bg-white rounded-xl">

                <table className="w-full text-sm table-auto">
                    <thead className="">
                        <tr className="bg-gray-300">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.gender ? user.gender : "N/A"}</td>
                                {/* <td className="px-6 py-4 whitespace-nowrap">{user.type}</td> */}
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <FiTrash2 className="text-red-500 w-5 h-5 cursor-pointer" onClick={() => handleDelete(user._id)} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};
const AllVendors = ({ users }) => {

    const handleDelete = async (id) => {
        try {

            const res = await axios.delete(`https://aresuno-server.vercel.app/api/vendor/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // toast.success(res.data.message);
            window.location.reload();
        }
        catch (err) {
            // toast.error(err.response.data.message);
            console.log(err)
        }
    }



    return (
        <div>
            <div className="bg-white rounded-xl">

                <table className="w-full text-sm table-auto">
                    <thead className="">
                        <tr className="bg-gray-300">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.gender ? user.gender : "N/A"}</td>
                                {/* <td className="px-6 py-4 whitespace-nowrap">{user.type}</td> */}
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <FiTrash2 className="text-red-500 w-5 h-5 cursor-pointer" onClick={() => handleDelete(user._id)} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};





const AllCategories = () => {

    const categories = useSelector(state => state.categories)

    const [selectedCategory, setSelectedCategory] = useState(null);


    const groupedCategories = {};
    categories.forEach((category) => {
      if (category.title) {
        if (!groupedCategories[category.title]) {
          groupedCategories[category.title] = [];
        }
        groupedCategories[category.title].push(category);
      }
    });


    return (

        <div className="flex flex-col gap-10">

            <div>
                <h1 className="text-2xl font-medium mb-5">Main Categories</h1>

                {


                    <table>
                        <thead>

                            <tr className="bg-gray-300">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNo</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sub Cat..</th>
                            </tr>

                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">

                            {
                                categories.map((category, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{category.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{category.subcategories.length !== 0 ? category.subcategories.length : "no"}</td>                                        
                                    </tr>
                                ))
                            }

                        </tbody>




                    </table>
                }


            </div>
        <div>
        <h1 className="text-2xl font-medium mb-5">Sub Categories</h1>
  
        {categories.map((category, index) => (

            category.subcategories.length > 0 &&

            
          <div key={index} className="mb-8">
            {category.title && <h2 className="text-lg font-semibold mt-4 mb-2">{category.title}</h2>}
  
            <div className="mt-2 rounded-xl grid grid-cols-3 gap-4">
              {category.subcategories.map((subCategory, index) => (
                <div key={index} className="bg-white relative border rounded-xl p-5 py-6">
                  <div className="justify-start flex gap-10 items-center">
                    <div className="w-24 h-24">
                      <img src={subCategory.image?.url} alt={subCategory.image?.altTag} className="rounded-lg w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="text-sm font-base">{subCategory.name}</h2>
                    </div>
                  </div>
  
                  <div className="flex justify-end gap-5">
                    <FiTrash2 className="w-5 h-5 text-red-500 cursor-pointer" onClick={() => setSelectedCategory(subCategory)} />
                    {selectedCategory && selectedCategory._id === subCategory._id && (
                      <DeleteModal categoryId={category._id} subCategory={selectedCategory} onClose={() => setSelectedCategory(null)} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>




                    



        ))}
      </div>
      </div>
    );
};



const AdminDashboard = () => {

    const [users, setUsers] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    const [selectedField, setSelectedField] = useState("adminHome");


    const handleSelectedField = (field) => {
        setSelectedField(field);
        console.log(field);
    };

    const fetchBusinessesData = async () => {
        try {
            setLoading(true);

            const resBusinesses = await axios.get(
                "https://aresuno-server.vercel.app/api/business/");
            const businesses = resBusinesses.data;

            console.log(businesses);
            setBusinesses(businesses);

            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchUsersData = async () => {
        try {
            setLoading(true);

            const resUsers = await axios.get(
                "https://aresuno-server.vercel.app/api/user/all-users");
            const resVendors = await axios.get(
                "https://aresuno-server.vercel.app/api/vendor/all-vendors",
            )
            const users = resUsers.data
            const vendors = resVendors.data

            setUsers(users);

            console.log(users);


            setVendors(vendors);
            console.log(vendors)

            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }




    useEffect(() => {
        fetchBusinessesData();
        fetchUsersData();
        // fetchAllCategories()
    }, []);

    return (
        <div className="flex h-screen">
            <div className="flex-[2] overflow-y-auto border-r border-gray-300 p-10 flex flex-col justify-between items-start">
                <div className="flex flex-col gap-10 w-full">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-semibold">ARESUNO ADMIN</h2>
                    </div>

                    <div className="text-sm flex flex-col gap-6 w-full">
                        <div
                            className={`flex items-center cursor-pointer gap-2 ${selectedField === "adminHome"
                                ? "text-blue-500"
                                : "text-gray-700"
                                }`}
                            onClick={() => handleSelectedField("adminHome")}
                        >
                            <FiHome className="w-6 h-6" />
                            <span className="">Home</span>
                        </div>


                    </div>

                    <div className="text-sm flex flex-col gap-6 w-full">
                        <div
                            className={`flex items-center cursor-pointer gap-2 ${selectedField === "allBusinesses"
                                ? "text-blue-500"
                                : "text-gray-700"
                                }`}
                            onClick={() => handleSelectedField("allBusinesses")}
                        >
                            <LuLayoutDashboard className="w-6 h-6" />
                            <span className="">All Businesses</span>
                        </div>


                    </div>

                    <div className="text-sm flex flex-col gap-6 w-full">
                        <div
                            className={`flex items-center cursor-pointer gap-2 ${selectedField === "allUsers"
                                ? "text-blue-500"
                                : "text-gray-700"
                                }`}
                            onClick={() => handleSelectedField("allUsers")}
                        >
                            <FiUsers className="w-6 h-6" />
                            <span className="">All Users</span>
                        </div>

                    </div>


                    <div className="text-sm flex flex-col gap-6 w-full">
                        <div
                            className={`flex items-center cursor-pointer gap-2 ${selectedField === "allVendors"
                                ? "text-blue-500"
                                : "text-gray-700"
                                }`}
                            onClick={() => handleSelectedField("allVendors")}
                        >
                            <FiUsers className="w-6 h-6" />
                            <span className="">All Vendors</span>
                        </div>

                    </div>


                    <div className="text-sm flex flex-col gap-6 w-full">
                        <div
                            className={`flex items-center cursor-pointer gap-2 ${selectedField === "allCategories"
                                ? "text-blue-500"
                                : "text-gray-700"
                                }`}
                            onClick={() => handleSelectedField("allCategories")}
                        >
                            <BiCategory className="w-6 h-6" />
                            <span className="">All Categories</span>
                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <button className="w-full px-4 py-1 border text-red-500 border-red-500">
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex-[10] bg-gray-100 p-10 overflow-y-scroll">
                <div className="flex flex-col w-full justify-center">
                    <div className="">
                        {loading ? (
                            <div role="status" className="max-w-sm animate-pulse">
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-4"></div>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <div className="">
                                {selectedField === "allBusinesses" && <AllBusiness businesses={businesses} />}
                                {selectedField === "allUsers" && <AllUsers users={users} />}
                                {selectedField === "allVendors" && <AllVendors users={vendors} />}
                                {selectedField === "adminHome" && <AdminHome/>}
                                {selectedField === "allCategories" && <AllCategories />}
                            </div>
                        )}
                    </div>
                </div>
            </div >
            <ToastContainer />

        </div >
    );
};

export default AdminDashboard;
