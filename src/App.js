import React, {useState} from 'react';

import './index.css';


function App() {

  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')
  
   
  let calcBmi = (e) => {
    e.preventDefault();
    if(weight ===0 || height ===0){
      alert('Please enter a valid weight and height');
    }else{
      let bmi = (weight /(height* height)*10000)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
  setMessage('Hey Buddy!!! You are Underweight...');
      
      } 
     else if(bmi>=25 && bmi<=30){
        setMessage('Hey Buddy!!! You are Healthyweight...');
            
            } 
            if(bmi>30){
              setMessage('Hey Buddy!!! You are Overweight...');
                  
                  }
                }

  };

  let imgSrc='';
  if(bmi<1){
    imgSrc=null;
  }
  else if(bmi<25){
    imgSrc=require('../src/imgSrc/underWeight.jfif');
  }
  else if(bmi>=25 && bmi<=30){
    imgSrc= require('../src/imgSrc/goodWeight.jfif');
  }
  else if(bmi>30){
    imgSrc=require('../src/imgSrc/heavyWeignt.jfif');
  }

  let reload = () =>{
    window.location.reload();
  }




  return (
    <div className="App">
    <div className="container">
    <h2 className='center'>BMI Calculator</h2>
    <form onSubmit={calcBmi}>
    <div>
    <label>weight(kg) </label>
    <input value={weight} onChange={(e) => setWeight(e.target.value)}></input>
    <label>height(cm) </label>
    <input value={height} onChange = {(e) =>setHeight(e.target.value)}></input>
    </div>
    <div>
    <button id='btn1' type='Submit'>Submit</button>
    <button id='btn2' onClick={reload} type='Submit'>Reset</button>
    </div>
    </form>
    <div className='center'>
    <h3>Your BMI is : {bmi} </h3>
    <p>{message}</p>
    </div> 
    <div className='img_container'>
    <img src={imgSrc} alt=''></img>
    </div>
    </div>
    </div>
  );
}

export default App;
