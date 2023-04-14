import React from 'react';
import imgs from '../../../img/shoping.svg';
import * as Suppport from '../../../Support/supportString';
import { motion } from 'framer-motion';

const VoiceApisTest =[
    {
        id: 1,
        type: 'Info',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt est illo ad doloremque commodi deserunt nisi delectus provident at.",
        bg: 'bg-info'
    },
    {
        id: 2,
        type: 'Perhatian',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, accusamus?",
        bg: 'bg-success'
    },
    {
        id: 3,
        type: 'Konsultasi',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo harum incidunt culpa est adipisci facilis necessitatibus quam obcaecati veritatis.",
        bg: 'bg-warning'
    },
];

const AnminationSlide = {
    isShow:{
        opacity:1,
        scale: 1,
        x:0,
    },
    isHidde:{
        opacity:0, 
        x: 60,
        scale: 0.5,
    }
}

export default class Voices extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            find_voices: null
        }
    }
    componentWillUnmount(){};

    static getDerivedStateFromProps(props, state){
        const find = VoiceApisTest.find((values) => {
            return values.id === Suppport.default.getRandomArbitrary(1, 3);
        });
        return { find_voices: find };
    }

    render(){
        const { find_voices } = this.state;
        console.log(Suppport.default.getRandomArbitrary(1, 3))
        if(find_voices === undefined) return null;
        return (
            <>
               <motion.div 
                    key={find_voices?.id} 
                    initial={'isHidde'}
                    variants={AnminationSlide}
                    animate={'isShow'}
                    transition={{ duration: 0.6 }}>
                    <div className={"box-voices " + find_voices?.bg}>
                        <div className="bjk-adk">
                            <img src={imgs} alt="" />
                            <div style={{ alignSelf:'center' }}>
                                <h5>{find_voices?.type} !</h5>
                                <div>{find_voices?.text }</div>
                            </div>
                        </div>
                    </div>
               </motion.div>
            </>
        )
    }
}