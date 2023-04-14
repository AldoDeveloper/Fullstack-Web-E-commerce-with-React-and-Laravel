import { useParams } from "react-router-dom";

export default function(props){
     const {name} = useParams();
     return (<>
          <h3>Find Produk... {name}</h3>
     </>)
}