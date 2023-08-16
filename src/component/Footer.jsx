

const Footer = () => {
    return (
        <footer className="bg-gradient-to-l from-[#fcbbec] to-[#c9faf7]">


            <div className="container mx-auto p-2">

                <div className="">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-10">

                        <div className="">
                            <h2 className="text-2xl font-bold my-4">Quick Links</h2>
                            <div className="space-y-2">
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Home</p>
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">About Us</p>
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Insurance</p>
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Privacy Policy</p>
                            </div>
                        </div>

                        <div className="">
                            <h2 className="text-2xl font-bold my-4">Our Service</h2>
                            <div className="space-y-2">
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Life Insurance</p>
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Car Insurance</p>
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Health Insurance</p>
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">House Insurance</p>
                            </div>
                        </div>

                        <div className="">
                            <h2 className="text-2xl font-bold my-4">Help</h2>
                            <div className="space-y-2">
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">FAQs</p>
                                <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Contact Us</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold my-4">Subscribe to our newsletter</h2>
                            <div className="">
                                <span className="mr-8">Email address</span>
                                
                            </div>
                            <hr className="w-1/2 text-cyan-50 p-2"/>
                                <div className="space-x-2">
                                    <i className="fa-brands fa-facebook fa-2x cursor-pointer"></i>
                                    <i className="fa-brands fa-twitter fa-2x cursor-pointer"></i>
                                    <i className="fa-brands fa-instagram fa-2x cursor-pointer"></i>
                                </div>
                        </div>

                    </div>


                    <div className="p-3 text-center">

                        Copy Right Owner &copy; Redux-Shop || Developed By Emon

                    </div>


                </div>

            </div>

        </footer>
    );
};

export default Footer;