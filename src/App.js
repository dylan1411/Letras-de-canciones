import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';

function App() {
  //state
  const [search, setSearch] = useState({});
  const [letra, guardarLetra] = useState('');
  //useEffect
  useEffect(() => {
    if(Object.keys(search).length === 0) return;
    const {artista, cancion} = search;
    const consultarAPIletra = async () => {
      const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarLetra(resultado.lyrics)
    }
    consultarAPIletra()
  }, [search])
  return (
    <Fragment>
      <Formulario
        setSearch={setSearch}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            1
          </div>
          <div className="col-md-6">
            { letra ? <Cancion letra={letra} /> : null }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
