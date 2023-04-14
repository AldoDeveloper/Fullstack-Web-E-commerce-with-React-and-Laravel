
import { useRouteError } from "react-router-dom";

export default function ErrorBoundary(){
     const error = useRouteError();
     if(parseInt(error.status) > 399){
           return <><h1>Error {error.status}</h1></>
     }else if(error.message === 'The user aborted a request.'){
          return <><h1>TIME OUT...</h1></>
     }else{
          return <><h1>{error.message}</h1></>
     }
}