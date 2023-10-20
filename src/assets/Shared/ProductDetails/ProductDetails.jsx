import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {

    const product = useLoaderData();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleAddCart = () => {

        const email = user.email;
        const productName = product.productName;
        const brandName = product.brandName;
        const type = product.type;
        const price = product.price;
        const photo = product.photo;
        const rating = product.rating;

        const cartProduct = { email,productName, brandName, type, price, photo, rating };

        console.log(cartProduct);

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => {
                res.json()
                toast("Product Added Cart Succsessfull.");
                setTimeout(() => {
                    navigate(`/${product.brandName}`);
                }, 1600);
            })
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-3/4">
                <div className="flex justify-center">
                    <img className="w-3/4" src={product.photo} alt="" />
                </div>
                <h2 className="card-title text-3xl font-bold text-[#1F2937] my-8">{product.productName}</h2>
                <p className="text-lg text-[#1F2937] font-normal">{product.details}</p>
                <div className="flex justify-between items-center my-10">
                    <p className='text-xl text-[#1F2937] font-bold'>Price: {product.price}</p>
                    <button onClick={handleAddCart} className='btn btn-neutral text-[#fff]'>Add Cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetails;