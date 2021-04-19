import React, { Component } from "react";
import Navbar from "./navbar.js";
import { Route,Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from "./Add.js";
// import About from "./About.js";


// let edate;

// let sdate;
// let fname;







class Land extends React.Component {



 constructor() {
        super();
        this.state = {
           data: []
        }
     }
      
     componentDidMount(){

        axios.get(`http://localhost:8080/1829040/fetch`)
       .then(response => {
        console.log(response)
            this.setState({ data: response.data });
            //this.forceUpdate();
            }).catch(error=>{
              console.log(error)
            });
      }




 render() {
  return (
  
    
  <div style={{display:"flex" , font:"roboto"}}>


  <div  style={{top : "0", left : "0", height: "1080px", width: "100px", display : "flex", flexDirection: "column", background:" #1E5F74" }}>
   {/* <NavigationBar /> */}

   <Navbar/>
   {/* <Switch>

    <Route exact path="/" compone/>
    <Route exact path="/about" component={About}/>

    </Switch> */}

  
    
  </div>
  <div className="landp"  style={{ display : "flex", flexDirection: "column", marginLeft: "2vh",  background: "#E5E5E5" }}>
  <div className="meeting" style={{ display : "flex" , height:"200px", Top:"77px" ,width: "1434px"}}> <h1>My Meetings</h1></div>

  <div className="search" style={{ display : "flex" , width:"900px", paddingTop:"60px",marginLeft:"200px",marginRight:"200px", background: "#FFFFFF", paddingBottom:"60px"}}> 

  <div  style={{  marginLeft: "50px", }}>
  <form>
       
  <i class="material-icons" style={{ color:"#00000", marginBottom:"-37px !important"   }}>search</i> Search: 
        <input
          type="text"
          style={{ border: "none",
          borderColor: "transparent",
          borderBottom: "2px solid black",
          width:"108px",
      outline:"0"}}
        />
      </form>
 </div>


  <div style={{  marginLeft: "100px", }}>  
    <form>      
       From: 
       <input
         type="date"
         style={{ border: "none",
          borderColor: "transparent",
          borderBottom: "2px solid black",
          width:"108px",
      outline:"0"}}
       />
     </form>
     </div>

  <div  style={{ marginLeft: "130px", }}>  
    <form>
       
       To: 
       <input
         type="date"
         style={{ border: "none",
          borderColor: "transparent",
          borderBottom: "2px solid black",
          width:"108px",
      outline:"0"}}
       />
     </form>
     </div>

  </div>

  <div className="table" style={{ display : "flex" , height:"400px",width:"900px", marginTop:"79px", marginLeft:"200px",marginRight:"200px",background: "#FFFFFF" }}>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
  <table border="0" cellSpacing="15" >
      <thead style={{color:"#1E5F74"}}>
    <tr>
      <th>S.I</th>
      <th>Meeting Name</th>
      <th>No. of people attending</th>
      <th>Date</th>
      <th>Start time</th>
      <th>End time</th>
      <th>Actions</th>
    </tr>
    </thead>

{this.state.data.slice(0,5).map(response => (<tr>

    <td >{response.si}</td>
    <td>{response.meeting_name}</td>
    <td>{response.no_ppl_attending}</td>
    <td>{response.m_date.substring(0,12)}</td>
    <td>{response.s_time.substring(12,23)}</td>
    <td>{response.e_time.substring(12,23)}</td>
    <td><button class="btn" style={{backgroundColor:"transparent", border: "none", outline:"0" }}><i class="material-icons" style={{ height:"18px", color:"#CA2C2C" }}>delete</i></button></td>
    </tr>))}
<tr>
<td> </td>
<td><form>
        <input
         type="text"
         style={{ border: "none",
            borderColor: "transparent",
            borderBottom: "2px solid black",
            width:"108px",
        outline:"0"}}
       />
     </form></td>
<td><form>
       
      
       <input
         type="text"
         style={{ border: "none",
            borderColor: "transparent",
            borderBottom: "2px solid black",
            width:"40px",
        outline:"0",
        }}
       />
     </form></td>
<td><form>
       
      
       <input
         type="datetime-local"
         style={{ border: "none",
         borderColor: "transparent",
         borderBottom: "2px solid black",
         width:"133px",
     outline:"0"}}
       />
     </form></td>
<td><form>
       
      
       <input
         type="time"
         style={{ border: "none",
         borderColor: "transparent",
         borderBottom: "2px solid black",
         width:"72px",
     outline:"0"}}
       />
     </form></td>
     <td><form>
       
      
       <input
         type="time"
         style={{ border: "none",
          borderColor: "transparent",
          borderBottom: "2px solid black",
          width:"72px",
      outline:"0"}}
       />
     </form></td>
     <td>
     {/* <button variant="outlined" color="inherit" style={{backgroundColor: "#1E5F74", color: "#FFFFFF", borderRadius: 10, width:55, height:28
    }} > */}
        <Add/>
     </td>
</tr>



</table>
  
  
  </div>
  
  </div>
  </div>


    );
 }
 
 



}


export default Land;
