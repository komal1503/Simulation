import React, { Component } from 'react';
import fire from './config/fire';
import { useNavigate} from 'react-router-dom';
import './home.css'
import image from './components/machine.jpg'
import adjuster from './components/adjuster.jpeg'

const Home = () => {

    const navigate = useNavigate(); 

    const logout = () => {
        fire.auth().signOut(); 
    }

   const handleNavigation = () => {
    
        navigate('/types'); 
    }

    const Adj_Calculations = () => {
    
        navigate('/Adj_Calculations'); 
    }

    const Mc_Calculations = () => {
    
        navigate('/Mc_Calculations'); 
    }

    return(
        <div>
            <div className='heads'>
                <div className="heading"><h1>Welcome, Now you have to input the data to calculate utilization</h1></div>
                <div className="heading_btn"><button onClick={logout}>Logout</button></div>
            </div>
             <div className='main'>
            <button  className= 'input' onClick={handleNavigation}>INPUT DATA</button>
            
            <div className='calc'>
            <div className='adj'>
            <img src={adjuster} className="machine"/>
            <button className='adjbtn' onClick={Adj_Calculations}>Adjuster Calculations</button>
            </div>
            <div className='mc'>
            <img src={image} className="machine"/>
            <button className='adjbtn' onClick={Mc_Calculations}>Machine Calculations</button>
            </div>
            </div>
            </div>
            <div className='bottom'>
            </div>
        </div>
    )

}


export default Home; 

// export default class Home extends Component {
//     const navigate = useNavigate(); 
//     constructor(props){
//         super(props);
//         this.state={
            
//         }
//     }

   
//      logout=()=>{
//         fire.auth().signOut();
//     }
    

//     navigateCall() {
        
//           navigate("/login");
//         }
//     render(){
        
//         return(
//             <div>
                
//                 <h1>Welcome</h1>
//                 <button onClick={this.logout}>Logout</button>

//                 <button onClick={this.navigateCall}>Input Data</button>
                
//             </div>
//         )
//     }
// }