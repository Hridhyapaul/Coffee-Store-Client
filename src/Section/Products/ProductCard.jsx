import { HiOutlineEye, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ coffee, setProducts, products }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id)
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
                //   
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(product => product._id !== _id)
                            setProducts(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl space-x-5 p-8">
            <figure className="w-[30%]"><img src={photo} alt="Movie" className="w-full h-full object-cover" /></figure>
            <div className="w-[70%] flex justify-center items-center">
                <div className="space-y-5">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <p>{details}</p>
                    </div>
                    <div className="space-y-2">
                        <p><span className="font-semibold">Category:</span> {category}</p>
                        <p><span className="font-semibold">Supplier:</span> {supplier}</p>
                        <p><span className="font-semibold">Taste:</span> {taste}</p>
                        <p><span className="font-semibold">Quantity:</span> {quantity}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-circle">
                        <HiOutlineEye className="text-lg"></HiOutlineEye>
                    </button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn btn-circle">
                            <HiOutlinePencil className="text-lg"></HiOutlinePencil>
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <HiOutlineTrash className="text-lg"></HiOutlineTrash>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;