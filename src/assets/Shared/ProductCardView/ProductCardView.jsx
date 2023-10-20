import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProductCardView = ({ product }) => {

    const { _id, photo, productName, brandName, type, price,rating } = product;

    return (
        <div className="card card-side bg-[#A2B7B5] p-6 shadow-xl flex">
            <figure className='w-1/2'><img src={photo} alt="Movie" /></figure>
            <div className="card-body w-1/2">
                <h2 className="text-2xl font-bold">{productName}</h2>
                <p className='text-xl font-semibold pt-3'>{brandName}</p>
                <p className='text-xl font-semibold'>{type} </p>
                <p className='text-xl font-semibold'>Price: {price} </p>
                <div className="rating my-4">
                    {
                        (rating==="1")?<input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked />:<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    }
                    {
                        (rating==="2")?<input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked />:<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    }
                    {
                        (rating==="3")?<input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked />:<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    }
                    {
                        (rating==="4")?<input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked />:<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    }
                    {
                        (rating==="5")?<input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked />:<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    }
                </div>
                <div className="flex justify-between">
                    <Link to={`/${brandName}/${_id}`} className="btn btn-primary">Details</Link>
                    <Link to={`/update/${brandName}/${_id}`} className="btn btn-primary">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCardView;

ProductCardView.propTypes = {
    product: PropTypes.object,
}