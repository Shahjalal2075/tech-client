import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProductCardView = ({product}) => {

    const { photo,productName,brandName,type,price } = product;

    return (
        <div className="card card-side bg-[#A2B7B5] p-6 shadow-xl flex">
            <figure className='w-1/2'><img src={photo} alt="Movie" /></figure>
            <div className="card-body w-1/2">
                <h2 className="text-2xl font-bold">{productName}</h2>
                <p className='text-xl font-semibold'>{brandName}</p>
                <p className='text-xl font-semibold'>{type} </p>
                <p className='text-xl font-semibold'>{price} </p>
                <div className="flex justify-between">
                    <Link className="btn btn-primary">Details</Link>
                    <Link className="btn btn-primary">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCardView;

ProductCardView.propTypes = {
    product: PropTypes.object,
}