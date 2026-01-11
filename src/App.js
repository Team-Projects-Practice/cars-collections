
// import './App.css';
import Header from"./Components/Header"
import Home from"./Components/Pages/Home"
import Contact from"./Components/Pages/Contact"
import { Routes,Route } from "react-router-dom";
 function App() {
  return (
    <div className="App">
   <Header/>
      <Routes>
      
        <Route path='/home' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes> 
  
  
    </div>
  );
}

export default App;
