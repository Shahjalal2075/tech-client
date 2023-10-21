
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCardView from "../ProductCardView/ProductCardView";
import AdsSlider from "../AdsSlider/AdsSlider";

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    const { brandName } = useParams();

    const loaderData = useLoaderData();


    useEffect(() => {
        const dataList = [];

        for (const data of loaderData) {
            dataList.push(data);
        }
        setProducts(dataList);
    }, [loaderData])

    console.log(loaderData)

    return (
        <div className="my-6">

            <AdsSlider></AdsSlider>

            <h2 className="text-5xl text-center font-bold my-16">{brandName}</h2>
            {
                (products.length === 0)
                    ?
                    <div className="mx-auto w-full mt-10">
                        <div className="">
                            <div className="flex justify-center">
                                <img className="w-20" src="https://i.ibb.co/qCzm3nN/warning.png" alt="" />
                            </div>
                            <h2 className="text-center text-site-black font-bold text-2xl mt-8">Oops!! Sorry, There is no available product here</h2>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center">
                            {
                                products.map(product => <ProductCardView
                                    key={product._id}
                                    product={product}
                                ></ProductCardView>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductCard;