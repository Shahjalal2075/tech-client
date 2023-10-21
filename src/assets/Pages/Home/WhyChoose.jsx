
const WhyChoose = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-16">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card card-side bg-[#A2B7B5] p-6 shadow-xl flex-col">
                    <figure className='w-full'><img className="w-1/2" src="https://i.ibb.co/Wpxytr9/fastdelivery.png" alt="Movie" /></figure>
                    <div className="card-body w-full text-center">
                        <h2 className="text-3xl font-bold">Fastest Delivery</h2>
                    </div>
                </div>

                <div className="card card-side bg-[#A2B7B5] p-6 shadow-xl flex-col">
                    <figure className='w-full'><img className="w-1/2" src="https://i.ibb.co/MDN8wnN/smallorder.png" alt="Movie" /></figure>
                    <div className="card-body w-full text-center">
                        <h2 className="text-3xl font-bold">Small Order Accepted</h2>
                    </div>
                </div>

                <div className="card card-side bg-[#A2B7B5] p-6 shadow-xl flex-col">
                    <figure className='w-full'><img className="w-1/2" src="https://i.ibb.co/cxN2wnH/cheapprice.png" alt="Movie" /></figure>
                    <div className="card-body w-full text-center">
                        <h2 className="text-3xl font-bold">Cheap Price</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChoose;