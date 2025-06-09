import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import JobListings from "./Components/JobListings";
import NavBar from "./Components/NavBar";
import ViewAllJobs from "./Components/ViewAllJobs";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage, { jobLoader } from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";

const App = () => {
  {
    /**To test 
    const addJob = (newJob) =>{
    console.log(newJob)
  }
    */
  }

  //Actual Posting to API
  //Adding New Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    // console.log("delete", id) ....for testing
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    return;
  };

  //Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
