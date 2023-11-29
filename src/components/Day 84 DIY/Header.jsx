import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import Modal from 'react-modal';
import googleimg from './google.png'
import facebookimg from './facebook.png'



const Header = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [loginModal,setLoginModal]=useState(false);
    const location=useLocation();
    const routePath=location.pathname ==='/';

    const showModal=(val)=>{
      if(val==="open"){

        setLoginModal(true);
      }
      if(val==="close"){
        setLoginModal(false);
      }
    }

  return (
    <div style={{display:"grid", gridTemplateColumns:"auto auto",justifyContent:"space-between",height:routePath?'0':"9vh",backgroundColor: routePath?'transparent':'red',padding:"15px"}}>
        <div style={{marginLeft:"2vw"}}>
            <p style={{padding:"12px",borderRadius:"50%",background:"white",color:"red",marginTop:"-1vh",visibility: routePath? 'hidden': 'initial'}}>e!</p>
        </div>
        <div style={{marginRight:"2vw"}}>
            <button style={{border:"none",color:"white",padding:"5px",backgroundColor: routePath?'transparent':'transparent',outline:"none",cursor:"pointer"}}  onClick={()=>showModal("open")}>Login</button>
            <button style={{padding:"5px",color:"white",borderRadius:"5px",border:"1px solid white",backgroundColor: routePath?'transparent':'transparent',cursor:"pointer",outline:"none"}} onClick={()=>showModal("open")}>Create an account</button>

        </div>
        <Modal
        isOpen={loginModal}
        style={customStyles}
      >
        <div>
        <div style={{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between"}}>
          <h2>Login</h2>
          <button onClick={()=>showModal("close")} style={{border:"1px solid red",background:"white",color:"red",borderRadius:"5px",height:"5vh",width:"2.5vw",cursor:"pointer",outline:"none"}}>X</button>
          </div>
          <input type='text' placeholder='Email' style={{width:"25vw",padding:"9px",border:"1px solid silver",borderRadius:"5px",outline:"none",marginTop:"2vh"}}/> <br/>
          <input type='password' placeholder='Password' style={{width:"25vw",padding:"9px",border:"1px solid silver",borderRadius:"5px",outline:"none",marginTop:"2vh",marginBottom:"2vh"}}/>

          <div style={{width:"11vw",marginLeft:"auto",marginRight:"auto"}}>
            <button className='btn btn-primary'>Login</button>
            <button onClick={()=>showModal("close")} style={{background:"white",border:"0",marginLeft:"1vw",cursor:"pointer",outline:"none"}}>Cancel</button>

          </div>
          <div style={{marginTop:"2vh",textAlign:"center"}}>
              <button style={{cursor:"ponter", background:"white",border:"none",borderRadius:"5px",outline:"none",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',cursor:"pointer",width: '25vw'}}> <img src={facebookimg} alt='google img' style={{height:"45px"}}/> CONTINUE WITH FACEBOOK</button><br/>
              <button style={{cursor:"ponter", background:"white",border:"none",borderRadius:"5px",outline:"none",marginTop:"2vh",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',cursor:"pointer",width: '25vw'}}> <img src={googleimg} alt='google img' style={{height:"45px"}}/> CONTINUE WITH GOOGLE</button>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Header