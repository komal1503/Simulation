import React from 'react'
import { useState } from 'react'
import './Adj_Calculations.css'
import image from './components/login-page.avif'
function Data() {

    const [details, setDetails] = useState({
        Machine_type: '',
        total_hours: ''
       
    })
    const [machhrs, setMachhrs]=useState(0)

    const [avgmachhrs, setAvgmachhrs]=useState(0)
    const handleSubmit =async(e)=>{
        e.preventDefault()

        const{Machine_type,total_hours}=details;

       const res=await fetch("https://simulation-42792-default-rtdb.firebaseio.com/machineform.json")
       const response=await res.json();
       
     const machines=[];
     for(const key in response){
        const obj={
            id: key,
            ...response[key]
        }
        machines.push(obj);
     }
     let avlmachhrs={
        lathe:0,
        turning:0,
        drilling:0,
        soldering:0
     };
     machines.forEach((currValue) => {
        
        
            const num=Number(currValue.Active_hours);
            avlmachhrs[currValue.Machine_type.toLowerCase()]+=num;
            
            
      
     })
     const totalhrs=avlmachhrs.lathe+avlmachhrs.turning+avlmachhrs.drilling+avlmachhrs.soldering;
      setMachhrs(avlmachhrs[Machine_type.toLowerCase()])
      setAvgmachhrs(totalhrs/machines.length);
    }

  return (
    <>
    <h1 className='utzhead'>MACHINE UTILISATION</h1>
    <div className='form'>
    <img src={image} className="mcimg"/>
        <div className='creds'>
        <form  onSubmit={handleSubmit}>
        <input type='text' id='text' placeholder='Machine Type' onChange={(e)=>
            setDetails({...details,Machine_type:e.target.value})} required/>
       <input type='text' id='text' placeholder='Total hours' onChange={(e)=>
            setDetails({...details,total_hours:e.target.value})} required/>
        <button type="submit">Submit</button> 
        </form>
        </div>

      <div className='output'> 
    {machhrs !==0 && <div>
        <p>Machine Utilization: {machhrs/details.total_hours}</p>
    </div>}
    {avgmachhrs !==0 && <div>
        <p>Average Machine Utilization: {avgmachhrs/details.total_hours}</p>
    </div>}
    </div> 
    </div>
    
    </>
  )
}

export default Data