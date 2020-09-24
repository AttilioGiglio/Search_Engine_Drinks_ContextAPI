import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/categorias.context';
import {RecetasContext} from '../context/recetas.context';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    }); 

    // funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({...busqueda, [e.target.name]: e.target.value})
    }

    const registrarReceta = e => {
        e.preventDefault();
        buscarRecetas(busqueda)
        guardarConsultar(true);
    }

    return (
        <form 
        className="col-12"
        onSubmit={registrarReceta}
        >
        <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
        </fieldset>
        <div className="row mt-4">
            <div className="col-md-4">
                <input
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por Ingrediente"
                    onChange={obtenerDatosReceta}
                />
            </div>
            <div className="col-md-4">
                <select 
                    className="form-control"
                    name="categoria"
                    onChange={obtenerDatosReceta}
                >
                    <option>-- Selecciona Categoría --</option>
                    {categorias.map(categoria => (
                        <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                    ))}
                </select>
            </div>

            <div className="col-md-4">
                <input
                    type="submit"
                    className="btn btn-block  btn-outline-danger"
                    value="Buscar Bebidas"
                />
            </div>
        </div>
    </form>
 );
}

export default Formulario
