import React from "react";

import axios from "axios";


export default function Add() {

   const  handleAdd = () => {
    
    const meeting_name_node = document.getElementById("meeting_name");
    const no_ppl_attending_node = document.getElementById("no_ppl_attending");
    const m_date_node = document.getElementById("m_date");
    const s_time_node = document.getElementById("s_time");
    const e_time_node = document.getElementById("e_time");
    

  
    const meeting_name= meeting_name_node.value;
    const no_ppl_attending= no_ppl_attending_node.value;
    const m_date= m_date_node.value;
    const s_time = s_time_node.value;
    const e_time=e_time_node.value;


    const user ={ 
    meeting_name,
    no_ppl_attending,
    m_date,
    s_time,
    e_time,
    }
    console.log(user);

    if(meeting_name===""|| no_ppl_attending==="" || m_date==="" ||s_time==="" || e_time===""){

    }
    else {
      axios.post("http://localhost:8080/1829040/add",null, {params : {data: JSON.stringify(user)}})
    }
    setOpen(false);
  
  };

  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };


return (


<button variant="outlined" color="inherit" onClick={handleAdd} style={{backgroundColor: "#1E5F74", color: "#FFFFFF", borderRadius: 10, width:55, height:28, 
}} >Add </button>

  );
}