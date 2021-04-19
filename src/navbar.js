import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <div style={{width:"355px", height:"1080px",color:"#FFFFFF"}}>
        <div style={{top:"3.34px",}}>
            <h3><i class="material-icons" style={{ height:"8px", color:"#FFFFFF" }}>menu</i>1829040</h3>
        <Link to="/" style={{color:"#FFFFFF"}}>Home {"\n"}<i class="material-icons" style={{ height:"8px", color:"#FFFFFF" }}>home</i></Link>{"\n"}
        </div>
        <div style={{top:"2px"}}>
        <Link to="/about" style={{color:"#FFFFFF"}}>About{"\n"}<i class="material-icons" style={{ height:"8px", color:"#FFFFFF" }}>face</i></Link>{"\n"}</div>
        </div>
        
        </>
    )
};

export default Navbar;