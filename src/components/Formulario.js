import React, { useState } from 'react';

const Formulario = ({setSearch}) => {
    //state
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, guardarError] = useState(false);
    const {artista, cancion} = busqueda;
    //actualizar State
    const handleInputs = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    };
    //submit
    const realizarBusqueda = e => {
        e.preventDefault();
        //validar
        if (artista.trim() === '' || cancion.trim() === '' ) {
            guardarError(true);
            return
        }
        guardarError(false);
        //pasar al principal
        setSearch(busqueda);
    }
    return (
        <div className="bg-info">
            { error ?
                <p className="alert alert-danger text-center p-2">
                    Introduce todos los datos bb
                </p> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={realizarBusqueda}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras de Canciones Para Godoysito-Kun</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>Artista</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre de Artista"
                                        onChange={handleInputs}
                                        value={artista}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Canción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre de la Canción"
                                        onChange={handleInputs}
                                        value={cancion}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right mt-5"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;