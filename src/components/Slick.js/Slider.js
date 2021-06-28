
import img from "../../../src/assets/img/slick.png"
import classes from "./Slick.module.css"
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default class CustomSlider extends Component {
  render() {
    const settings =  {
      autoplay: true,
      autoplaySpeed: 100000,
      dots: true,
      arrows:false,
      appendDots: dots => (
        <div
          style={{
            position:"absolute",
            top:"90%",
            zIndex:"3"
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
      </div>
    );
  }
}