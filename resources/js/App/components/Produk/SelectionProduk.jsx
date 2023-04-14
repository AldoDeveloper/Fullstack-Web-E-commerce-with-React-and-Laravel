import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import * as useFetch from '../../api/controller';
import CardProduks from "../Card/CardProduks";
import * as Icons from 'react-icons/bs';

export default class  extends React.Component{

     constructor(props){
          super(props);
          this.state = {
               isLoading:false,
               items: {},
               category:null,
               showList: [],
               error: null,
               actived: null,
          }
          this.handleClickShow = this.handleClickShow.bind(this);
     }
     handleClickShow(ev, produk, categoryType, id){
          this.setState((items) => {
               return  {...items, showList: produk, category: categoryType, actived: id}
          });
     }

    componentDidMount(){
          const fetch = useFetch.default.useShowSelection();
          fetch.then((value) => {
               console.log(value);
                this.setState((val) => {
                    return {
                         ...val, isLoading: true, items: value,
                         showList: value.message === 'error'  ? [] : value.data[0].produk,
                         category: value.message === 'error'  ? null : value.data[0].name,
                         actived:0
                    }
                })
          }).catch((error) => {
               this.setState((val) => {
                    return {...val, error: error}
               })
          })
     }
     
     render(){
          const { isLoading, items, error, showList, actived, category } = this.state;
          if(!isLoading) return <><h2>LOADING....</h2></>
          else if(error) return <><h5>ERROR...</h5></>
          else if(showList.length < 1) return;
          else{
               const { data, type} = items;
               return (
                    <>
                         <h4 className="mb-2">Produk Pilihan dan category Pilihan...</h4>
                         <Row>
                              <Col md={2} xs={2}>
                                   <Card style={{ border: 'none', boxShadow:'2px 3px 3px 2px rgba(0, 0, 0, 0.2)' }}>
                                        <Card.Header className="bg-success text-white">
                                             <Card.Title className="text-center">
                                                 {type}...
                                             </Card.Title>
                                        </Card.Header>
                                        <Card.Body style={{ padding: 0 }}>
                                             <ListGroup>
                                                  {
                                                       data?.map((items, idx) => (<>
                                                             <ListGroup.Item onClick={(ev) => this.handleClickShow(ev, items?.produk, items?.name, idx)} key={idx} style={{ fontSize: '15px', cursor:'pointer' }}
                                                             className={actived === (idx) ? 'text-danger' : 'side-list'}> 
                                                                <Icons.BsChevronDoubleRight/> {items?.name.toLocaleUpperCase()}
                                                            </ListGroup.Item >
                                                       </>))
                                                  }
                                             </ListGroup>
                                        </Card.Body>
                                   </Card>
                              </Col>
                              <Col>
                                   <Card>
                                        <Card.Header className="bg-success">
                                             <Card.Title className="text-center text-white">{category?.toLocaleUpperCase()}</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                             <Col>
                                                  <Row className="row-cols-1 row-cols-md-4 g-4">
                                                  {
                                                       showList?.map((items, idx) => (
                                                            <Col key={idx}>
                                                                 <a href="#" className="text-decoration-none text-success">
                                                                      <CardProduks fitur={items}/>
                                                                 </a>
                                                            </Col>
                                                       ))
                                                  }       
                                                  </Row>
                                             </Col>
                                        </Card.Body>
                                   </Card>
                              </Col>
                         </Row>
                    </>
               )
          }
     }
}