// import React, { Component } from "react";
// import Navbar from "./navbar.js";
// import { Route,Switch } from "react-router-dom";
// import About from "./About.js";






// // let edate;

// // let sdate;
// // let fname;

// class App extends Component {
//  render() {
//   return (
  
//   <div style={{display:"flex"}}>


//   <div  style={{top : "0", left : "0", height: "1080px", width: "71px", display : "flex", flexDirection: "column", background:" #1E5F74" }}>
//    {/* <NavigationBar /> */}

//    <Navbar/>
//    <Switch>

//     <Route exact path="/"/>
//     <Route exact path="/about" component={About}/>

//     </Switch>

  
    
//   </div>
//   <div className="landp"  style={{ display : "flex", flexDirection: "column", marginLeft: "2vh", }}>
//   <div className="meeting" style={{ display : "flex" , height:"150px", Top:"77px" }}> <h1>My Meetings</h1></div>

//   <div className="search" style={{ display : "flex" , height:"155px", width:"1434px", Top:"238px",Left:"355px", background: "#E5E5E5"}}> 

//   <div  style={{  marginLeft: "50px", }}>
//   <form>
       
//         Search: 
//         <input
//           type="text"
//         />
//       </form>
//  </div>


//   <div style={{  marginLeft: "100px", }}>  
//     <form>      
//        From: 
//        <input
//          type="date"
//        />
//      </form>
//      </div>

//   <div  style={{ marginLeft: "130px", }}>  
//     <form>
       
//        To: 
//        <input
//          type="date"
//        />
//      </form>
//      </div>

//   </div>

//   <div className="table" style={{ display : "flex" , height:"455px",width:"455px", marginTop:"79px", marginLeft:"358px" }}>
  
//   <table border="1">
//   <thead>
//     <tr>
//       <th>S.I</th>
//       <th>Meeting Name</th>
//       <th>No. of people attending</th>
//       <th>Date</th>
//       <th>Start time</th>
//       <th>End time</th>
//       <th>Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr>
//     <td>2</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr>
//     <td>3</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr>
//     <td>4</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr>
//     <td>5</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//   </tbody>
// </table>
  
  
  
  
//   </div>
  
//   </div>
//   </div>

//     );
//  }
// }


// export default App;



// import logo from './logo.svg';
import React from "react";
// import './App.css';
import Land from '../src/Land';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About.js";
import axios from 'axios';

const App = () => {
  return (
  
      <Router>
      <Route exact path="/" component={Land} />
      <Route exact path="/about" component={About} />
      </Router>


 );



};

export default App;











