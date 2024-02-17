import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState('');
  const [year,setYear]=useState('');
  const [rate,setRate]=useState('');

  const [result,setResult]=useState('');
  // const [result1,setResult1]=useState('');

  console.log(amount,year,rate);


  const calculate=(e)=>{
    const output=[amount*rate*(1+rate)^year]/[(1+rate)^(year-1)]
    console.log(output);
    setResult(output);
    
}
const reset=(e)=>{
   setAmount(0);
   setYear(0);
   setRate(0);
   setResult(0);
  
}
  return (
    <div className="App">
      <h1>Loan EMI Calculator</h1>

<div className='row' style={{backgroundColor:'antiquewhite'}}>

  <div className='col-6 ls1'>
    <div className='input'>
          <TextField id="filled-basic"  value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="filled" />
          <br/>
          <TextField id="filled-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="filled" />
          <br/>
          <TextField id="filled-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="Rate%" variant="filled" />

    </div> 
    <Button variant="contained" onClick={(e)=>calculate(e)} style={{marginTop:'30px',marginLeft:'50px'}}>Calculate</Button>
    <Button variant="contained" onClick={(e)=>reset(e)} style={{marginTop:'30px',marginLeft:'60px'}}>Reset</Button>
  </div>
<div className='col-6 ls2'>
  <p>
    YOUR EMI IS  <br/>
    &#8377;{result}
  </p>

</div>
</div>  

    </div>
  );
}

export default App;
