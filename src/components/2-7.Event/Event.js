import React from 'react'

export default function Event() {

  const handleButtonClick = () => {
    console.log('handleButtonClick');
  }


  return (
    <div>
        <button onClick={handleButtonClick}>Button</button>
    </div>
  )
}
