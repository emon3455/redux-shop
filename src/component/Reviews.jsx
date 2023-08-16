import { Rating } from "@mui/material";


const Reviews = () => {
    return (
        <div className="">

            <h2 className="text-4xl font-bold text-center ">Top <span className="text-red-500">Clients</span> </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10 p-4">

                <div className="shadow-2xl p-4">
                    <div className="">
                        <img className="h-20 w-20 rounded-full mx-auto" src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/258581489_1774667502923822_3939754741217444221_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=3-LQye8n5UMAX8SxBTt&_nc_ht=scontent.fdac27-2.fna&oh=00_AfDyNYgxNdhlkIRfPDbM8xFaM3bvnMv5jq95Jbyqj-_4iw&oe=64E1D739" alt="user1" />
                    </div>
                    <div className="text-center my-2">
                        <Rating
                            name="simple-controlled"
                            value={4}
                            readOnly
                        />
                    </div>
                    <p>
                        I recently had the pleasure of using this e-commerce website for my shopping needs, and overall, I had a positive experience.
                    </p>
                    <p className="text-center font-semibold text-lg"> -- Emon --</p>
                </div>

                <div className="shadow-2xl p-4">
                    <div className="">
                        <img className="h-20 w-20 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyDzGUOkGUhw1tLvonMzkSk4XSa4f4aVtmEo6fyKOSoKE4jFiUH0V5MeY_B2RZRCMuPI&usqp=CAU" alt="user1" />
                    </div>
                    <div className="text-center my-2">
                        <Rating
                            name="simple-controlled"
                            value={3}
                            readOnly
                        />
                    </div>
                    <p>
                        As an international shopper, I found the shipping costs to be slightly higher than expected. Offering more affordable international shipping options could attract a broader global customer base.
                    </p>
                    <p className="text-center font-semibold text-lg"> -- Hridoy -- </p>
                </div>

                <div className="shadow-2xl p-4">
                    <div className="">
                        <img className="h-20 w-20 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFI9EQcHFSOPN5QMpfL4thFzPKBlL4-f0l2TVYAiiKu3-_jAjzaCV0nvEdsSDkSoGp5sM&usqp=CAU" alt="user1" />
                    </div>
                    <div className="text-center my-2">
                        <Rating
                            name="simple-controlled"
                            value={5}
                            readOnly
                        />
                    </div>
                    <p>
                        The website recommendation engine impressed me with its accuracy. It suggested products that aligned with my interests and previous purchases, making my shopping journey even more enjoyable.
                    </p>
                    <p className="text-center font-semibold text-lg"> -- Ariyan -- </p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;