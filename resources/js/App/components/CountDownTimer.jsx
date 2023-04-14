import React from "react";
import Loading_1 from "../loading/Loading_1";

export default class CountDownTimer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date:null,
            id: null,
            loading: false,
        }
    }
    componentWillUnmount(){}

    static getDerivedStateFromProps(props, state){
        return {date: props?.date, id: props?.id}
    }

    TimeCalculation({type, distance}){
        switch(type){
            case 'D':
                return Math.floor(distance / (1000 * 60 * 60 * 24));
                break;
            case 'H' :
                return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                break;
            case 'I':
                return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                break;
            case 'S':
                return Math.floor((distance % (1000 * 60)) / 1000);
                break;
            default:
                break;
        }
    }
    componentDidMount(){
        const DateTimes  = new Date(this.state.date).getTime();
        const timesCount = setInterval( async () =>{
            const now = new Date().getTime();
            var distance = DateTimes - now;
            var h = this.TimeCalculation({type: 'H', distance: distance});
            var i = this.TimeCalculation({type: 'I', distance: distance});
            var s = this.TimeCalculation({type: 'S', distance: distance});
            const dataDocument = document.querySelector('div#' + this.props.id);
            if(dataDocument !== null){
                document.querySelector('div#' + this.props?.id).innerHTML = `${h} Jam : ${i} Menit : ${s} Detik`;
                if(distance < 0){
                    clearInterval(timesCount);
                    const exp =  document.querySelector('div#' + this.state.id);
                    exp.innerHTML = 'Expired';
                    exp.classList.add('text-danger')
                }
            }else{
                clearInterval(timesCount);
            }
        }, 1000)
    }
    render(){
        return(
            <div className="text-center fs-5 text-shadow" id={this.state.id}></div>
        )
    }
}