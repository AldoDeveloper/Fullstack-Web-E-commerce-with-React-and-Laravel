import { Outlet, useNavigation, useRouteLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Loading_1 from "../loading/Loading_1";

export default function (props) {
    const auth = useRouteLoaderData('auth-check');
    const navigate = useNavigation();
    if(auth?.code === 401 && window.sessionStorage.getItem('count-auth') === null || window.sessionStorage.getItem('count-auth') === 'false') {
          toast.warning("Perhatian!!, Masuk dan gunakan Akun Anda.. ?", {
               autoClose: 3000,
          });
          window.sessionStorage.setItem("count-auth", 'true');
    }
    if(navigate.state === 'loading') return <Loading_1/>
    return <Outlet/>
}
