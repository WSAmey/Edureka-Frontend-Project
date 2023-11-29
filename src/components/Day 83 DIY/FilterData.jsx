import React from 'react'
import './styles/index.css'
import foodimg from './foodimg.jpg'
import Header from '../Day 84 DIY/Header'
const FilterData = () => {
  return (
    <div>


        <Header/>

    <div className="container" style={{marginTop:"2vh"}}>
        <h1>Breakfast Places in Mumbai</h1>


        <div className="cardbox">
           
            <div className="filter">
                <h3 className="filterh3" style={{marginTop:"2vh"}}>Filters</h3>
                
                <div className="searchbar">
                    <p className="loctxt" style={{marginTop:"2vh"}}>Select Location</p>
                    <input list="city" className="city" placeholder="Select Location" style={{marginBottom:"2vh"}}/>
                    <datalist id="city">
                        <option>Pune</option>
                        <option>Ahmedabad</option>
                        <option>Banglore</option>
                        <option>Delhi</option>
                    </datalist>
                </div>
                <div className="cuisine">
                    <p className="ctxt">Cuisine</p>
                    <div className="checkbox">
                        <div className="innercheckbox">
                        <input type="checkbox" className="inputcheck"/>
                         <p className="checktxt">North India</p>
                        </div>
                        <div className="innercheckbox">
                        <input type="checkbox" className="inputcheck"/>
                         <p className="checktxt">South India</p>
                        </div>
                        <div className="innercheckbox">
                         <input type="checkbox" className="inputcheck"/>
                         <p className="checktxt">Chinese India</p>
                        </div>
                        <div className="innercheckbox">
                         <input type="checkbox" className="inputcheck"/>
                         <p className="checktxt">Fast Food</p>
                        </div>
                        <div className="innercheckbox">
                         <input type="checkbox" className="inputcheck"/>
                         <p className="checktxt"> Street Food</p>    
                        </div>
                    </div>
                </div>
                <div className="cost">
                    <p className="costtxt">Cost for two</p>
                    <div className="radio">
                        <div className="inputradio">
                        <input type="radio" className="costradio" name="costradio"/> 
                        <p className="costp">Less than &#8377;500</p>
                        </div>
                        <div className="inputradio">
                        <input type="radio" className="costradio" name="costradio"/>
                         <p className="costp">&#8377;500 to &#8377;1000</p>
                        </div>
                        <div className="inputradio">
                         <input type="radio" className="costradio" name="costradio"/> 
                        <p className="costp">&#8377;1000 to &#8377;1500</p> 
                        </div>
                        <div className="inputradio">
                        <input type="radio" className="costradio" name="costradio"/> 
                        <p className="costp">&#8377;1500 to &#8377;2000</p>
                        </div>
                        <div className="inputradio">
                        <input type="radio" className="costradio" name="costradio"/>
                         <p className="costp">&#8377;2000+</p>
                        </div>
                    </div>
                </div>
                <div className="sort">
                    <p className="sorttxt">Sort</p>
                    <div className="radio2">
                        <div className="inputradio">
                            <input type="radio" className="costradio" name="costradio2"/> 
                            <p className="costp">Less than &#8377;500</p>
                            </div>
                            <div className="inputradio">
                            <input type="radio" className="costradio" name="costradio2"/>
                             <p className="costp">&#8377;500 to &#8377;1000</p>
                            </div>
                    </div>

                </div>
            </div>
            <div className="cards">
                <div className="upperdropdown">
                    <select className="uppersort" style={{padding:"10",height:"5vh"}}>
                        <option>Filters / Sort</option>
                      

                    </select>
                </div>
                <div className="card1">
                    <div className="upperdiv">
                                <img src={foodimg} style={{height:"16vh"}} alt="Image not available"/>
                            <div className="desc">
                                <p className="para1">The Big Chill Cakery</p>
                                <p className="para2">Fort</p>
                                <p className="para3">shop1,Plot D,Samruddhi Complex, Chincholi</p>
                            </div>
                    </div>
                    <hr/>
                    <div className="bottomdiv">
                        <div className="costlabel">
                            <p className="labelp1">
                                CUISINES:
                            </p>
                            <p className="labelp2">
                                COST FOR TWO:
                            </p>
                        </div>
                        <div className="costvalue">
                            <p className="labelp1">
                                Bakery
                            </p>
                            <p className="labelp2">
                                &#8377;700
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <div className="upperdiv">
                        <img src={foodimg} alt="Image not available" style={{height:"16vh"}}/>
                    <div className="desc">
                        <p className="para1">The Bake Shop</p>
                        <p className="para2">Fort</p>
                        <p className="para3">shop1,Plot D,Samruddhi Complex, Chincholi</p>
                    </div>
            </div>
            <hr/>
            <div className="bottomdiv">
                <div className="costlabel">
                    <p className="labelp1">
                        CUISINES:
                    </p>
                    <p className="labelp2">
                        COST FOR TWO:
                    </p>
                </div>
                <div className="costvalue">
                    <p className="labelvp1">
                        Bakery
                    </p>
                    <p className="labelvp2">
                        &#8377;700
                    </p>
                </div>
            </div>
                </div>    
            <div className="navbtns">
                <button className="navbtn">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button className="navbtn" id="btn1">1</button>
                <button className="navbtn">2</button>
                <button className="navbtn">3</button>
                <button className="navbtn">4</button>
                <button className="navbtn">5</button>
                <button className="navbtn">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FilterData