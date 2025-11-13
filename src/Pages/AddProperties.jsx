import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddProperties = () => {
  const { user } = useContext(AuthContext);

  const handleAddProperty = (e) => {
    e.preventDefault();
    const form = e.target;

    const newProperty = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      location: form.location.value,
      image: form.image.value,
      userEmail: user?.email,
      userName: user?.displayName,
      createdAt: new Date(),
    };

    // ✅ MongoDB তে property পাঠানো
    fetch("https://homenest-server-lilac.vercel.app/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data._id) {
          Swal.fire({
            icon: "success",
            title: "Property Added Successfully!",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Failed to add property!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto bg-base-100 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Add New Property
        </h2>

        <form onSubmit={handleAddProperty} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">Property Name</label>
            <input type="text" name="propertyName" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label font-medium">Category</label>
            <select name="category" className="select select-bordered" required>
              <option disabled selected>Select category</option>
              <option>Rent</option>
              <option>Sale</option>
              <option>Commercial</option>
              <option>Land</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-medium">Price</label>
            <input type="number" name="price" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label font-medium">Location</label>
            <input type="text" name="location" className="input input-bordered" required />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-medium">Image Link</label>
            <input type="text" name="image" className="input input-bordered" required />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-medium">Description</label>
            <textarea name="description" className="textarea textarea-bordered" rows="4" required></textarea>
          </div>

          <div className="form-control">
            <label className="label font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              className="input input-bordered bg-gray-100"
              value={user?.displayName || ""}
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">User Email</label>
            <input
              type="email"
              name="userEmail"
              className="input input-bordered bg-gray-100"
              value={user?.email || ""}
              readOnly
            />
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button type="submit" className="btn bg-orange-500 text-white hover:bg-orange-600 px-10">
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;
