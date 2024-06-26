import React from 'react'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import { MovieCard } from '../../components/ProductCard/ProductCard'
import siteDetails from '../../config'
import'./Products.css'



export function Products()
 { return (
    <div style={{backgroundColor:siteDetails.theme.primary}}>

<Header/><br></br>

<div  className='container-d'>
  {

    siteDetails.products.map((productobject,index)=>{

        const {title,img,rating} = productobject

        return(
        
        <MovieCard title={title} img={img} rating={rating} key={index}/>


        )



    }
  )



  }


</div>




<Footer/>


    </div>
  )
}

export default Products