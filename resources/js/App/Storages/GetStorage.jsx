import { useLoaderData } from "react-router-dom";


const useGetAuth = () =>{
    const auth = useLoaderData('auth-check');
    return auth;
}

export {useGetAuth};