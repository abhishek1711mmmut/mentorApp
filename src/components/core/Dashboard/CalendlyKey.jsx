import React, { useState } from 'react'

const CalendlyKey = () => {

  const [calendlyKey, setCalendlyKey] = useState("");

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
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