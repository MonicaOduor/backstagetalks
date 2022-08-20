import { useState } from 'react';
import './App.css';
import img6 from './images/1.png'
import img5 from './images/2.png'
import img4 from './images/3.png'
import img3 from './images/4.png'
import img2 from './images/5.png'
import img1 from './images/6.png'

function App() {
  const [bgColor, setBgColor] = useState("#fff")
  return (

    <div className='container-fluid' style={{background: bgColor}}>
      <h1><strong>BACKSTAGE TALKS ♡</strong></h1>

      <div className='text-center books' id='issue6'>
        <img src={img6} alt ='issue6' className='center-block bookImg img-responsive' height='450rem'/>
        <p className='issueTitle'>Issue #6</p>
        <a href='#r' className='bookLink'>BUY HERE</a>
        <p>or in <a href='#!' className='bookLink'>selected stores</a>.</p>
      </div>

      <div className='text-center books' id='issue5'>
        <img src={img5} alt ='issue5' className='center-block bookImg img-responsive' height='450rem'/>
        <p className='issueTitle'>Issue #5</p>
        <a href='#r' className='bookLink'>BUY HERE</a>
        <p>or in <a href='#!' className='bookLink'>selected stores</a>.</p>
      </div>

      <div className='text-center books' id='issue4'>
        <img src={img4} alt ='issue6' className='center-block bookImg img-responsive' height='450rem'/>
        <p className='issueTitle'>Issue #4</p>
        <a href='#r' className='bookLink'>BUY HERE</a>
        <p>or in <a href='#!' className='bookLink'>selected stores</a>.</p>
      </div>

      <div className='text-center books' id='issue3'>
        <img src={img3} alt ='issue3' className='center-block bookImg img-responsive' height='450rem'/>
        <p className='issueTitle'>Issue #3</p>
        <a href='#r' className='bookLink'>BUY HERE</a>
        <p>or in <a href='#!' className='bookLink'>selected stores</a>.</p>
      </div>

      <div className='text-center books' id='issue2'>
        <img src={img2} alt ='issue2' className='center-block bookImg img-responsive' height='450rem'/>
        <p className='issueTitle'>Issue #2</p>
        <a href='#r' className='bookLink'>BUY HERE</a>
        <p>or in <a href='#!' className='bookLink'>selected stores</a>.</p>
      </div>

      <div className='text-center books' id='issue1'>
        <img src={img1} alt ='issue1' className='center-block bookImg img-responsive' height='450rem'/>
        <p className='issueTitle'>Issue #1 is sold out.</p>
        <p >If you are lucky, you may get<br/> the last pieces in <a href='#!' className='bookLink'> selected stores</a>.</p>
      </div>

		<a href="mailto:info@backstagetalks.com" id="email">info@backstagetalks.com</a>

      <div id='issues'>
        <a href='#issue6' className='issue6' onClick={()=> setBgColor("#fff")}>Issue #6</a>
        <a href='#issue5' className='issue5' onClick={()=> setBgColor("#00c1b5")}>Issue #5</a>
        <a href='#issue4' className='issue4' onClick={()=> setBgColor("#ff651a")}>Issue #4</a>
        <a href='#issue3' className='issue3' onClick={()=> setBgColor("#ffbe00")}>Issue #3</a>
        <a href='#issue2' className='issue2' onClick={()=> setBgColor("#1d3fbb")}>Issue #2</a>
        <a href='#issue1' className='issue1' onClick={()=> setBgColor("#e30512")}>Issue #1</a>
      </div>

    </div>

  );
}

export default App;
