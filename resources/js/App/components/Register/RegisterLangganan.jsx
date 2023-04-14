import React from "react";
import { Card } from "react-bootstrap";
import Member from "./List/Member";
import CreateToko from "./List/CreateToko";
import Account from "./List/Account";
import Tagihan from "./List/Tagihan";
import { motion } from "framer-motion";

const listTabs = [
    {textBtn : 'Langganan', id: 1, element: <Member/>},
    {textBtn : 'Buat Toko', id: 2, element: <CreateToko/>},
    {textBtn : 'Account', id: 3, element: <Account/>},
    {textBtn : 'Tagihan', id: 4, element: <Tagihan/>},
]

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:listTabs[0].id,
            textBtn: listTabs[0].textBtn,
            element: listTabs[0].element,
            activeIdx: 0,
        }
        this.SlideAnimationElement = this.SlideAnimationElement.bind(this);
        this.handleClickTabs = this.handleClickTabs.bind(this);
    }
    SlideAnimationElement(props){
        return (<>
            <motion.div transition={{ duration:0.5 }} key={props.keys} initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }}>
                {props.children}
            </motion.div>
        </>)
    }
    handleClickTabs(props){
        this.setState((value) => {
            return {...value, id: props.id, textBtn:props.textBtn, element:props.element, activeIdx:props.idx}
        })
    }
    render() {
        const {id, element, activeIdx } = this.state;
        return (
            <>
                <h4 className="mb-3">Register Langganan&Tagihan..</h4>
                <Card>
                    <Card.Header
                        style={{
                            backgroundColor: "transparent",
                            padding: "0%",
                        }}>
                        <div className="tabs">
                            {
                                listTabs.map(({textBtn, id, element}, idx) =>{
                                    return(
                                    <button key={idx}
                                        className={activeIdx === idx ? 'actived-tabs' : ''}
                                        onClick={() => this.handleClickTabs({textBtn, id, element, idx})}>
                                        {textBtn}
                                    </button>)
                                })
                            }
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <this.SlideAnimationElement keys={id}>
                            {element}
                        </this.SlideAnimationElement>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
