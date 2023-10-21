import { useEffect } from "react";
import { useState } from "react";
import BrandCard from "./BrandCard";

const AllBrand = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://tech-server-7qnmulr4e-mullah-mohammad-shahjalals-projects.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);

    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-16">Our Trusted Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
                {
                    brands.map(brand => <BrandCard
                        key={brand._id}
                        brand={brand}
                    ></BrandCard>)
                }
            </div>

        </div>
    );
};

export default AllBrand;