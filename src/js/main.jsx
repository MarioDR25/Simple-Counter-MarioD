import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/index.css'
import "bootstrap"
import Home from './components/Home';
import  {counterGeneral, stopReloj, reiniciaReloj, establecerYArrancar}  from "../js/counter";

const root = ReactDOM.createRoot(document.getElementById('root'));

const miRender = (s = "00", m = "00", h = "00") => {
    root.render(
        <React.StrictMode>
            <Home seg={s} min={m} hor={h} 
            start={() => counterGeneral(miRender)} 
            restart={()=>reiniciaReloj(miRender)}
            pause={stopReloj} 
            onSetTime={(tiempo)=>{establecerYArrancar(tiempo, miRender)}}
            />
        </React.StrictMode>
    );
};


miRender();