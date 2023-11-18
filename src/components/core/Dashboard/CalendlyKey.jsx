import React, { useState } from 'react'

const CalendlyKey = () => {

  const [calendlyKey, setCalendlyKey] = useState("");

  const handleOnChange = (e) => {
    
  }

  return (
    <div>
      <div>
        <label htmlFor="calendlyKey">
          Enter your calendly key
        </label>
        <input type="text" 
          name=''
          id=''
          placeholder=''
          value={calendlyKey}
          onChange={handleOnChange}
          className=''
        />
      </div>
    </div>
  )
}

export default CalendlyKey