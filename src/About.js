// import React from "react";

// const   About = () => {
//     return(
//       <div  style={{ display : "flex"}}>
//           <div style={{  height:"150px", marginLeft:"355px", width:"1423px", background:"#E5E5E5" }}><h1>About me</h1></div>

//         <div className="me" style={{  height:"655px", marginTop:"255px", marginLeft:"35px", marginRight:"35px", width: "1423px", background:"#FFFFFF" }}> 
       
//         Name: Anjali Singh <br/>
//         Roll: 1829040 <br/>
//         Github profile: dfvsd vndn <br/>
//         Skills: Javascript, HTML, NodeJS, etc. <br/><br/>

//         Projects:<br/><br/>
//         1.My porfolio/personal website: dcbjssdbcjdscbjsd<br/>
//         2.Some project <br/>
//         3.Some other project <br/>
  
//           </div>

//       </div>
//     )
// };

// export default About;

import React from "react";
import Navbar from "./navbar.js";
const   About = () => {
    return(

      <div style={{display:"flex"}}>


      <div  style={{top : "0", left : "0", height: "1080px", width: "71px", display : "flex", flexDirection: "column", background:" #1E5F74" }}>
       {/* <NavigationBar /> */}
    
       <Navbar/>
       {/* <Switch>
    
        <Route exact path="/" compone/>
        <Route exact path="/about" component={About}/>
    
        </Switch> */}
    
      
        
      </div>
      <div  style={{ display : "flex"}}>
          <div style={{  height:"100vh", marginLeft:0, width:1920, background:"#E5E5E5" }}><h1 style={{ padding:20 }}>About me</h1>

        <div className="me" style={{  height:"350px", marginTop:"50px", marginLeft:"150px", marginRight:"150px", width: "1080px", background:"#FFFFFF" }}> 
       
        Name: Anjali Singh <br/>
        Roll: 1829040 <br/>
        Github profile: dfvsd vndn <br/>
        Skills: Javascript, HTML, NodeJS, etc. <br/><br/>

        Projects:<br/><br/>
        1.My porfolio/personal website: dcbjssdbcjdscbjsd<br/>
        2.Some project <br/>
        3.Some other project <br/>
  
          </div>
          </div>
      </div>
    </div>
    )
};

export default About;




