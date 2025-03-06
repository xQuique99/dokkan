import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Link, Route, BrowserRouter, Routes} from 'react-router'
import {CartasLr} from "../components/cartas_lr"
import {Cartas} from "../components/cartas"
import {Sql} from "../Backend/sql"



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/carta' element={<CartasLr />} />
        <Route path='/cartas' element={<Cartas />} />
        <Route path='/' element={<Sql />} />
      </Routes>
    </BrowserRouter>
)


