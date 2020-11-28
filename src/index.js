import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Navbar'

function Hi(){
  return <div>
    
    <h2 className="c1">Front-End Developer </h2>
    <h2 className="c1">Back-End Developer  </h2>
    <h2 className="c2">Full Stack Developer</h2>
    <h2 className="c2">Mern Stack Developer</h2>
    <h2 className="c2">JAM Stack Developer </h2>
    <h2 className="c1">Mean Stack Developer</h2>
    <h2 className="c1">Mevn Stack Developer</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React</li>
    </ul>
    
    </div>
}

ReactDOM.render(
  <div>
    <Nav/>
  <Hi></Hi>
  </div>
  ,document.querySelector("#root")
);