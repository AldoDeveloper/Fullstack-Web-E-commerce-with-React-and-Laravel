import { Container, Card, Row, Col } from "react-bootstrap";
import BanerProduk from "./BanerProduk";
import Kategory from "./KetegoryProduk/Kategory";
import RegisterLangganan from "../Register/RegisterLangganan";
import { useRouteLoaderData } from "react-router-dom";
import GrosingProduk from "./GrosingProduk";
import Navbar from './Navbar';
import Footer from "../Footer";

// function SpesialPromo(props){
//     if(props?.data.length > 0)
//         return (
//             <>
//                 <Discount items={props?.data}/>
//                 <hr />
//             </>
//         )
//     return<></>
// }

export default function TemplateMainProduk(){
    const { advertisment, category, produk } = useRouteLoaderData("produk");
    console.log(produk);
    return (
        <>
            <section className="pages">
                <Navbar/>
                <Container className="mt-2 mb-3" style={{paddingTop: '110px'}}>
                    <div className="grid-pages">
                    <BanerProduk advertisment={advertisment} />
                    <Card className="new-style">
                        <Card.Body>
                            <Row className="row-cols-1 row-cols-md-2 g-4 justify-content-md-center">
                                <Col>
                                    <Kategory data={category} />
                                </Col>
                                <Col>
                                    <RegisterLangganan />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                        <hr/>
                        <GrosingProduk produk={produk} />
                        {/* <hr/>
                        <LanggananProduk items={produk_langganan}/>
                        <hr/>
                        <SpesialPromo data={promo_spesial}/>
                        <SelectionProduk/> */}
                    </div>
                </Container>
               <Footer/>
            </section>
        </>
    );
}
