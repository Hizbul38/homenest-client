import React, { useEffect, useState, useContext } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";

const UpdateProperty = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch single property data from MongoDB
  useEffect(() => {
    fetch(`http://localhost:3000/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-orange-500 loading-lg"></span>
      </div>
    );

  if (!property) return <p className="text-center text-red-500">Property not found!</p>;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProperty = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      location: form.location.value,
      image: form.image.value,
      userName: user?.displayName,
      userEmail: user?.email,
    };

    fetch(`http://localhost:3000/properties/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Property updated successfully!");
          navigate(`/property/${id}`); // redirect to details page
        } else {
          toast.error("No changes detected or update failed.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Update failed!");
      });
  };

  // ✅ Handle Delete
  const handleDelete = () => {
    import("sweetalert2").then((Swal) => {
      Swal.default
        .fire({
          title: "Are you sure?",
          text: "This property will be permanently deleted!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/properties/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.default.fire("Deleted!", "Property removed successfully!", "success");
                  navigate("/my-properties");
                }
              });
          }
        });
    });
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-5 md:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Update Property
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="label font-semibold">Property Name</label>
            <input
              type="text"
              name="propertyName"
              defaultValue={property.propertyName}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              defaultValue={property.description}
              className="textarea textarea-bordered w-full"
              rows="3"
              required
            ></textarea>
          </div>

          <div>
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              defaultValue={property.category}
              className="select select-bordered w-full"
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>Duplex</option>
              <option>Commercial</option>
              <option>Studio</option>
              <option>Land</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label font-semibold">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={property.price}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={property.location}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="label font-semibold">Image Link</label>
            <input
              type="text"
              name="image"
              defaultValue={property.image}
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label font-semibold">User Name</label>
              <input
                type="text"
                value={user?.displayName || "Anonymous"}
                className="input input-bordered w-full"
                readOnly
              />
            </div>

            <div>
              <label className="label font-semibold">User Email</label>
              <input
                type="email"
                value={user?.email || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleDelete}
              className="btn bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn bg-orange-500 text-white hover:bg-orange-600"
            >
              Update Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
