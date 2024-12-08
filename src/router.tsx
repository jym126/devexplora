import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomeView from "./views/HomeView";
import ServicesView from './views/ServicesView';
import SolutionsView from "./views/SolutionsView";
import ResourcesView from "./views/ResourcesView";
import ContactView from "./views/ContactView";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                index: true,
                element: <HomeView/>
            },
            {
                path: '/services',
                element: <ServicesView />
            },
            {
                path: '/solutions',
                element: <SolutionsView />
            },
            {
                path: '/resources',
                element: <ResourcesView />
            },
            {
                path: '/contact',
                element: <ContactView />
            },
        ]
    },

]);
