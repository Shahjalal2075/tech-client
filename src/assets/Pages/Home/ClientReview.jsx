
const ClientReview = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-16">Discover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card shadow-xl bg-[#A2B7B5] p-6">
                    <figure><img src="https://i.ibb.co/DMsLmrf/iphn14.png" alt="" /></figure>
                    <div className="">
                        <h2 className="text-2xl text-center font-bold py-2">I Phone 14</h2>
                    </div>
                </div>
                <div className="card shadow-xl bg-[#A2B7B5] p-6">
                    <figure><img src="https://i.ibb.co/VpRvV9g/iphn15.png" alt="" /></figure>
                    <div className="">
                        <h2 className="text-2xl text-center font-bold py-2">I Phone 15 Pink</h2>
                    </div>
                </div>
                <div className="card shadow-xl bg-[#A2B7B5] p-6">
                    <figure><img src="https://i.ibb.co/68SC15x/s23.png" alt="" /></figure>
                    <div className="">
                        <h2 className="text-2xl text-center font-bold py-2">Galaxy S23 Ultra</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClientReview;