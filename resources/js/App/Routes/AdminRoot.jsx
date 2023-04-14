
import { defer } from "react-router-dom";
import Admin from "../components/Admin";

const url = window.location.origin;
const rootAdmin = {
     path: 'admin',
     id:'admin',
     // loader:async ({request, params}) =>{
     //      const getApi = await fetch(url + '/api/test-await', {
     //           method: 'GET',
     //           'Content-type': 'application/json',
     //      })
     //      const notAwait = new Promise((resolve, reject) => {
     //           setTimeout(() =>{
     //                resolve('Hello Worl  seconds')
     //           }, 5000);
     //      })
     //      return defer({getApi, notAwait})
     // },
     element: <Admin/>
}

export default rootAdmin;