import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    company: "",
    title: "",
    department: "",
    preferredContactMethod: "",
    email: "",
    phone: "",
    companyAddress: "",
    companyLogo: "",
    workingHours: "",
    workingDays: "",
    billingCircle: "",
    additionalInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully:", formData);
    setFormData({
      clientName: "",
      company: "",
      title: "",
      department: "",
      preferredContactMethod: "",
      email: "",
      phone: "",
      companyAddress: "",
      companyLogo: "",
      workingHours: "",
      workingDays: "",
      billingCircle: "",
      additionalInformation: "",
    });
  };

  return (
    <main className="max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md mb-4">
      <div className="header max-w-3xl bg-blue-500 text-white rounded-t-md text-center">
        <h1 className="text-3xl mb-6 pt-3 font-semibold">Client Details</h1>
        <p className="text-sm">Enter the details of all incoming client</p>
      </div>

      <form className="space-y-4 p-8">
        <div>
          <label htmlFor="clientName" className="block text-gray-700">
            Client Name <span className="text-red-600"> * </span>
          </label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            autoComplete="on"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-gray-700">
            Company <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="department" className="block text-gray-700">
            Department <span className="text-red-600">*</span>
          </label>
          <select
            name=""
            id="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option value="">select</option>
            <option value="hr">HR</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="fiance">Finance</option>
            <option value="banking">Banking</option>
            <option value="procurement">Procurements</option>
            <option value="security">Security</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="preferredContactMethod"
            className="block text-gray-700"
          >
            Preferred Contact Method <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center space-x-40">
            <label htmlFor="email" className="flex items-center">
              <input
                type="radio"
                name="preferredContactMethod"
                value="email"
                checked={formData.preferredContactMethod === "email"}
                onChange={handleChange}
                className="w-4 h-4 mr-2"
              />
              Email
            </label>

            <label htmlFor="phone" className="flex items-center">
              <input
                type="radio"
                name="preferredContactMethod"
                value="phone"
                checked={formData.preferredContactMethod === "phone"}
                onChange={handleChange}
                className="w-4 h-4 mr-2"
              />
              Phone
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="companyAddress" className="block text-gray-700">
            Company Address <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            placeholder="Address line 2"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 mt-4 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            placeholder="City"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 mt-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            placeholder="Street/Region/Province"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 mt-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            placeholder="Posta/Zip Code"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 mt-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="workingHours" className="block text-gray-700">
            Working Hours <span className="text-red-600">*</span>
          </label>
          <input
            type="time"
            name="workingHours"
            value={formData.workingHours}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="workingDays" className="block text-gray-700">
            Working Days <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="workingDays"
            min={1}
            value={formData.workingDays}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="billingCircle" className="block text-gray-700">
            Billing Circle <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="billingCircle"
            value={formData.billingCircle}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            htmlFor="additionalInformation"
            className="block text-gray-700"
          >
            Additional Information <span className="text-red-600">*</span>
          </label>
          <textarea
            name="additionalInformation"
            id="additionalInformation"
            value={formData.additionalInformation}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            cols="40"
            rows="10"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactForm;
