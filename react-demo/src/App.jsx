// import React  from "react";
// const App = () => {
//   return <h1>Hello</h1>
// }

import { Add } from "./components/Add";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Main from "./components/Main";
import UserList from "./components/UserList";

import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greet from "./components/Greeting";
import GreetIn from "./components/GreetIn";
import { useState } from "react";



// export default App;


const ValidPassword = () => <h1>Valid password </h1> 
const InValidPassword = () => <h1>InValid password </h1> 


const Password = ({ isValid }) => 
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InValidPassword />;

  isValid? <ValidPassword/> : <InValidPassword/>;






//uses of usestates //

const App =  () =>{

  const [count , setCount] = useState(0);


  const increment = () =>setCount(count+ 1)
  const Decrement = () =>setCount(count - 1)

  // if we want to change a  state value we must be use the set----.....method..




  return <section>

    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={Decrement}>-</button>

  </section>;
}


















 // Example variable
  

//  const App = () => {
  // let temp;
 
  // return (
  //   <div>
      {/* <Header />
      <Main />
      <Add />
      <Greet />
      <UserList /> */}
      // <Weather temp={temp} />
      {/* <UserStatus loggedIn = {true} isAdmin={false}/>
      <GreetIn timeOfDay="morning"/> */}
      {/* <Password isValid={true} />
      <Footer /> */}
  //   </div>
  // );
// };




// return <User name = "Debanjan"/>  
  //  return <section>

  //     {/* <h1>Name: {props.name}</h1> */}
  //     <Password isValid={true} />

  //   </section>

// };

// const User = (props) =>{
  // const User = () =>{


    // return <section>

    //   {/* <h1>Name: {props.name}</h1> */}
    //   <Passwordassword isValid = {true} />

    // </section>
// }


export default App;