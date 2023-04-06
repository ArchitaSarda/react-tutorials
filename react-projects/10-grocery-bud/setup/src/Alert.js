import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 2000)

    return () => clearTimeout(timer);
  },[list, removeAlert])

   return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
