import { Outlet, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loading_1 from "../../../loading/Loading_1";

export function RootFindProduks(props){
    const navigate = useNavigation();
    if(navigate.state === 'loading'){
        return <Loading_1/>
    }
    return <Outlet/>
}