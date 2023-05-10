import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee)

        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-10 rounded-md">
            <div className="container mx-auto px-[80px] space-y-8">
                <h1 className="text-2xl font-bold text-center">Update Existing Coffee Details</h1>
                <p className="text-center w-[600px] mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-x-8">
                        {/* Input-01 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Coffee Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-02 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Quantity</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="number" name="quantity" defaultValue={quantity} placeholder="Enter Coffee Quantity" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-03 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Supplier</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-04 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Taste</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-05 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Category</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-06 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Details</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-07 */}
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Photo</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <input className="w-full bg-[#D2B48C] text-center py-3 font-semibold mt-10 rounded-md cursor-pointer" type="submit" value="Update Coffee Details" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;