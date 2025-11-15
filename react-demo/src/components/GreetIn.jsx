import React from 'react'

const GreetIn =(props)  => {
  
  return  props.timeOfDay === 'morning' ? (<h1>Good Moring !</h1>) : (<h1>Good AfterNoon</h1>)
}

export default GreetIn;