import React from 'react'
//Llamada al React DOM para renderizar los componentes
import {createRoot} from 'react-dom/client'
import { FirstApp } from './FirstApp'
import { HelloWorldApp } from './HelloWorldApp'

function App(){
    return <h1>Elden Ring</h1>
}

//Renderizar el componente
const root = createRoot(document.getElementById('root'))
root.render(<FirstApp/>)