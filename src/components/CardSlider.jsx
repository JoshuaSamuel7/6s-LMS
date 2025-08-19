import React from 'react'
import Slider from'react-slick';
import { useEffect,useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CourseCard from './Card';
export default function CardSlider() {
  const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,  
  touchThreshold: 10,     
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
};


  return (
<div style={{ width: '100%', maxWidth: '1200px', margin: 'auto' }}>
    <Slider {...settings}>
        <CourseCard  child={{ id: 0,image:"react.png",title:"React Basics", info:"React is a JavaScript library for building user interfaces using reusable components. It uses a virtual DOM to efficiently update only the parts of the UI that change."}}/>
        <CourseCard child={{id: 1,image:"css.png",title:"CSS Mastery", info:"CSS (Cascading Style Sheets) is used to style HTML elements by controlling colors, fonts, and responsiveness. It separates content to create visually appealing web pages."}}/>
        <CourseCard child={{id:2, image:"js.png",title:"JavaScript Advanced", info:"JavaScript Advanced covers asynchronous programming, closures, prototypes, and ES6+ features to write more efficient code. It also includes concepts like promises, async/await."}}/>
        <CourseCard child={{id:3,image:"node.png",title:"Node.js", info:"Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows you to run JS on the server. It enables building backend applications using event-driven, non-blocking I/O."}}/>
        <CourseCard child={{id:4,image:"ds.png",title:"Data Structures", info:"Data structures are ways to organize and store data for efficient access and modification. Common types include arrays, linked lists, stacks, queues, trees, and graphs."}}/>
    </Slider>
    </div>
  )
}
