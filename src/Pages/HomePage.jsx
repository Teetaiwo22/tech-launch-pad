import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import InternshipsListings from "../Components/InternshipListings";
import ViewAllInternships from "../Components/ViewAllInternships";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Kickstart your tech career with curated internships"
        subtitle="Find roles in frontend development, UI/UX, data analysis and more."
      />
      <HomeCards />
      <InternshipsListings isHome={true} />
      <ViewAllInternships />
    </>
  );
};

export default HomePage;
