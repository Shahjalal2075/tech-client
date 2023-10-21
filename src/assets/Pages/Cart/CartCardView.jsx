import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartCardView = ({ product }) => {

    const { _id, photo, productName, brandName, type, price, rating } = product;
    
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tech-server-7qnmulr4e-mullah-mohammad-shahjalals-projects.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        res.json()
                    })
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `${productName} has been deleted.`,
                                'success'
                            )
                        }
                    })
                setTimeout(() => {
                    window.location.reload();
                }, 600);
            }
        })

    }

    return (
        <div className="h-96 card card-side bg-[#A2B7B5] p-6 shadow-xl flex lg:flex-row flex-col">
            <figure className='lg:w-1/2 w-full'><img src={photo} alt="Movie" /></figure>
            <div className="card-body lg:w-1/2 w-full">
                <h2 className="text-2xl font-bold">{productName}</h2>
                <p className='text-xl font-semibold pt-3'>{brandName}</p>
                <p className='text-xl font-semibold'>{type} </p>
                <p className='text-xl font-semibold'>Price: {price} </p>
                <div className="rating my-4">
                    {
                        (rating === "1") ? <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    }
                    {
                        (rating === "2") ? <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    }
                    {
                        (rating === "3") ? <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    }
                    {
                        (rating === "4") ? <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    }
                    {
                        (rating === "5") ? <input type="radio" name={_id} className="mask mask-star-2 bg-orange-400" checked /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    }
                </div>
                <div className="flex justify-between">
                    <button onClick={handleDelete} className='py-3 text-xl bg-red-600 text-white font-bold w-1/2 rounded-lg border-red-600'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartCardView;

CartCardView.propTypes = {
    product: PropTypes.object,
}