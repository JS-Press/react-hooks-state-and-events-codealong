import React, {useState} from "react";

function Toggle() {

  const[isOn, setButton] = useState('OFF')

  function handleClick(){
    if (isOn === 'ON'){
    setButton('OFF')}
    else {
      setButton('ON')
    }
  }

  return <button onClick = {handleClick} >{isOn}</button>;
}

export default Toggle;
