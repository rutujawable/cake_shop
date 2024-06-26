import React from 'react'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import './Home.css'
import Service from './../../components/Service/Service'
import siteDetails from '../../config'

function Home() {
  return (
    <div style={{backgroundColor:siteDetails.theme.primary}}>
      <Header/><br></br>

      <img className='main-image' src='https://veenaazmanov.com/wp-content/uploads/2013/02/Best-Cake-Flavor-Combination-Ideas-for-cake-flavors-fillings-and-frostings1.jpg'></img>
       <div className='images'>
       <img src='https://www.bakingo.com/blog/wp-content/uploads/2022/03/Chocolate-Cake-.jpeg' className='img'></img>
       <img src='https://www.bakingo.com/blog/wp-content/uploads/2022/03/Vanilla-Cake.jpeg' className='img'></img>
       <img src='https://www.bakingo.com/blog/wp-content/uploads/2022/03/Strawberry-Cake.jpeg' className='img'></img>
       <img src='https://www.bakingo.com/blog/wp-content/uploads/2022/03/butterscotch.jpeg' className='img'></img>
       <img src='https://www.bakingo.com/blog/wp-content/uploads/2022/03/Red-velvet.jpeg' className='img'></img>
       <img src='https://www.bakingo.com/blog/wp-content/uploads/2022/03/Fruit-cake.jpeg' className='img'></img>



       </div>
       <Service/>


      <Footer/>
    
    
    </div>
  )
}

export default Home