import img from "../../../src/assests/images/slider-img.png"
import classes from "./Slider.module.scss"
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import SeeAll from "../SeeAll/SeeAll";

export default class CustomSlider extends Component {
  render() {
    const settings =  {
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      arrows:false,
      appendDots: dots => (
        <div
          style={{
            position:"relative",
            top:"-70px",
            zIndex:"3", 
          }}
        >
          <ul style={{ margin: "0px" }} className={classes.ul}> {dots} </ul>
        </div>
      ),
    };
    return (
      <div className={classes.slick}>  
        <Slider { ...settings }>
        <div>
             <img src={img} alt="phot"/>
          </div>
          <div>
           <img src={img} alt="phot"/>
          </div>
           <div>
          <img src={img} alt="phot"/>
          </div>
           <div>
           <img src={img} alt="phot"/>
          </div>
          <div>
          <img src={img} alt="phot"/>
          </div>
          <div>
          <img src={img} alt="phot"/>
          </div>
          
        </Slider>
        
        <SeeAll style={{
          position: "absolute",
          top: "40%",
          backgroundColor: "brown"}}/>
      </div>
    );
  }
}