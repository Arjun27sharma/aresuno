import React from "react";

export const Frame = () => {
    return (
        <div className="bg-white flex flex-col gap-4 justify-center w-full px-6">


                <div className="w-full border border-solid border-gray-300 rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <div className="w-full h-32 md:h-40 bg-cover bg-center" style={{ backgroundImage: 'url(rectangle-37.png)' }}>
                            <div className="flex items-center gap-2 mt-2">
                                <img className="w-5 h-5" alt="" src="frame-11.svg" />
                                <span className="text-gray-600 text-sm">50 Ratings</span>
                            </div>
                            <div className="text-black text-3xl font-bold my-2">4.4</div>
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" alt="" src="frame-25.svg" />
                                <span className="text-gray-600 text-sm">Hyderabad, Hitech city</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" alt="" src="frame-72.svg" />
                                <span className="text-blue-500 text-sm">Verified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" alt="" src="frame-171.svg" />
                                <span className="text-black text-sm">6 YRS</span>
                            </div>
                            <div className="flex items-center gap-2 my-2">
                                <span className="text-blue-500 text-lg font-semibold">packers and movers</span>
                            </div>
                            <div className="text-black text-4xl font-bold whitespace-nowrap">Agra Packers And Movers</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2 p-2 rounded-lg border border-solid border-blue-500">
                                <img className="w-4 h-4" alt="" src="frame-194.svg" />
                                <span className="text-blue-500 font-semibold">Call Now</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-500">
                                <img className="w-4 h-4" alt="" src="vector-2.svg" />
                                <span className="text-white font-semibold">Enquire Now</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" alt="" src="vector-3.svg" />
                                <span className="text-gray-700 text-sm">Mail</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" alt="" src="group.png" />
                                <span className="text-gray-700 text-sm">Website</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" alt="" src="vector-4.svg" />
                                <span className="text-gray-700 text-sm">WhatsApp</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex gap-4">

                    {/* business bottom sedtion */}

                    <div className=" border border-solid border-[#d7d7d7] rounded-lg">



                        <div className="w-full md:max-w-screen-lg border-b border-b-gray-300 p-8 mx-4">
                            <div className="w-full md:w-3/4">
                                <div className="flex items-center gap-4">
                                    <img className="w-10 h-10" alt="Image" src="image-20.png" />
                                    <h2 className="text-2xl font-bold text-black">Overview</h2>
                                </div>
                                <p className="mt-4 text-gray-700 text-lg">
                                    <span>Royal Packers and movers excellent Pan India Home Moving &amp; Packing Services. Royal promises the best
                                        prices, dedicated Move Consultants, authorized Service Partners and Tension Free Shifting for its customers.</span>
                                    <span className="text-blue-500">#HomeMovingkaSaathi</span>
                                    <span className="text-gray-700">&nbsp;</span>
                                    <span className="text-blue-500">#SmartHomeMoving</span>
                                    <span className="text-gray-700">&#34;</span>
                                </p>
                            </div>
                        </div>



                        <div className="w-full max-w-4xl mx-auto">
                            <div className="flex items-center gap-4">
                                <img className="w-10 h-10" alt="Image" src="image-22.png" />
                                <h2 className="text-2xl font-bold text-black">Photos</h2>
                            </div>
                            <div className="flex flex-wrap mt-4">
                                <div className="w-full md:w-1/4 p-2">
                                    <div className="h-40 bg-gray-300 rounded-lg"></div>
                                </div>
                                <div className="w-full md:w-1/4 p-2">
                                    <div className="h-40 bg-gray-300 rounded-lg"></div>
                                </div>
                                <div className="w-full md:w-1/4 p-2">
                                    <div className="h-40 bg-gray-300 rounded-lg"></div>
                                </div>
                                <div className="w-full md:w-1/4 p-2">
                                    <div className="h-40 bg-gray-300 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <img className="w-5 h-5" alt="Image" src="image-23.png" />
                                <p className="text-blue-500 text-md font-medium">Upload Photos</p>
                            </div>
                        </div>




                        <div className="w-full max-w-md mx-auto">
                            <div className="flex items-center gap-4 mt-4">
                                <img className="w-6 h-6" alt="Navigation" src="navigation-2.svg" />
                                <h2 className="text-2xl font-bold text-black">Address</h2>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-600 text-base">
                                    H.No.185 Maruti City Mauza Kahrai, Shamshabad Road, Kahrai, Agra - 282001 (Near All Sent School)
                                </p>
                            </div>
                            <img className="w-full h-auto mt-4" alt="Image" src="image-25-3.png" />
                        </div>



                        <div className="max-w-2xl mx-auto">
                            <div className="flex items-center gap-4 mt-4">
                                <img className="w-6 h-6" alt="Frame" src="frame-265.svg" />
                                <h2 className="text-2xl font-bold text-black">Updates</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div className="max-w-full h-auto">
                                    <img className="w-full h-auto" alt="Image" src="image-28.png" />
                                    <p className="mt-4 text-gray-600">
                                        #Car #Detailing and #ceramic #Coating #Services is significant as it gives the #brand a new look to your #vehicle. The shine stays as long as your vehicle. So, Grap the opportunity within your budget by availing the best services from Onyxaa Noida. Inquire Or Whatsapp For Rates, ⁣⁣Call 📞 : 9717894250
                                    </p>
                                    <div className="mt-2 text-blue-600">#autodetailing&nbsp;&nbsp;#detailing&nbsp;&nbsp;#cardetailing&nbsp;&nbsp;#carcare&nbsp;&nbsp;#paintprote</div>
                                    <div className="mt-2 text-gray-500">29 august, 2023</div>
                                    <div className="flex items-center mt-2 text-green-600">
                                        <div className="font-semibold">VIEW MORE</div>
                                        <img className="w-4 h-4 ml-2" alt="Frame" src="frame-236-2.svg" />
                                    </div>
                                </div>
                                <div className="max-w-full h-auto">
                                    <img className="w-full h-auto" alt="Image" src="image-28-2.png" />
                                    <p className="mt-4 text-gray-600">
                                        #Car #Detailing and #ceramic #Coating #Services is significant as it gives the #brand a new look to your #vehicle. The shine stays as long as your vehicle. So, Grap the opportunity within your budget by availing the best services from Onyxaa Noida. Inquire Or Whatsapp For Rates, ⁣⁣Call 📞 : 9717894250
                                    </p>
                                    <div className="mt-2 text-blue-600">#autodetailing&nbsp;&nbsp;#detailing&nbsp;&nbsp;#cardetailing&nbsp;&nbsp;#carcare&nbsp;&nbsp;#paintprote</div>
                                    <div className="mt-2 text-gray-500">29 august, 2023</div>
                                    <div className="flex items-center mt-2 text-green-600">
                                        <div className="font-semibold">VIEW MORE</div>
                                        <img className="w-4 h-4 ml-2" alt="Frame" src="frame-236.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className="flex items-center gap-4 mt-4">
                                <img className="w-6 h-6" alt="Help circle" src="help-circle.svg" />
                                <h2 className="text-2xl font-bold text-black">Frequently Asked Questions</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-8 mt-8">
                                <div className="max-w-full">
                                    <p className="text-black text-lg">1. Will Agra Packers and Movers in Kahrai transport my belongings inside itself?</p>
                                    <p className="mt-2 text-gray-600">
                                        Clothes and other movable items are removed and packed separately in boxes. This also makes them lighter to carry furniture away.
                                    </p>
                                </div>
                                <div className="max-w-full">
                                    <p className="text-black text-lg">2. Should I pre-pack everything for them to carry away to the transport facility?</p>
                                    <p className="mt-2 text-gray-600">No, you do not need to pre-pack things. But, if you wish to be better prepared, you can do that too.</p>
                                </div>
                                <div className="max-w-full">
                                    <p className="text-black text-lg">3. Can I call them directly on the day of shifting or do I need an earlier appointment?</p>
                                    <p className="mt-2 text-gray-600">
                                        Personnel from the company needs to visit your home to assess the weight and capacity of your belongings so they can plan to bring adequate supplies and transport them accordingly. Agra Packers and Movers are available during Monday:- Open 24 Hrs, Tuesday: - Open 24 Hrs, Wednesday:- Open 24 Hrs, thu:- Open 24 Hrs, Friday:- Open 24 Hrs, Saturday:- Open 24 Hrs, Sunday:- Open 24 Hrs. So, schedule a house call accordingly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mx-auto">
                            <div className="flex items-center gap-4 mt-4">
                                <img className="w-6 h-6" alt="Star" src="star.svg" />
                                <h2 className="text-2xl font-bold text-black">Ratings and Reviews</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-8 mt-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <div className="text-white text-lg font-semibold">4.3</div>
                                    </div>
                                    <p className="text-black text-base">Overall 50 Ratings</p>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {Array.from({ length: 3 }, (_, index) => (
                                        <div key={index} className="grid grid-cols-2 gap-4">
                                            <div className="w-12 h-12 bg-gray-300 rounded-full" />
                                            <div className="flex flex-col">
                                                <p className="text-black text-lg font-semibold">Write your experience</p>
                                                <img className="w-40 h-7" alt="Frame" src={`frame-154.svg`} />
                                                <div className="w-96 h-24 border border-solid border-gray-300 rounded">
                                                    <p className="text-gray-600 text-base p-4">Write your review here</p>
                                                </div>
                                                <div className="w-56 h-12 bg-blue-600 rounded">
                                                    <div className="text-white text-base flex items-center justify-center">Rate</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>






                    <div>

                        <div className="w-full max-w-md border border-solid border-gray-300 rounded-xl p-8">
                            <p className="text-2xl font-bold mb-4 text-center">Business Hours</p>
                            <p className="text-center text-gray-600 mb-6">Monday - Sunday, 9:00 AM to 10:00 PM</p>

                            <div className="mb-8">
                                <p className="text-xl font-semibold mb-4">Services</p>
                                <div className="flex items-center mb-2">
                                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                    <p className="text-gray-800">Logistic Services</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                    <p className="text-gray-800">Packers and Movers</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                    <p className="text-gray-800">Transportation</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-xl font-semibold mb-4">Mode of Payment</p>
                                <p className="text-gray-600">
                                    Cash <br />
                                    Master Card <br />
                                    Visa Card <br />
                                    Debit Cards <br />
                                    American Express <br />
                                    Credit Card
                                </p>
                            </div>
                        </div>



                        <div className="w-full md:max-w-screen-md border border-solid border-gray-300 rounded-xl p-8 mx-auto">
                            <div className="w-full bg-gray-100 rounded-md mb-4 py-2 px-4">
                                <span className="text-gray-700 text-base">Name</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-md mb-4 py-2 px-4">
                                <span className="text-gray-700 text-base text-center">Phone Number</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-md mb-4 py-2 px-4">
                                <span className="text-gray-700 text-base text-center">Email Id</span>
                            </div>
                            <div className="w-full bg-blue-500 rounded-md mb-4 py-2 px-4">
                                <span className="text-white text-base text-center font-bold">Submit</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-md mb-4 py-2 px-4">
                                <span className="text-gray-700 text-base text-center">Query</span>
                            </div>
                            <div className="w-full mb-4">
                                <p className="text-black text-xl font-semibold">Questions</p>
                            </div>
                        </div>
                    </div>





                </div>

        </div>
    );
};
