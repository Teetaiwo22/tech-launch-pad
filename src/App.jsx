import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import JobListings from "./Components/InternshipListings";
import NavBar from "./Components/NavBar";
import ViewAllInternships from "./Components/ViewAllInternships";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import InternshipsPage from "./Pages/InternshipsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import InternshipPage, { internshipLoader } from "./Pages/InternshipPage";
import AddInternship from "./Pages/AddInternship";
import EditInternshipPage from "./Pages/EditInternshipPage";

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
  const addInternship = async (newIntership) => {
    const res = await fetch("/api/internships", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIntership),
    });

    return;
  };

  //Delete Job
  const deleteInternship = async (id) => {
    // console.log("delete", id) ....for testing
    const res = await fetch(`/api/internships/${id}`, {
      method: "DELETE",
    });

    return;
  };

  //Update Job
  const updateInternship = async (internship) => {
    const res = await fetch(`/api/internships/${internship.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(internship),
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route
          path="/internships/:id"
          element={<InternshipPage deleteInternship={deleteInternship} />}
          loader={internshipLoader}
        />
        <Route
          path="/add-internship"
          element={<AddInternship addInternshipSubmit={addInternship} />}
        />
        <Route
          path="/edit-internship/:id"
          element={<EditInternshipPage updateInternshipSubmit={updateInternship} />}
          loader={internshipLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
