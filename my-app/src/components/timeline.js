import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Timeline = () => (

    // <div id='timeline-embed' style="width: 100%; height: 600px"></div>
    // const timeline = new TL.Timeline('timeline-embed',
    // 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTluN4nwyHQYDEVqaDLxMEnHnhY1J32Q6K9-znMTpPQsYvInomQnWFd70I7kSmEiQ77wGC4E0irafp1/pubhtml');
    <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1s6DFG3OS9MktSeUpIrETb_htxO-s3BcnQ8tfT8w9CYM&font=Default&lang=en&initial_zoom=2&height=500' title="timeline-iframe" width='100%' height='500' frameBorder='0'></iframe>

)


export default Timeline;
