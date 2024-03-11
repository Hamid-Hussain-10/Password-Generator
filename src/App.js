
import { useState } from 'react';
import './App.css';
import { LC,NO,SM,UP } from './data/PassChar';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {

  let[uppercase,setUppercase]=useState(false)
  let[lowercase,setLowercase]=useState(false)
  let[number,setNumber]=useState(false)
  let[symbol,setSymbol]=useState(false)
  let[passwordlenght,setPasswordlenght]=useState(10)
  let[fpass,setfpass]=useState('')

  let createPassword = ()=>{
    let charSet = ''
    let finalPass = ''
      if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet+=UP
      if (lowercase) charSet+=LC 
      if (number) charSet+= NO
      if (symbol) charSet+=SM    
      
      for (let i = 0; i < passwordlenght; i++) {
          finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length) )
          setfpass(finalPass)
      }
    }
      else{
        NotificationManager.success('Please choose your password pattern', 'Alert!!');
      }
    }

    let copyPass=()=>{
      navigator.clipboard.writeText(fpass)
      NotificationManager.success('Password Copied To Clipboard.....', 'wow');
    }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generatror</h2>

        <div className="passwordIn">
        <input type="text" value={fpass}/>
        <button onClick={copyPass}>copy</button>
      </div>

      <div className="passLenght">
        <label>Password Lenght</label>
        <input type="number" min={10} max={20} onClick={(event)=>setPasswordlenght(event.target.value)}/>
      </div>

      <div className="passLenght">
        <label>Include Uppercase</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>

      <div className="passLenght">
        <label>Include Lowercase</label>
        <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
      </div>

      <div className="passLenght">
        <label>Include Numbers</label>
        <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
      </div>

      <div className="passLenght">
        <label>Include Symbols</label>
        <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
      </div>
      
      <button className="btn" onClick={createPassword}>
        Generate Password
      </button>
      <NotificationContainer/>
      </div>
      
    </>
  );
}
export default App;
