import React, { StrictMode } from 'react'
//Llamada al React DOM para renderizar los componentes
import {createRoot} from 'react-dom/client'
import {CounterApp} from './CounterApp'
//import { FirstApp } from './FirstApp'
//import { HelloWorldApp } from './HelloWorldApp'

//Importar CSS
import './index.css'

/* function App(){
    return <h1>Elden Ring</h1>
} */

//Renderizar el componente
const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <CounterApp value={0}/>
    </StrictMode>
);