import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Stephano'
const apellido = 'Lugo'
const session = true

const alumnos = ['Abraham', 'Aldo', 'JuanPa']

const jsx = (
  <>
    {session === true ? (
      <>
        <h1 className='titulo' style={{color:'red'}}> 
          Hola {name} 
        </h1>
        {apellido && <p>Tu apellido es: {apellido}</p>}

        <>
          <h3>Lista</h3>
          <ul>
            {alumnos.map((nombre, i) => {
              return <li key = {i}>{nombre}</li>
            })}
          </ul>
        </>
      </>
    ) : (
      <h2>Primero inicia sesion</h2>
    )}
  </>
);

root.render(
  <React.StrictMode>
    {jsx}

  </React.StrictMode>
);