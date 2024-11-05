import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
// @ts-ignore
import BaseLayout from "./layouts/BaseLayout.tsx";
import AuthMiddleware from './middlewares/AuthMiddleware.tsx';
import AuthLayout from './layouts/AuthLayout.tsx';

export const routePath = {
    HOME:"/home",
    LOGIN:"/auth/login"
}


const Loader = (Component) => (props) =>
    (
        <Suspense fallback={<div>Loading</div>}>
            <Component {...props} />
        </Suspense>
    );



const Login = Loader(lazy(() => import("./modules/Auth/pages/Login")));
const Companies = Loader(lazy(() => import("./modules/Companies")));
const CompaniesDetail = Loader(lazy(() => import("./modules/Companies/pages/Detail")));

const ProductAdd = Loader(lazy(() => import("./modules/Product/pages/add/ProductAddForm.tsx")));
const ProductList = Loader(lazy(() => import("./modules/Product/pages/list/ProductList.tsx")));

const routes: RouteObject[] = [
    {
        path: 'auth',
        element: <AuthLayout><BaseLayout/></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login/>
            } ,
            
        ]
    },
    {
        path: 'home',
        element:(<AuthMiddleware><BaseLayout /></AuthMiddleware>),
        children: [
            {
                path: '',
                element: <Companies/>
            },
            {
                path: 'companies/:id',
                element: <CompaniesDetail/>
            }
        ]
      },
      {
        path: 'product',
        element:(<AuthMiddleware><BaseLayout /></AuthMiddleware>),
        children: [
            {
                path: '',
                element: <ProductList/>
            },
            {
                path: 'add',
                element: <ProductAdd/>
            },
           
        ]
      },
]


export default routes;