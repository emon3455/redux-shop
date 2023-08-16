

const Services = () => {
    return (
        <div className="my-20">

            <h2 className="text-2xl md:text-4xl my-10 text-violet-500 font-extrabold text-center"> ----- Service <span className="text-red-500">We</span> Provide ----- </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-6">
                <div className="shadow-2xl text-gray-600 bg-sky-100 p-4 space-y-4 hover:-translate-y-4 hover:scale-105 transition-all duration-500">
                    <h2 className="text-2xl font-bold text-black">
                        Home Delivery
                    </h2>
                    <p>
                        Shop hassle-free and have your items delivered to your door with our reliable home delivery service.
                    </p>
                </div>
                <div className="shadow-2xl text-gray-600 bg-violet-100 p-4 space-y-4 md:-translate-y-10 hover:-translate-y-4 hover:scale-105 transition-all duration-500">
                    <h2 className="text-2xl font-bold text-black">
                        Easy-Shopping
                    </h2>
                    <p>
                        Enjoy a seamless shopping experience through our intuitive platform, designed to make your selection and purchase effortless.
                    </p>
                </div>
                <div className="shadow-2xl text-gray-600 bg-pink-100 p-4 space-y-4 hover:-translate-y-4 hover:scale-105 transition-all duration-500">
                    <h2 className="text-2xl font-bold text-black">
                        Always Open
                    </h2>
                    <p>
                        Our online store never closes, allowing you to explore and shop at your convenience, whenever it suits you.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Services;