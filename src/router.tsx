import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomeView from "./views/HomeView";
import ServicesView from "./views/ServicesView";
import SolutionsView from "./views/SolutionsView";
import ResourcesView from "./views/ResourcesView";
import ContactView from "./views/ContactView";
import AboutView from "./views/AboutView";
import Learning from "./components/learning/Learning";
import CRMDetails from "./components/crm/CRMDetails";
import FreeTrial from "./components/crm/FreeTrial";
import Videos from "./components/crm/Videos";
import Subscribe from "./components/crm/Subscribe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      // Servicios
      {
        path: "services",
        element: <ServicesView />,
      },
      // Soluciones
      {
        path: "solutions",
        element: <SolutionsView />,
      },
      //CRM
      {
        path: "crm/details",
        element: <CRMDetails />,
      },
      {
        path: "/crm/free-trial",
        element: <FreeTrial />,
      },
      {
        path: "/crm/videos",
        element: <Videos />,
      },
      {
        path: "/crm/subscribe",
        element: <Subscribe />,
      },
      // cursos
      {
        path: "/learning",
        element: <Learning />,
      },
      // Recuros
      {
        path: "/resources",
        element: <ResourcesView />,
      },
      {
        path: "/contact",
        element: <ContactView />,
      },
      {
        path: "/about",
        element: <AboutView />,
      },
    ],
  },
]);
