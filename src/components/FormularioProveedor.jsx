import React from 'react'
import { useFrom } from '../hooks/useFrom'

export const FormularioProveedor = () => {

    const initialState = { 
        empresa: "", 
        contacto: "", 
        celular: "", 
        producto: "",
        comentario: ''
    }

    const validates = (proveedor) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,255}$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

        if(!proveedor.empresa.trim()){
            errors.empresa = 'el campo "nombre empresa" es  requerido...'
        }else if(!regexName.test(proveedor.empresa.trim())){
          errors.empresa = 'el campo "solo acepta letras y espacios en blanco"'
        }

        if(!proveedor.contacto.trim()){
            errors.contacto = 'el campo "contacto" es  requerido...'
        }else if(!regexName.test(proveedor.contacto.trim())){
          errors.contacto = 'el campo "solo acepta letras y espacios en blanco"'
        }

        if(!proveedor.celular.trim()){
          errors.celular = 'el campo "celular" es  requerido...'
        }

        if(!proveedor.producto.trim()){
          errors.producto = 'el campo "producto" es  requerido...'
        }else if(!regexName.test(proveedor.producto.trim())){
          errors.producto = 'el campo "solo acepta letras y espacios en blanco"'
        }
        
        if(!proveedor.comentario.trim()){
          errors.comentario = 'el campo "comentario" es  requerido...'
        }else if(!regexComments.test(proveedor.comentario.trim())){
          errors.comentario = 'el campo "comentarios no debe exceder los 255 caracteres"'
        }
        
        return errors;
    }

    const styles = {
        fontWeight: 'bold',
        color: '#aa7fd9'
    }

    const { proveedor,
            errors,
            loading,
            response,
            handleChange,
            handleBlur,
            handleSubmit } = useFrom(initialState, validates)
    
      

  return (
    <form className='container' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="empresa" className="form-label">Empresa</label>
    <input 
      type="text" 
      className="form-control" 
      name="empresa"  
      value={proveedor.empresa}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder='cocacola, el corral, uber'
      required
      
      />
      {errors.empresa && <p style={styles}>{errors.empresa}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="contacto" className="form-label">Contacto</label>
    <input 
      type="text" 
      className="form-control" 
      name="contacto" 
      value={proveedor.contacto}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder='angelica, pedro, sandra'
      required
      />
      {errors.contacto && <p style={styles}>{errors.contacto}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="celular" className="form-label">Celular</label>
    <input 
      type="number" 
      className="form-control" 
      name="celular" 
      value={proveedor.celular}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder='350...'
      required
      />
      {errors.celular && <p style={styles}>{errors.celular}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="producto" className="form-label">Productos</label>
    <input 
      type="text" 
      className="form-control" 
      name="producto" 
      value={proveedor.producto}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder='camisas, jean, botas'
      required
      />
      {errors.producto && <p style={styles}>{errors.producto}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="comentario" className="form-label">Comentarios</label>
    <textarea
      className="form-control" 
      type="text"  
      name="comentario" 
      cols='50'
      rows='5'
      value={proveedor.comentario}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder='habla con sarita ella te ayuda'
      ></textarea>
      {errors.comentario && <p style={styles}>{errors.comentario}</p>}
  </div>
  <button type="submit" value='enviar' className="btn btn-primary">Submit</button>
</form>
  )
}
