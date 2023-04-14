import React from "react";
import { Pagination } from "react-bootstrap";
import UlasanGlobal from "../../../../../Context/ContextUlasanGlobal";

export default class PaginationUlasan extends React.Component{
     constructor(props){
          super(props);
     }
     render(){
          return <>
                <Pagination className="mt-3">
                         <Pagination.First></Pagination.First>
                         <Pagination.Item active={true}>1</Pagination.Item>
                         <Pagination.Item>2</Pagination.Item>
                         <Pagination.Item>3</Pagination.Item>
                         <Pagination.Item>4</Pagination.Item>
                         <Pagination.Last></Pagination.Last>
               </Pagination>
          </>
     }
}
PaginationUlasan.contextType = UlasanGlobal;