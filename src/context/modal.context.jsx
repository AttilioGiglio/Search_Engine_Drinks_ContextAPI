import Axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [idreceta, guardarIdReceta] = useState(null);
    const [receta, guardarReceta] = useState({});

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const resultado = await Axios.get(url);
            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta])

    return (
        <ModalContext.Provider value={{ guardarIdReceta }}>
            {props.children}
        </ModalContext.Provider>
    )

}

export default ModalProvider;