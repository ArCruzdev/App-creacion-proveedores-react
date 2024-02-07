import React, { useState } from 'react'

export const App = () => {

  const initialState = [
    { empresa: "", contacto: "", celular: "", producto: ""} 
  ]

  const [proveedor, setProveedor] = useState(initialState)
  const { empresa, contacto, celular, producto } = proveedor;


  

  const handleChange = ({target}) => {
      const {name, value } = target 
      setProveedor({
        ...proveedor,
        [name]: value
      })
      
  }

  const handleSubmit = (e) => {
    e.preventDefault()
 
  }

  return (
    <>
    <form className='container' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="empresa" className="form-label">Empresa</label>
    <input 
      type="text" 
      className="form-control" 
      name="empresa"  
      value={empresa}
      onChange={handleChange}
      />
  </div>
  <div className="mb-3">
    <label htmlFor="contacto" className="form-label">contacto</label>
    <input 
      type="text" 
      className="form-control" 
      name="contacto" 
      value={contacto}
      onChange={handleChange}
      />
  </div>
  <div className="mb-3">
    <label htmlFor="celular" className="form-label">celular</label>
    <input 
      type="text" 
      className="form-control" 
      name="celular" 
      value={celular}
      onChange={handleChange}
      />
  </div>
  <div className="mb-3">
    <label htmlFor="producto" className="form-label">productos</label>
    <input 
      type="text" 
      className="form-control" 
      name="producto" 
      value={producto}
      onChange={handleChange}
      />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
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
    </tr>
  </tbody>
</table>
</>
  )
}
