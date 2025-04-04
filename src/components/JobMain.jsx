import img from "../assets/Job-Board-Images/emp.png";
import img1 from "../assets/Job-Board-Images/emp1.png";
import { Link, useParams } from "react-router-dom";
import { companies } from "../utils/companies";

const JobMain = ({ jobs, search, vacancy, handleChange }) => {
  return (
    <section className=" container my-0 mx-auto flex flex-col">
      <section className="md:flex-col sm:flex my-0 mx-auto sm:mt-20 sm:sm:p-5 sm:mb-10 lg:flex-row">
        <section className="flex border flex-col w-100 items-center justify-center sm:justify-start sm:w-80 md:flex-row lg:flex-col h-80">
          <h4 className="mt-6">Vacancy Type</h4>
          <div className="sm:flex sm:flex-col sm:items-start sm:justify-start sm:w-60">
            <div class="inline-flex items-center">
              <input
                type="radio"
                className="ml-3"
                id="freelance"
                name="vacancy"
                value="freelance"
                onChange={handleChange}
              />
              {/* </label> */}
              <label
                class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
                htmlFor="freelance"
              >
                Freelance
              </label>
            </div>
            <div class="inline-flex items-center">
              <input
                type="radio"
                className="ml-3"
                id="fulltime"
                name="vacancy"
                value="fulltime"
                onChange={handleChange}
              />
              {/* </label> */}
              <label
                class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
                htmlFor="fulltime"
              >
                Fulltime
              </label>
            </div>
            <div class="inline-flex items-center">
              <input
                type="radio"
                className="ml-3"
                id="internship"
                name="vacancy"
                value="internship"
                onChange={handleChange}
              />
              {/* </label> */}
              <label
                class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
                htmlFor="internship"
              >
                Internship
              </label>
            </div>
            <div class="inline-flex items-center">
              <input
                type="radio"
                className="ml-3"
                id="parttime"
                name="vacancy"
                value="parttime"
                onChange={handleChange}
              />
              {/* </label> */}
              <label
                class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
                htmlFor="parttime"
              >
                Parttime
              </label>
            </div>
            <div class="inline-flex items-center">
              <input
                type="radio"
                className="ml-3"
                id="remote"
                name="vacancy"
                value="remote"
                onChange={handleChange}
              />
              {/* </label> */}
              <label
                class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
                htmlFor="remote"
              >
                Remote
              </label>
            </div>
            <div class="inline-flex items-center">
              <input
                type="radio"
                className="ml-3"
                id="temporary"
                name="vacancy"
                value="temporary"
                onChange={handleChange}
              />
              {/* </label> */}
              <label
                class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
                htmlFor="temporary"
              >
                Temporary
              </label>
            </div>
            <div class="inline-flex items-center">
              <input
                type="radio"
                className="ml-3"
                id="volunteer"
                name="vacancy"
                value="volunteer"
                onChange={handleChange}
              />
              {/* </label> */}
              <label
                class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
                htmlFor="volunteer"
              >
                Volunteer
              </label>
            </div>
          </div>
        </section>

        <section className="flex flex-col sm:flex sm:flex-col border-bottom px-5">
          {jobs
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.location.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((job, index) => (
              <div
                key={index}
                className="container sm:flex sm:items-center sm:justify-center"
              >
                <img src={img} alt="" className="w-fit flex " />
                <div className="flex flex-col">
                  <h4 className="font-bold mb-2 text-md mt-6">
                    {job.jobTitle}
                  </h4>
                  <div className="flex flex-col mb-4 gap-2 font-bold text-sm">
                    <span>Posted: {job.vacancies}</span>
                    <span>{job.company.email}</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="sm:flex">
                    <p className="text-[#a2a3a4]">{job.detail[0].desc}</p>
                    <button className="mt-4 border border-[#55A747] py-2 px-6 h-10 pl-8 sm:mt-2 sm:ml-4">
                      {job.vacancy}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <Link
            to="/"
            className="bg-[#343232] text-white py-2 px-4 mt-2 mb-8 items-center justify-center flex"
          >
            Back To HomePage
          </Link>
        </section>
      </section>
    </section>
  );
};

export default JobMain;


