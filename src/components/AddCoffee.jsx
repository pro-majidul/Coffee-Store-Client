import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import  Swal from 'sweetalert2';


const AddCoffee = () => {


    const handelupdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const suplier = form.suplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        // console.log(name, chef, suplier, test, category, details, photo);
        const products = {
            name, chef, suplier, test, category, details, photo
        }

        fetch('http://localhost:3000/coffee', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                   Swal.fire({
                        title: 'Success',
                        text: 'New Coffee Added Success',
                        icon: 'success',
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="bg-addCoffee bg-no-repeat bg-cover bg-center p-10">
            <Link to='/' className="flex items-center  py-4"> <FaLongArrowAltLeft />Back To Home </Link>
            <div className="bg-[#F4F3F0] p-10">
                <form onSubmit={handelupdateCoffee}>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input name="chef" type="text" placeholder="Enter Coffee Chef" className="input input-bordered" required />
                        </div> <div className="form-control">
                            <label className="label">
                                <span className="label-text">Suplier</span>
                            </label>
                            <input name="suplier" type="text" placeholder="Enter Coffee suplier" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input name="test" type="text" placeholder="Enter Coffee Test" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input name="category" type="text" placeholder="Enter Coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input name="details" type="text" placeholder="Enter Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-url</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;