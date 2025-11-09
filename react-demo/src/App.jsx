// import React  from "react";
// const App = () => {
//   return <h1>Hello</h1>
// }

import { Add } from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greeting";
import Header from "./components/Header";
import Main from "./components/Main";
import UserList from "./components/UserList";
import Weather from "./components/Weather";


// export default App;


const ValidPassword = () => <h1>Valid password </h1> 
const InValidPassword = () => <h1>InValid password </h1> 


const Password = ({ isValid }) => 
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InValidPassword />;

  isValid? <ValidPassword/> : <InValidPassword/>;





 // Example variable
  

 const App = () => {
  const temp = 25;

  return (
    <div>
      <Header />
      <Main />
      <Add />
      <Greet />
      <UserList />
      <Weather temp={temp} />
      <Password isValid={true} />
      <Footer />
    </div>
  );
};




// return <User name = "Debanjan"/>  
  //  return <section>

  //     {/* <h1>Name: {props.name}</h1> */}
  //     <Password isValid={true} />

  //   </section>

// };

// const User = (props) =>{
  const User = () =>{


    // return <section>

    //   {/* <h1>Name: {props.name}</h1> */}
    //   <Passwordassword isValid = {true} />

    // </section>
}


export default App;