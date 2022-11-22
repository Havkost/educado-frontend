import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Non-auth pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// Auth Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import CourseEdit from "./pages/CourseEdit";
import SectionEdit from "./pages/SectionEdit";
import ExerciseDetail from "./pages/ExerciseDetail";

//Educado Admin tables for reviewing the Content Creator Applicants
import EducadoAdmin from "./pages/EducadoAdmin";
import SingleApplicantView from "./pages/SingleApplicantView";


function App() {

  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/courses",
      element: <Courses />,
      errorElement: <NotFound />,
    },
    {
      path: "/courses/edit/:id",
      element: <CourseEdit />
    },
    {
      path: "/courses/edit/:cid/sections/:sid",
      element: <SectionEdit />
    },
    {
      path: "/settings",
      element: <p>settings</p>
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <NotFound />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <NotFound />
    },
    {
      path: "/educado_admin",
      element: <EducadoAdmin />,
    },
    {
      path: "/educado_admin/applications",
      element: <EducadoAdmin />
    },
    {
      path: "/educado_admin/applications/:id",
      element: <SingleApplicantView />,
    }
  ])

  return <RouterProvider router={router} />;
}

export default App
