import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'New Coffee added successfully',
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
                <h1 className="text-2xl font-bold text-center">Add New Coffee</h1>
                <p className="text-center w-[600px] mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-2 gap-x-8">
                        {/* Input-01 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Coffee Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-02 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Quantity</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="number" name="quantity" placeholder="Enter Coffee Quantity" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-03 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Supplier</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-04 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Taste</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-05 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Category</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-06 */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Details</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered" />
                            </label>
                        </div>
                        {/* Input-07 */}
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Photo</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <input className="w-full bg-[#D2B48C] text-center py-3 font-semibold mt-10 rounded-md cursor-pointer" type="submit" value="Add Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;