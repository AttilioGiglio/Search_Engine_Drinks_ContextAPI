import Axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [idreceta, guardarIdReceta] = useState(null);

    useEffect(() => {
    
    }, [])

    return (
        <ModalContext.Provider value={{ guardarIdReceta }}>
            {props.children}
        </ModalContext.Provider>
    )

}

export default ModalProvider;