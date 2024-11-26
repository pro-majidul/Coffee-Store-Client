import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpdateCoffee = () => {
    return (
        <div className="bg-addCoffee bg-no-repeat bg-cover bg-center p-10">
            <Link to='/' className="flex items-center py-4"> <FaLongArrowAltLeft />Back To Home </Link>
            <div className="bg-[#F4F3F0] p-10">
           git     <form >
                    <div className="grid grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Chef" className="input input-bordered" required />
                        </div> <div className="form-control">
                            <label className="label">
                                <span className="label-text">Suplier</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee suplier" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Test" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;