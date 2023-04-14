import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/Error/errorPages";
import RootHome from "../components/rootHome";
import * as loader from '../api/controller'
import '../../css/app.css';
import LandingPages from "../components/landingPages/landingPages";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import RootProduk from "./RootProduk";
import SingleProduk from "../components/Produk/singleProduct";
import FindProduk from "../components/Produk/FindProduk";
import AuthLayout from "../components/Auth/AuthLayout";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import * as ActionForm from "../FromAction/ActionForm";
import rootAdmin from "./AdminRoot";
import TemplateMainProduk from "../components/Produk/TemplateMainProduk";
import Navigations from "../components/Produk/Find/Navigations";
import { RootFindProduks } from "../components/Produk/Find/RootFindProduks";
import { UsersRouted } from "./Users/UsersRoot";
const type_template = ['GROSIR', 'ECERAN']

const root = createBrowserRouter(
     [
          rootAdmin,
          {
               path:'/',
               element:<RootHome/>,
               id:'auth-check',
               loader:loader.default.checkAuth,
               errorElement:<ErrorBoundary/>,
               children:[
                    UsersRouted,
                    {
                         index:true,
                         element:<><LandingPages/></>,
                         loader:({request, params}) => {return {req: request, par:params}}
                    },
                    {
                         path:'auth',
                         element:<AuthLayout/>,
                         errorElement:<ErrorBoundary/>,
                         children:
                         [
                              {
                                   index:true,
                                   loader: async ({request, params}) => {
                                        return window.location.href ='/auth/login'
                                   }
                              },
                              {
                                   path:'login',
                                   action: ActionForm.default.Login,
                                   id:'id-login',
                                   loader: async({request, params}) =>{
                                        const url = new URL(window.location.href);
                                        console.log(url)
                                        return {action: 'login'}
                                   },
                                   element:<Login/>
                              },
                              {
                                   path: 'logout',
                                   action: ActionForm.default.Logout,
                              },
                              {
                                   path:'register',
                                   element:<Register/>
                              },
                         ]
                    },
                    {
                         path:'produk',
                         element:<RootProduk/>,
                         errorElement:<ErrorBoundary/>,
                         id:'produk',
                         loader: loader.default.useDataProduk,
                         action:ActionForm.default.Logout,
                         children:
                         [
                              {
                                   index:true,
                                   element:<TemplateMainProduk/>,
                              },
                              {
                                   path:'find/:name',
                                   element:<FindProduk/>,
                              },
                              {
                                   path:'promo/:id',
                                   element:<SingleProduk/>
                              },
                         ]
                    },
                    {
                         path:'finds',
                         element: <RootFindProduks/>,
                         errorElement:<h5>Errro Element...</h5>,
                         children:[
                              {
                                   index:true,
                                   element:<h4>Hello Index</h4>,
                                   errorElement: <h4>Error Data...</h4>
                              },
                              {
                                   path:'retail/:id',
                                   element:<Navigations template={type_template[1]}/>,
                                   loader: loader.default.useFetcFindProduk,
                                   errorElement: <h4>Error Data...</h4>
                              },
                              {
                                   path:'grosir/:id',
                                   element: <Navigations template={type_template[0]}/>,
                                   loader:loader.default.useFetchFindGrosir,
                                   errorElement: <h4>Error Data...</h4>
                              }
                         ]
                    },
               ]
          },
     ]
);
export default function Root(){
     return <>
            <RouterProvider router={root}/>
            <ToastContainer/>
     </>
}
