import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddInternship = ({ addInternshipSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Remote");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under ₦100,000");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    {
      /**POST Request
      construting object from the form field to be submitted to our API or backend
      Need to match it up with the way the API is structured..e.g from the company object */
    }
    const newInternship = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addInternshipSubmit(newInternship);

    toast.success("Internship Added Successfully");

    return navigate("/internships");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Internship</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Internship Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Project-based">Project-based</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Internship Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under #100,000K">Under &#8358;100,000K</option>
                <option value="₦100,000K - ₦110,000K">₦100,000K - ₦110,000K</option>
                <option value="₦110,000K - ₦120,000K">₦110,000K - ₦120,000K</option>
                <option value="₦120,000K - ₦130,000K">₦120,000K - ₦130,000K</option>
                <option value="₦130,000K - ₦140,000K">₦130,000K - ₦140,000K</option>
                <option value="₦140,000K - ₦150,000K">₦140,000K - ₦150,000K</option>
                <option value="₦150,000K - ₦160,000K">₦150,000K - ₦160,000K</option>
                <option value="₦160,000K - ₦170,000K">₦160,000K - ₦170,000K</option>
                <option value="₦170,000K - ₦180,000K">₦170,000K - ₦180,000K</option>
                <option value="₦180,000K - ₦200,000K">₦180,000K - ₦200,000K</option>
                <option value="Over ₦200K">Over ₦200,000K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Internship
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddInternship;
