import React,{useEffect, useState} from 'react'
// import card1img from './Assets/card1img.jpg'
// import card2img from './Assets/card2img.jpg'
// import card3img from './Assets/card3img.jpg'
// import card4img from './Assets/card4img.jpg'
// import card5img from './Assets/card5img.jpg'
// import card6img from './Assets/card6img.jpg'

import mealData from './mealtype.json'


const QuickSearches = () => {
    const [meal,setMeal]=useState([]);
    
    const getMeal=()=>{
        try {
            setMeal(mealData)
        } catch (error) {
            console.log("error: ",error);
        }
    }
    useEffect(()=>{
        getMeal();
    },[])
    console.log(meal);
    return (
    <div style={{background:"white",margin:'0'}}>
        <div class="container w-90 " style={{marginTop:"5vh"}}>
        <p class="h4" style={{color: 'darkblue'}}>Quick Searches</p>
        <p style={{color: 'gray'}}>Discover restaurants by type of meal</p>

        <div style={{display:"grid",gridTemplateColumns:"auto auto auto",columnGap:"2vw",rowGap:"2vh"}}>

            
        {meal && meal.map((val) => (
        <div key={val.id} style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',display:"grid",gridTemplateColumns:"auto auto"}}>
            <div>
                <img src={require(`${val.image}`)} style={{width: "7vw", height: "15vh", borderRadius: "0", padding: "0"}} alt={val.name} />
            </div>
            <div style={{marginLeft:"2px", textAlign: "justify",width:"14vw"}}>
                <p className="h5 mt-3 mb-0" style={{color: 'darkblue'}}>{val.name}</p>
                <p className="lg-w-75 md-w-100 sm-w-100">{val.content}</p>
            </div>
        </div>
    ))}

        
           
            </div>

            
        </div>
    </div>
  )
}

export default QuickSearches