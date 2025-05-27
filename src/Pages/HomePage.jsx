import React from "react";
import NavBar from "../Components/NavBar"
import Hero from "../Components/Hero"
import HomeCards from "../Components/HomeCards"
import JobListings from "../Components/JobListings"
import ViewAllJobs from "../Components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
      
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"/>
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
