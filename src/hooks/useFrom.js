import React, { useState } from 'react'

export const useFrom = (initialState = {}) => {
    
  const [proveedor, setProveedor] = useState(initialState)
  

  const handleChange = ({target}) => {
      const {name, value } = target 
      setProveedor({
        ...proveedor,
        [name]: value
      })
      
  }
  return {
    proveedor,
    handleChange
  }
}
