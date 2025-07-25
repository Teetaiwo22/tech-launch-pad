import React from "react";
import internships from "../jobs.json";
import { useState, useEffect } from "react";
import Internship from "./InternshipListing";
import Spinners from "./Spinners";

const InternshipListings = ({ isHome = false }) => {
  // const jobsListings = isHome ? jobs.slice(0, 3) : jobs no longer needed as we r now fetching from an mock api ..1
  const [internships, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      // const apiUrl = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs"
      const apiUrl = isHome ? "/api/internships?_limit=3" : "/api/internships"
      try {
        // const res = await fetch("http://localhost:8000/jobs");
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Internships" : "Browse Internships"}
        </h2>

        {/* {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))} */}

        {loading ? (
          <Spinners loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((internship) => (
              <Internship key={internship.id} internship={internship} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InternshipListings;
