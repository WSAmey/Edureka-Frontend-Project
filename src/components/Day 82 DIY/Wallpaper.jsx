import React,{useState, useEffect} from 'react'
import './style.css'
import logoimg from './Assets/logoimg.png'
import locationData from '../Day 84 DIY/location.json'
import card1img from './Assets/card1img.jpg'
import restaurant from '../Day 85 DIY/restaurant.json'
import { Link } from 'react-router-dom'


const Wallpaper = () => {
    const [cityData,setCityData]=useState([]);
    const [restaurData,setRestaurData]=useState([]);
    const [filterCity,setFilterCity]=useState([]);
    const [showMeal, setShowMeal]=useState(false);

    const getCity=()=>{
        try {
            setCityData(locationData)
        } catch (error) {
            console.log("error: ",error);
        }
    }

    const getRetaurant=()=>{
        try {
            
            setRestaurData(restaurant);
        } catch (error) {
            console.log("error: ",error);
        }
    }
    console.log(restaurData);

    useEffect(()=>{
        getCity();
        getRetaurant();
    },[])
    console.log(restaurData);

    const citySelect=(e)=>{
        const city=e.target.value;
        console.log("selected city:",city);
        if(city !== ''){
        const result=restaurData.filter(restName=>restName.locality===city);
        setFilterCity(result)
        console.log("filtered city: ",result);
        } 
        if(city ===''){
            getRetaurant();
            setShowMeal(false);
        }
        else{
            getRetaurant();
        }
    }
    console.log(restaurData);

   const inputSearch =(e)=>{

    const searchData = e.target.value;
    
    if (searchData !== '') {
        setShowMeal(true);
        const result=filterCity.filter((val)=>val.name.toLowerCase().includes(searchData.toLowerCase()))
        setRestaurData(result)
        
    } else {
        setShowMeal(false);
        getRetaurant();
    }
    
    // Always fetch restaurant data when searchData is empty
    // getRetaurant();

   }
   

  return (
    <div style={{height:"45vh",marginTop:"0"}}>
      <div class="container-fluid" id="maincontainer">
        
        
        <div class="d-flex justify-content-center" style={{marginTop: '60px'}}>
            <img src={logoimg} class="mt-5" style={{borderRadius: '50%', height: '100px', width: '100px'}}/>
        </div>
        <div class="d-flex justify-content-center">

        
        <p class="text-white" id="h2">Find the best restaurants, cafes and bars</p>
    </div>
   

        <div class="row row-cols-lg-4 row-cols-sm-1  d-flex justify-content-center g-2">
           
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-xl-3 offset-lg-0  offset-xl-0 offset-xxl-0
            offset-md-0 offset-sm-0 offset-xs-0" id="city">
               <select type="text" list="citylist" class="w-100 p-2" style={{border:"0"}} onChange={citySelect}>
                <option value={''}>-- Select City --</option>
                {
                    cityData.map((val)=>(
                        
                        <option key={val.cityid} value={val.name}>{val.name},{val.city}</option>
                    ))

                }
            </select>

            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-xl-3 ">
                <input type="text" class="p-2" placeholder="&#xF002;  Search for restaurants" style={{fontFamily:'Arial, FontAwesome',border:"0",width:"32vw",marginBottom:"1vh"}} list="rest" onChange={inputSearch}/>

                {   
                    showMeal && restaurData.map((item)=>(
                        <Link to='/details' style={{display:"grid",gridTemplateColumns:"auto auto auto",background:"white",padding:"5px",width:"32vw",borderBottom:"1px solid silver",textDecoration:"none"}} state={{data:item}}>
                    <div>
                        <img src={card1img} style={{borderRadius:"50%",width:"5vw"}}/>
                    </div>
                    <div style={{marginTop:"auto",marginBottom:"auto",marginRight:"6vw"}}>
                        <h5 style={{color:"blue"}}>{item.name}</h5>
                        <h6 style={{color:"grey"}}>{item.locality}</h6>
                    </div>
                    <div style={{marginTop:"auto",marginBottom:"auto"}}>
                        <h5 style={{color:"red"}}>Order Now <i class="fa-solid fa-angle-right"></i></h5>
                    </div>
                </Link>
                    ))
                }
            </div>
    </div>

    </div>

    
    </div>
  )
}

export default Wallpaper