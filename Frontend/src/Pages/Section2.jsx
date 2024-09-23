import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    college: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit",
        formData
      );
      console.log(response.data);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        style={{ backgroundColor: "#64d4fdaa" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://startuptn.in/images/blue%20horizontal.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration Form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Department
            </label>
            <div className="mt-2">
              <input
                id="department"
                name="department"
                type="text"
                value={formData.department}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="college"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              College Name
            </label>
            <div className="mt-2">
              <input
                id="college"
                name="college"
                type="text"
                value={formData.college}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <input
                id="message"
                name="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                required
                autoComplete="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default App;
