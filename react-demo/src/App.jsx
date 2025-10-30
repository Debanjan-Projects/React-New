// import React  from "react";
// const App = () => {
//   return <h1>Hello</h1>
// }

import { Add } from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greeting";
import Header from "./components/Header";
import Main from "./components/Main";

// export default App;



const App =() =>{
return <div>

  <Greet/>
  <Add/>
  <Header/>
  <Main/>
  <Footer/>
</div>
}


export default App;