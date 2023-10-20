
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCardView from "../ProductCardView/ProductCardView";

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
        <div>
            <h2 className="text-5xl text-center font-bold my-16">{brandName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center">
                {
                    products.map(product => <ProductCardView
                        key={product._id}
                        product={product}
                    ></ProductCardView>)
                }
            </div>
        </div>
    );
};

export default ProductCard;