const  Greet = () => {


    const date = new Date();


    return(
    <div>
     <h1>Greet Hello</h1>

     <p>Date: {date.getDate()} </p>
     </div>
     
     
    )
    
}


export default Greet;