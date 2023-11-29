import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import card1img from './Assets/card1img.jpg'
import Header from '../Day 84 DIY/Header';


const Details = () => {

  const [overviewDiv,setOverviewDiv]=useState(true);
  const [contactDiv,setContactDiv]=useState(false);

  const showDiv=(val)=>{
    if(val==="overview"){
      setOverviewDiv(true);
      setContactDiv(false);
    }
    if(val==="contact"){
      setOverviewDiv(false);
      setContactDiv(true);
    }
    else{
      setContactDiv(false)
    }
  }
    const location=useLocation();
    const restaurant=location.state?.data || 'No data received'
  return (
    <div>
    <Header/>
    
    <div style={{padding:"25px"}}>
      <img src={card1img} style={{height:"70vh",width:"96.5vw",borderRadius:"0"}}/>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"auto auto",justifyContent:"space-between",width:"95vw",marginLeft:"auto", marginRight:"auto", marginTop:"-2vh"}}>
      <h2>{restaurant.name}</h2>
      <button style={{background:"red",color:"white",fontSize:"medium",border:"none",borderRadius:"5px"}}>Place Online Order</button>
    </div>
    <div style={{width:"95vw",marginLeft:"auto", marginRight:"auto"}}>
      <button style={{border:'none',borderBottom:overviewDiv ? "2px solid red":"2px solid #80808000",color:"blue",background:"transparent",outline:"none",cursor:"pointer",fontWeight:"bolder",fontSize:"large"}} onClick={()=>showDiv("overview")}>Overview</button>
      <button style={{border:'none',borderBottom:overviewDiv ? "2px solid #80808000":"2px solid red",color:"blue",background:"transparent",outline:"none",cursor:"pointer",fontWeight:"bolder",fontSize:"large"}} onClick={()=>showDiv("contact")}>Contact</button>
      <hr style={{marginTop:"-1px",color:"gray",width:"95vw"}}/>
    </div>
   {overviewDiv &&  <div style={{width:"95vw",marginLeft:"auto", marginRight:"auto"}}>
        <div style={{fontSize:"large",fontWeight:"bold",color:"blue"}}> About this place </div>
        <div style={{fontSize:"medium",fontWeight:"bold",color:"blue",marginTop:"2vh"}}>Cuisine</div>
        <div style={{fontSize:"small",fontWeight:"bold",color:"grey"}}>Bakery, Fast-food</div>
        <div style={{fontSize:"medium",fontWeight:"bold",color:"blue",marginTop:"2vh"}}>Average Cost</div>
        <div style={{fontSize:"small",fontWeight:"bold",color:"grey"}}>&#8377;{restaurant.min_price} for two people approx</div>

    </div>}

   {contactDiv && <div style={{width:"95vw",marginLeft:"auto", marginRight:"auto"}}>
        <div style={{fontSize:"medium",fontWeight:"bold",color:"blue",marginTop:"2vh"}}> Phone Number </div>
        <div style={{fontSize:"small",fontWeight:"bold",color:"grey"}}>{restaurant.contact_number}</div>
        <div style={{fontSize:"medium",fontWeight:"bold",color:"blue",marginTop:"2vh"}}>{restaurant.name}</div>
        <div style={{fontSize:"small",fontWeight:"bold",color:"grey"}}>{restaurant.locality}, {restaurant.city}</div>

    </div>}


    </div>


  )
}

export default Details