import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonLoader = ({ loading = false, disabled = false, children, ...rest }) => {
  const buttonDisabled = disabled || loading

  return (
    <Button disabled={buttonDisabled} {...rest}>
      {children}
      {loading ? (
        <span className="text-center pl-1">
          <FontAwesomeIcon icon="spinner" spin />{' '}
        </span>
      ) : null}
    </Button>
  )
}

export default ButtonLoader
