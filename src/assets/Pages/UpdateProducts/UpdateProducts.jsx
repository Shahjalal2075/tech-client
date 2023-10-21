import { useLoaderData } from "react-router-dom";

const UpdateProducts = () => {

    const product = useLoaderData();

    const { _id,photo, productName, brandName, type, price, rating } = product;

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.productType.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;

        const product = { productName, brandName, type, price, photo, rating };

        console.log(product);

        fetch(`http://localhost:5000/products/${brandName}/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div className="bg-[#A2B7B5] p-20">
            <h2 className="text-4xl font-extrabold text-center mb-10">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>

                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productName" placeholder="Product Name" defaultValue={productName} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productType" defaultValue={type} placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update Product" className="btn btn-block bg-white mt-6" />

            </form>
        </div>
    );
};

export default UpdateProducts;