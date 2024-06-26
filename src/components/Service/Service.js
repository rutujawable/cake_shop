import React from 'react'
import "./Service.css"
import siteDetails from './../../config'

// import Source from "./organically_sourced.webp"
// import friendly from "./eco-friendly.webp"
// import trust from "./mother.webp"
// import Shipping from "./shipping.svg"
// import payment from "./Payment.webp"
// import natural from "./Natural.svg"

function Service() {
  return (
    <div>
{/* 
       <div className='Service-header'>
         <h1>Services</h1>
       </div> */}

       <div  className='Srvice-Container' style={{backgroundColor:siteDetails.theme.cards}}>
        <div className='img1'>
           <img src={siteDetails.service1.img} className="srvice-img"/>  
           <p className='service-text text1'> Originally Sourced</p>     
        </div> 

        <div  className='img2'>
          <img src={siteDetails.service2.img} className="srvice-img"/>
          <p className='service-text text2'> Eco Friendly</p> 
        </div>

        <div  className='img3'>

          <img src={siteDetails.service3.img} className="srvice-img"/>
           <p className='service-text text3'>Trust of Mothers</p>    
        </div>

        <div  className='img4'>
          <img src={siteDetails.service4.img} className="srvice-img"/>
          <p className='service-text text4'>Easy Shipping</p> 
        </div>  

        <div  className='img5'>  
          <img src={siteDetails.service5.img} className="srvice-img"/>
          <p className='service-text text5'> Secure Payment</p>    
        </div> 

        <div  className='img6'> 
          <img src={siteDetails.service6.img} className="srvice-img"/>   
          <p className='service-text text6'> Natural Products</p>   
        </div>          
        </div>
    </div>
  )
}

export default Service