
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {

    const navigate = useNavigate();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.productType.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const product = { productName, brandName, type, price, photo, rating, details };

        console.log(product);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => {
                res.json()
                toast("Product Add Succsessfull.");
                setTimeout(() => {
                    navigate(`/${brandName}`);
                }, 1600);
            })
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div className="bg-[#A2B7B5] p-20">
            <h2 className="text-4xl font-extrabold text-center mb-10">Add Product</h2>
            <form onSubmit={handleAddProduct}>

                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productType" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="mb-8">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Add Product" className="btn btn-block bg-white mt-6" />

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProducts;