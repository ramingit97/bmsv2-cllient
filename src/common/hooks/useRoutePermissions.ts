import { lazy, useEffect, useState } from "react";

import { ROUTER } from "../constants/router";

type Router = {
    key: string;
    pathname: string;
    element: React.LazyExoticComponent<() => JSX.Element>;
}[];


const Dashboard: React.LazyExoticComponent<()=> JSX.Element>= lazy(() => import("../../modules/Dashboard"));
const Contacts: React.LazyExoticComponent<()=> JSX.Element>= lazy(() => import("../../modules/Contacts"));
const Companies: React.LazyExoticComponent<()=> JSX.Element>= lazy(() => import("../../modules/Companies"));
const CompanyDetail: React.LazyExoticComponent<()=> JSX.Element>= lazy(() => import("../../modules/Companies/pages/Detail"));
const CompanyAdd: React.LazyExoticComponent<()=> JSX.Element>= lazy(() => import("../../modules/Companies/pages/Add/"));


const app_router: Router = [
    {
        key: "dashboard",
        pathname: ROUTER.DASHBOARD,
        element: Dashboard,
    },
    {
        key: "companies",
        pathname: ROUTER.COMPANIES,
        element: Companies,
    },
    {
        key: "contacts",
        pathname: ROUTER.CONTACTS,
        element: Contacts,
    },
    {
        key: "companies-detail",
        pathname: ROUTER.COMPANIES_DETAIL,
        element: CompanyDetail,
    },
    {
        key: "company-add",
        pathname: ROUTER.COMPANY_ADD,
        element: CompanyAdd,
    },
];

export const useRoutePermissions = () => {
    const [routes, setRoutes] = useState<Router>([]);

    const permission_router = ["dashboard", "companies",'contacts',"crm",'companies-detail','company-add'];

    useEffect(() => {
        accessRouter();
    }, []);

    function accessRouter() {
        const access: Router = [];
        for (const route of app_router) {
            if (permission_router.includes(route.key)) {
                access.push(route);
            }
        }
        setRoutes(access);
    }

    return { routes, navigate_router: routes?.[0]?.pathname };
};
