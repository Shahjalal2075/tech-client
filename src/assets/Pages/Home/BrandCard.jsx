import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { name, cover } = brand;

    return (
        <Link to={`/${name}`}>
            <div className="card h-96 shadow-xl bg-[#A2B7B5]">
                <figure className='flex justify-center items-center h-64'><img className='w-48' src={cover} /></figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold mt-4">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.object,
}