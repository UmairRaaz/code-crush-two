import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LineEffect from "../components/Buttons/LineEffect";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const CareersApply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };
  const [fileName, setFileName] = useState("");

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-100 text-gray-700">
      <section className="py-12">
        <div className="w-[90%] mx-auto px-4">
          <h2 className="text-4xl text-center mb-8">Job Details</h2>
          <LineEffect />
          <div className="bg-white p-6 rounded-lg my-8">
            <h3 className="text-5xl font-bold mb-4">Frontend Developer</h3>
            <p className="mb-4">
              <strong>Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Develop and maintain web applications using HTML, CSS, and
                JavaScript.
              </li>
              <li>
                Collaborate with designers and backend developers to create
                seamless user experiences.
              </li>
              <li>Ensure the technical feasibility of UI/UX designs.</li>
              <li>Optimize applications for maximum speed and scalability.</li>
            </ul>
            <p className="mb-4">
              <strong>Requirements:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Proven experience as a Frontend Developer or similar role.
              </li>
              <li>
                Familiarity with responsive design and cross-browser
                compatibility.
              </li>
              <li>
                Strong understanding of JavaScript frameworks such as React or
                Angular.
              </li>
              <li>Excellent problem-solving skills and attention to detail.</li>
            </ul>
            <p className="mb-4">
              <strong>Benefits:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Competitive salary and benefits package.</li>
              <li>Opportunities for professional growth and development.</li>
              <li>Collaborative and inclusive work environment.</li>
              <li>Flexible working hours and remote work options.</li>
            </ul>
          </div>
          <h2 className="text-3xl text-center font-bold mb-8">
            Apply for a Position
          </h2>
          <LineEffect />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-md max-w-lg mt-6 mx-auto"
          >
            {/* First Name */}
            <div className="mb-4">
              <input
                id="firstName"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className={`appearance-none border-b font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <input
                id="lastName"
                {...register("lastName", { required: "Last name is required" })}
                className={` appearance-none border-b w-full font-normal py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <input
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                className={`appearance-none border-b font-normal w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                type="tel"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                className={`appearance-none font-normal border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Add your CV */}
            <div className="mb-4">
              <label
                htmlFor="cv"
                className={`cursor-pointer bg-blue-400 text-white w-44 flex flex-col items-center justify-center ${
                  errors.cv ? "border-red-500" : "border-gray-300 "
                } border-b py-2 px-3 rounded-lg transition duration-300 ease-in-out
                  ${errors.cv ? "bg-red-100" : "bg-white"}`}
              >
                <span className="text-white">Upload Your CV</span>
                <input
                  id="cv"
                  type="file"
                  {...register("cv", { required: "CV is required" })}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {errors.cv && (
                <p className="text-red-500 text-xs mt-1">{errors.cv.message}</p>
              )}
              {fileName && (
                <div className="mt-2 text-gray-700">
                  Selected File:{" "}
                  <span className="font-semibold">{fileName}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareersApply;
