import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Receta from "../components/Receta";

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null)
    const [recet, setReceta] = useState({})

    useEffect(()=>{
         
         const obtenerReceta = async () =>{
             if(!idReceta) return

             const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
             const resultado = await axios.get(url)
             setReceta(resultado.data.drinks[0])
         }
         obtenerReceta()

    }, [idReceta])


    return (
         <ModalContext.Provider
             value={{
                 recet,
                 setIdReceta,
                 setReceta
             }}
         
         >
              {props.children}
         </ModalContext.Provider>
    )
}

export default ModalProvider