import React from "react";
import internships from "../jobs.json";
import InternshipListings from "../Components/InternshipListings";

const InternshipsPage = () => {
  return (
    <>
      <section className="bg-blue-50 px-4 py-6">
        <InternshipListings />
      </section>
    </>
  );
};

export default InternshipsPage;
