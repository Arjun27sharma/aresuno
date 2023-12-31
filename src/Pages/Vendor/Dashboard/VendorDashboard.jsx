import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Overview from "./components/Overview";
import Reviews from "./components/Reviews";
import Posts from "./components/Posts";
import Leads from "./components/Leads";
import Subscriptions from "./components/Subscriptions";
import AllListings from "./components/AllListings";
import AddListing from "./components/AddListing";
import Profile from "./components/Profile";
import DashboardLayout from "./DashboardLayout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../state/slices/userSlice";

const api = axios.create({
  // baseURL: "http://localhost:8000/api/vendor/",
  baseURL: "https://aresuno-server.vercel.app/api/vendor/",
});

const VendorDashboard = () => {
  const [user, setUser] = useState({});
  const [businesses, setBusinesses] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [allRatings, setAllRatings] = useState([]);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data: user } = await api.get("/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data: businesses } = await api.get("/businesses", {
        headers: { Authorization: `Bearer ${token}` },
      });


      // Extract all posts from businesses array
      const allPosts = businesses.flatMap((business) => business.posts);
      const allRatings = businesses.flatMap((business) => business.ratings);

      setUser(user);
      setBusinesses(businesses);
      setAllPosts(allPosts);
      setAllRatings(allRatings);
    } catch (error) {
      console.error("An error occurred:", error);
      console.error("An error occurred:", error.response.data.message);

      if(error.response.data.message === "Unauthorized"){
        localStorage.removeItem("token");
        toast.error("Session Expired, Please Login")
        dispatch(userLogout())
        navigate("/")
      }
      // Handle error (e.g., show a user-friendly message)
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(user)

  return (
    <div className="relative h-screen">
      {/* <div className="fixed w-full z-[99]">
      <Header />
      </div> */}
      <DashboardLayout user={user}>
        <Routes>
          <Route
            path="/"
            element={<Overview businesses={businesses} posts={allPosts} ratings={allRatings}/>}
          />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route
            path="/all-listings"
            element={<AllListings businesses={businesses} />}
          />
          <Route path="/add-listing" element={<AddListing />} />
          <Route
            path="/posts"
            element={<Posts posts={allPosts} businesses={businesses} />}
          />
          <Route
            path="/reviews"
            element={<Reviews businesses={businesses} />}
          />
          <Route path="/leads" element={<Leads />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>

        <ToastContainer />
      </DashboardLayout>
    </div>
  );
};

export default VendorDashboard;
