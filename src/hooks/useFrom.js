import React, { useState } from 'react'

export const useFrom = (initialState = {}, validateFrom) => {
  //variables de estado que controlan el formulario  
  const [proveedor, setProveedor] = useState(initialState);
  const [errors, setErros] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null); // respuesta del envio del formulario 

  // funciones manejadoras 
  const handleBlur = (e) => {
    handleChange(e);
    setErros(validateFrom(proveedor))
  }
  const handleSubmit = (e) => {}
  const handleChange = (e) => {
      const {name, value } = e.target 
      setProveedor({
        ...proveedor,
        [name]: value
      })
      
  }
  return {
    proveedor,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
