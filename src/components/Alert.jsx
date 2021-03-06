import React from 'react'

const Alert = ({message}) => {
  return (
    <div className="alert alert-danger  alert-dismissible fade show" role="alert">
  <strong>Error!</strong> {message}.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert