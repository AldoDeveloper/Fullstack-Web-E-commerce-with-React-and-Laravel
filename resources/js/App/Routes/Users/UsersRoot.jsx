import OutletKeranjang from "../../components/Produk/Keranjang/OutletKeranjang"
import Keranjang from "../../components/Produk/Keranjang/Keranjang"
import PaymentProduk from "../../components/Produk/Payment/PaymentProduk";
import { AuthKeranjang } from "../../api/keranjang";
import * as ActionForm from '../../FromAction/ActionForm';
import MainUsers from "../../components/Users/MainUsers";
import MainIndexs from "../../components/Users/Component/MainIndexs";
import Index from "../../components/Users/Component/Review/Index";
import LayoutReview from "../../components/Users/Component/Review/LayoutReview";
import Notifications from "../../components/Users/Component/Notifications";
import FindProduk from "../../components/Users/Component/Review/Child/FindProduk";
import EditAlamat from "../../components/Users/Component/EditAlamat";
import * as loader from '../../api/controller';

const UsersRouted =  {
        path:'users',
        element: <OutletKeranjang/>,
        id: 'users',
        loader: AuthKeranjang,
        errorElement: <h3>Error Element....</h3>,
        handle: {
            crumbUserLocation : () => {
                return {
                    id: 'users',
                    to: '/users',
                    text: 'Users'
                }
            }
        },
        children:
        [
            {
                index: true,
                element: <h1>Elemet Index...</h1>
            },
            {
                path:'keranjang',
                element: <Keranjang/>,
                action: ActionForm.default.AuthActionKeranjang,
                loader: loader.default.useFetchGetCart,
                errorElement: <h3>Elemet Error...</h3>
            },
            {
                path: 'dasboard',
                element: <MainUsers/>,
                errorElement: <h2>Error Element...</h2>,
                handle: {
                    crumbUserLocation : (props) => {
                        return {
                            id: 'dasboard',
                            to: '/users/dasboard',
                            text: 'Dasboard'
                        }
                    }
                },
                children:[
                    {
                        index: true,
                        loader: async({params, request}) =>{
                            return { countdown: true }
                        },
                        element: <MainIndexs/>
                    },
                    {
                        path:'notification',
                        element: <Notifications/>,
                        handle:{
                            crumbUserLocation : () => {
                                return {
                                    id: 'notification',
                                    to: '/users/dasboard/notification',
                                    text: 'Notification'
                                }
                            }
                        }
                    },
                    {
                        path:'review',
                        element: <LayoutReview/>,
                        errorElement: <h4>Error Element Review</h4>,
                        handle: {
                            crumbUserLocation : () => {
                                return {
                                    id: 'review',
                                    to: '/users/dasboard/review',
                                    text: 'Review'
                                }
                            }
                        },
                        children: [
                            {
                                index: true,
                                element: <Index/>
                            },
                            {
                                path: ':id',
                                element: <FindProduk/>,
                                handle:{
                                    crumbUserLocation : (props) => {
                                        return {
                                            id: 'find',
                                            to: '/users/dasboard/review/:id',
                                            text: 'Show'
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        path:'status-message',
                        element: <h4>Test Element Status Pesan</h4>,
                        handle:{
                            crumbUserLocation : (props) => {
                                return {
                                    id: 'status',
                                    to: '/users/dasboard/status-message',
                                    text: 'Messages'
                                }
                            }
                        }
                    },
                    {
                        path:'info-alamat',
                        element: <EditAlamat/>,
                        handle:{
                            crumbUserLocation : (props) => {
                                return {
                                    id: 'info-alamat',
                                    to: '/users/dasboard/info-alamat',
                                    text: 'Info Alamat'
                                }
                            }
                        }
                    }
                ]
            },
            {
                path:':id/payment',
                element: <PaymentProduk/>,
                errorElement: <h3>Error Element...</h3>
            }
    ]
}
export { UsersRouted }
