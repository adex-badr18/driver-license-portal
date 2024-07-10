import {
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../components/Root";
import HomePage from "../pages/home/HomePage";
import Support from "../pages/support/Support";
import Faq from "../pages/faq/Faq";
import Contact from "../pages/contact/Contact";
import ApplicationHome from "../pages/applications/ApplicationHome";
import ApplicationForm from "../pages/applications/ApplicationForm";
import Appointment from "../pages/appointment/Appointment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "application",
                element: <ApplicationHome />,
            },
            {
                path: "application/form",
                element: <ApplicationForm />,
            },
            {
                path: "appointment",
                element: <Appointment />,
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
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
        // <div>
        //     <Routes>
        //         <Route path="/" element={<HomePage />} />
        //         <Route path="/support" element={<Support />} />
        //         <Route path="/faq" element={<Faq />} />
        //         <Route path="/contact" element={<Contact />} />
        //     </Routes>
        // </div>
    );
};

export default Router;
