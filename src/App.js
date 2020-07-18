import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Artista from './components/Artista';
import axios from 'axios';

function App() {
  //state
  const [search, setSearch] = useState({});
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState('');
  //useEffect
  useEffect(() => {
    if(Object.keys(search).length === 0) return;
    const {artista, cancion} = search;
    const consultarAPIletra = async () => {
      const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      guardarLetra(letra.lyrics);
      guardarInfo(informacion.data.artists[0]);
    }
    consultarAPIletra()
  }, [search, info])
  return (
    <Fragment>
      <Formulario
        setSearch={setSearch}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artista info={info} />
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
