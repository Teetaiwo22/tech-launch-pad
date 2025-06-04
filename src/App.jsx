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
import JobPage, {jobLoader} from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";



const App = () => {
  const addJob = (newJob) =>{
    console.log(newJob)
  }

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage/>}/>
      <Route path="/jobs/:id" element={<JobPage/>} loader= {jobLoader}/>
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  )
);

  return <RouterProvider router={router} />;
};

export default App;
