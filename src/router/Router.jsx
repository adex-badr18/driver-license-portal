
import DrivingSchool from '../pages/drivingschool/DrivingSchool';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Root from "../components/Root";
import ApplicationForm from "../pages/applications/ApplicationForm";
import ApplicationHome from "../pages/applications/ApplicationHome";
import Appointment from "../pages/appointment/Appointment";
import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import Faq from "../pages/faq/Faq";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";
import { loader as profileLoader } from '../pages/profile/Profile';
import Support from "../pages/support/Support";
import Verify from "../pages/verification/Verify";
import { loader as appointmentLoader } from "../pages/appointment/Appointment";
import Dashboard from "../pages/dashboard/Dashboard"
import { loader as dashboardLoader } from '../pages/dashboard/Dashboard';
import CaptureCenter from "../pages/capture_center/CaptureCenter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
          index: true,
          element: <HomePage />,
      },
      {
          path: "faq",
          element: <Faq />,
      },
      {
          path: "support",
          element: <Support />,
      },
      {
          path: "login",
          element: <LoginPage />,
      },
      {
          path: "signup",
          element: <SignupPage />,
      },
      {
          path: "verify-license",
          element: <Verify />
      },
      {
          path: "capture-centers",
          element: <CaptureCenter />,
      },
      {
        path: 'driving-schools',
        element: <DrivingSchool />,
      },
      {
        element: <AuthLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
                loader: dashboardLoader
            },
            {
                path: "profile",
                element: <Profile />,
                loader: profileLoader
            },
            {
                path: "applications/:type",
                element: <ApplicationHome />,
            },
            {
                path: "applications/:type/form",
                element: <ApplicationForm />,
            },
            {
                path: "appointment",
                element: <Appointment />,
                loader: appointmentLoader
            },
        ]
      },
    ],
  },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default Router;
