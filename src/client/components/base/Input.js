import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = ({ name, icon, type, label, error, rotate, ...rest }) => {
  const className = error ? 'form-control is-invalid' : 'form-control'
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <FontAwesomeIcon icon={icon} transform={{ rotate: rotate || 0 }} />
        </span>
      </div>
      <input {...{ name, type, placeholder: label, className, ...rest }} />
      <div className="invalid-feedback">{error}</div>
    </div>
  )
}

export default Input
