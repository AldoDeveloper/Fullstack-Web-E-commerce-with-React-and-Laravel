import React from "react";
import { Card } from "react-bootstrap";
import TimeLineProduk from "./TimeLineProduk";
import { AnimatePresence, motion } from "framer-motion";
import { ComunicationElement } from "../Context/GlobalContextFindProduk";
import PemesananStatus from "./PemesananStatus";
import PaymentStatus from "./PaymentStatus";

const TabsApis = [
    {
        id: 1,
        title: 'Status Pengiriman',
        element: <TimeLineProduk/>
    },
    {
        id: 2,
        title: 'Status Pemesanan',
        element: <PemesananStatus/>
    },
    {
        id: 3,
        title: 'Status Pembayaran',
        element:<PaymentStatus/>
    },
];

const AnimatedSlideTabs = {
    isShow:{
        opacity: 1,
        y:0,
    },
    isHidde:{
        opacity: 0, 
        y:-10,
    },
    exit:{
        y: 10,
        opacity: 0,
    }
}

const ActivedFromStar = TabsApis.find((values) => {
    return values.id === 1;
});

export default class FindProduk extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items_element: ActivedFromStar?.element,
            keys: ActivedFromStar?.id,
        }
        this.handleChangesSingleTabs = this.handleChangesSingleTabs.bind(this);
        this.handleGlobalClickToTimeLine = this.handleGlobalClickToTimeLine.bind(this);

    }
    updatedClasseTabs(id){
        const doc = document.querySelectorAll('button#' + id);
        doc.forEach((button) =>{
            button.classList.remove('bg-success');
        })
    }
    handleChangesSingleTabs({element, keys, event}){
        this.updatedClasseTabs(event.target.id);
        event.target.classList.add('bg-success')
        this.setState((values) =>{
            return {...values,
                 items_element: element,
                 keys: keys
            }
        })
    }
    handleGlobalClickToTimeLine(event){
        this.updatedClasseTabs(event.target.id);
        event.target.classList.add('bg-success');
        this.setState((values) =>{
            return {...values,
                 items_element: ActivedFromStar.element,
                 keys: ActivedFromStar.id
            }
        })
    }
    componentWillUnmount(){
        // Remove Dom
    }
    render(){
        return (
           <div>
                <div className="d-flex text-white" style={{ gap: '12px' }}>
                   {
                    TabsApis.map(({ title, id, element }, idx) => (
                        <button
                            key={idx}
                            id="id-tabs"
                            onClick={async (event) => 
                            this.handleChangesSingleTabs({ element: element, event: event, keys: id })}
                            className={"btn btn-info w-50 border-tabs-button text-white fw-bold"}>{ title }
                        </button>
                    ))
                   }
                </div>
                <ComunicationElement.Provider value={{ redirect: this.handleGlobalClickToTimeLine  }}>
                    <Card className="border border-top-0 bdr-card-style">
                        <Card.Body>
                            <AnimatePresence exitBeforeEnter>
                                <motion.div
                                    variants={ AnimatedSlideTabs }
                                    key={ this.state.items_element ? this.state.keys : 'empty'}
                                    initial={'isHidde'}
                                    animate={'isShow'}
                                    exit={'exit'}>
                                    { this.state.items_element }
                                    {/* <Default>
                                        <Default.Heders className="text-black-50">
                                            NOT FOUND...
                                        </Default.Heders>
                                        <Default.Bodys>
                                            <Default.Img path={imgs} width={'170px'} height={'170px'}/>
                                            <Default.Labels>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis ex distinctio quisquam quis at fugit exercitationem laboriosam amet atque.
                                            </Default.Labels>
                                        </Default.Bodys>
                                    </Default> */}
                                </motion.div>
                            </AnimatePresence>
                        </Card.Body>
                    </Card> 
                </ComunicationElement.Provider>
           </div>
        )
    }
}