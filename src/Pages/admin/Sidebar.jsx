import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'
import { BiCategory, BiImage } from 'react-icons/bi'
import { FaGripLines } from 'react-icons/fa'
import { FiArrowRight, FiHome, FiMap, FiMapPin, FiMessageSquare, FiPhoneCall, FiPlus, FiPlusCircle, FiUsers } from 'react-icons/fi'
import { LuLayoutDashboard } from 'react-icons/lu'
import { MdOutlineArticle } from 'react-icons/md'

const Sidebar = ({handleSelectedField, selectedField, selectedSubField, setSelectedSubField}) => {
    const sidebarItems = [
        {
            name : "Home",
            icon : <FiHome className="w-6 h-6" />
        },
        {
            name : "Businesses",
            icon : <LuLayoutDashboard className="w-6 h-6" />,
            subMenu : [
                "All Businesses",
                "Add Listing",
                "Admin Businesses"
            ]
        },
        {
            name : "Location Data",
            icon : <FiMapPin className="w-6 h-6" />
        },
        {
            name : "Banner",
            icon : <BiImage className="w-6 h-6" />
        },
        {
            name : "Blogs",
            icon : <MdOutlineArticle className="w-6 h-6" />
        },
        {
            name : "Categories",
            icon : <BiCategory className="w-6 h-6" />,
            subMenu : [
                "All Categories",
                "Add Categories"
            ]
        },
        {
            name : "Leads",
            icon : <FiMessageSquare className="w-6 h-6" />,
            subMenu : [
                "Call Leads",
                "Enquiry Leads",
            ]
        },
        {
            name : "Users",
            icon : <FiUsers className="w-6 h-6" />
        },        
    ]
  return (
                <div className="flex my-4 mt-6 flex-col gap-8 justify-start items-start h-full overflow-y-scroll w-full">



                    { sidebarItems.map(({name, icon, subMenu}, index) => (


                    <div className="text-sm flex flex-col gap-3 w-full">
                        <div
                            className={`flex items-center cursor-pointer gap-2 ${selectedField === name
                                ? "text-blue-500"
                                : "text-gray-700"
                                }`}
                            onClick={() => {
                                handleSelectedField(name)
                                setSelectedSubField(subMenu[0])
                            }}
                        >
                            {icon}
                            <span className="">{name}</span>
                            
                        </div>
                        
                        { selectedField === name && subMenu &&
                        <div className='ml-10 flex flex-col gap-3'>
                        {subMenu && subMenu.map((subItem, index) => (
                            <div
                                key={index}
                                className={`flex items-center cursor-pointer gap-2 ${selectedSubField === subItem
                                    ? "text-blue-500"
                                    : "text-gray-700"
                                    }`}
                                onClick = {() => setSelectedSubField(subItem)}
                            >
                                <span className=" inline-flex items-center gap-2"><FiArrowRight /> {subItem}</span>
                            </div>
                        ))}
                        </div>
}


                    </div>
                    ))
}

                </div>
  )
}

export default Sidebar