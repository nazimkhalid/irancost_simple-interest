
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

const [interest, setInterest] =useState(0)
const [principle, setPrinciple] =useState(0)
const [rate, setRate] =useState(0)
const [year, setYear] =useState(0)

const [invalidPrinciple,setInvalidPrinciple]=useState(false)
const [invalidRate,setInvalidRate]=useState(false)
const [invalidYear,setInvalidYear]=useState(false)


const validateInput =(inputTag)=>{
  console.log(inputTag,typeof inputTag);
  const{name,value}=inputTag
  console.log(!! value.match(/^\d+(\.\d+)?$/));
  console.log( !!value.match(/^\d+(\.\d+)?$/));
// invalid principle
  if(name=="principle"){
    setPrinciple(value)
    if(!!value.match(/^\d+(\.\d+)?$/)){
      setInvalidPrinciple(false)
    }else{
      setInvalidPrinciple(true)
    }
// invalid rate
  }else if(name=="Rate"){
  setRate(value)
  if(!!value.match(/^\d+(\.\d+)?$/)){
    setInvalidRate(false)
  }else{
    setInvalidRate(true)
  }
    
  }else{
    if(name=='year'){
      setYear(value)
  if(!!value.match(/^\d+(\.\d+)?$/)){
    setInvalidYear(false)
  }else{
    setInvalidYear(true)
  }
    }
  }


}
const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("Button clickd");
  if(principle && rate && year){
    setInterest(principle*rate*year/100)

  }else{
    alert("*please fill required field!!")
  }
  
}
const handleReset=()=>{
  setInterest(0)
  setInvalidPrinciple(false)
  setInvalidRate(false)
  setInvalidYear(false)
  setRate(0)
  setYear(0)
  setPrinciple(0)
}

  return (
    <>
      <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest calculator</h3>
          <p>calculate your simple interest easily</p>
          <div className='bg-warning rounded p-5 text-center'>
            <h1>₹{interest}</h1>
            <p className='fw-bolder'> Total simple interest</p>
          </div>
          <form className='mt-5'>
            {/* principle */}
            <div className='mb-3'>
            <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹Principle Amount" variant="outlined" />
            </div>
            {/* invalid principle */}
            {invalidPrinciple &&  <div className='text-danger mb-3 fw-bold'>
              *Invalid Principle Amount

             </div> }
           
  


            {/* rate */}
            <div className='mb-3'>
            <TextField value={rate || ""} name='Rate'  onChange={(e)=>validateInput(e.target)}  className='w-100' id="outlined-Rate" label="%Rate" variant="outlined" />
            </div>
            {/* invalid rate */}
            {invalidRate &&  <div className='text-danger mb-3 fw-bold'>
              *Invalid Rate

             </div> }
            {/* duration */}
            <div className='mb-3'>
            <TextField value={year ||""} name='year'  onChange={(e)=>validateInput(e.target)}  className='w-100' id="outlined-year" label="Time period(yr)" variant="outlined" />
            </div>
            {/* invalid year */}
            {invalidYear &&  <div className='text-danger mb-3 fw-bold'>
              *Not valid

             </div> }
            {/* buttons */}
            <div>
            <Stack direction="row" spacing={2}>
            <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple||invalidRate||invalidYear}  variant="contained" style={{width:'50%',height:'60px'}} className='bg-dark' >Calculate</Button>
            <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'60px'}}
            className='border border-dark text-dark'>RESET</Button>
  
            </Stack>
            </div>
           
          </form>
        </div>
      </div>
       
    </>
  )
}

export default App
