import React from 'react'

const  Weather = () =>  {
  
    let  temp = 55;

    if(temp < 15 ){
      return <h1>Its cold out side .</h1>  
    }else if(temp>= 15 && temp <= 25  ){
        return <h1>Its A nice weather Today!!</h1>
    }else if( temp > 25){
        return <h1>Its Too Hot today ..</h1>
    }
 
    
}

export default Weather