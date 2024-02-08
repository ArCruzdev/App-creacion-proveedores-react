import React from 'react'
import { useFrom } from '../hooks/useFrom'

export const FormularioProveedor = () => {

    const initialState = { 
        empresa: "", 
        contacto: "", 
        celular: "", 
        producto: ""
    }

    const { proveedor, handleChange } = useFrom(initialState)
    const { empresa, contacto, celular, producto} = proveedor

    const handleSubmit = (e) => {
        e.preventDefault()
     
      }
      
  return (
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
  )
}
