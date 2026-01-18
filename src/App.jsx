import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import {Home} from './components/Home'
import {Gallery} from './components/Gallery'
import {Form} from './components/Form_Contacto'

function App() {

    const imgs=[
        {"id":1,"name":"paisaje playa","ruta":"/img/atardecer-en-la-playa-con-palmas-6908.webp"},
        {"id":2,"name":"paisaje playa","ruta":"/img/atardecer-en-la-playa-con-palmas-6908.webp"},
        {"id":3,"name":"paisaje playa","ruta":"/img/atardecer-en-la-playa-con-palmas-6908.webp"},
    ]
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery imagenes={imgs}/>} />
        <Route path="/form" element={<Form />} />
      </Routes>
     
    </>
  )
}

export default App
