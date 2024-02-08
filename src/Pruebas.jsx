import React, { useState } from 'react'

export const Pruebas = () => {
    const listProveedores = [
        {nombre: 'ariel'},
        {producto: 'cruz'},
        {direccion: 'garzon'}
    ]
    const [ nombreEmp, setNombreEmp ] = useState('')
    const [ inputValue, setInpuntValue ] = useState(listProveedores)
    
    
    const handleChange = (e) => {
        setNombreEmp(e.target.value)
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newValue = {
            calificacion : nombreEmp
        }
        setInpuntValue([...inputValue, newValue])
    }
    



  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                value={nombreEmp}
                onChange={handleChange}            
            />
            
        </form>
        <table className="table container">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Empresa</th>
      <th scope="col">Nombre contacto</th>
      <th scope="col">celular</th>
      <th scope="col">Productos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    {inputValue.map(item => <h1>{item.nombre}{item.producto}{item.direccion}{item.calificacion}</h1>)}
  </tbody>
</table>
    </>
  )
}
