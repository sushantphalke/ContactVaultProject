import React ,{useContext}from 'react';
import AlertContext from '../../context/alert/alertContext';
import {FaInfoCircle} from 'react-icons/fa'

 const Alerts = () => {
   const alertContext = useContext(AlertContext);


  return (
    alertContext.alerts.length >0 && alertContext.alerts.map(alert=>
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <FaInfoCircle/>{alert.msg}

      </div>
      )
    
  )
}
export default Alerts;
