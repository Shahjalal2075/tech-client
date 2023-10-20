import { useContext, useState } from "react";
import CartCardView from "./CartCardView";
import { AuthContext } from "../../providers/AuthProvider";

const Cart = () => {

    const { user } = useContext(AuthContext);

    const [products, setProducts] = useState([]);

    return (
        <div className="">
            <h2 className="text-5xl text-center font-bold my-16">My Cart: {user.email}</h2>
            {
                (products.length === 0)
                    ?
                    <div className="mx-auto w-full mt-10">
                        <div className="">
                            <div className="flex justify-center">
                                <img className="w-20" src="https://i.ibb.co/qCzm3nN/warning.png" alt="" />
                            </div>
                            <h2 className="text-center text-site-black font-bold text-2xl mt-8">You have not added any products.</h2>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center">
                            {
                                products.map(product => <CartCardView
                                    key={product._id}
                                    product={product}
                                ></CartCardView>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;