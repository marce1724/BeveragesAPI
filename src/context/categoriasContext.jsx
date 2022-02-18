import axios from "axios";
import { createContext, useState, useEffect } from "react";

//create context
export const CategoriasContext = createContext()

//create provider - functions and state
const CategoriasProvider = (props) => {
     
     //Create state del context
     const [categorias, setCategorias] = useState([])

     //Call API
     useEffect (()=>{
         const  obtenerCategorias = async () =>{
             const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
             const categorias = await axios.get(url)
             setCategorias(categorias.data.drinks)
         }
         obtenerCategorias()

     }, [])


     return(
         <CategoriasContext.Provider
             value={{
                 categorias
             }}
         >
             {props.children}
         </CategoriasContext.Provider>
     )

}
export default CategoriasProvider