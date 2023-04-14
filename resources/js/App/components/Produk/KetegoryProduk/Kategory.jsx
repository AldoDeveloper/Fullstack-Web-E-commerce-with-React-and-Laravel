import useArray from '../../../Help/useArraySlide';
import Sliders from '../../animations/Sliders';

export default function Kategory(props){
    const pagesAll = useArray({data:props.data, setPages: 3});
    return <>
        <h4 className="mb-3">
            Kategory Pilihan..
        </h4>
       <Sliders data={pagesAll} pages={1}/>
    </>
}