
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './App/Routes/Root';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import 'quill/dist/quill.snow.css';
import './css/form.css';
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Root/>);