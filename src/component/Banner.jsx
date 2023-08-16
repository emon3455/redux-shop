
function Banner() {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">

            <div className="order-2 md:order-1 flex flex-col justify-center max-w-xl">
                <h2 className="text-2xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r  from-indigo-500  via-pink-500 to-purple-500 bg-clip-text text-transparent">Discover the Best Deals and Latest Trends at Redux-Shop.</h2>
                <p className="text-gray-500">
                    Welcome to Redux-Shop: Your Gateway to Limitless Shopping Adventures! Immerse Yourself in a Treasure Trove of Products, Unleash Your Desires, and Elevate Your Lifestyle with Every Click.
                </p>
            </div>

            <div className="order-1 md:order-2">
                <img className="w-full" src="https://images.unsplash.com/photo-1627061560899-1c36a3d1657e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=977&q=80" />
            </div>

        </div>
    );
}

export default Banner;