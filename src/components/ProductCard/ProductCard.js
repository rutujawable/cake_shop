
import siteDetails from "../../config";
import Products from "../../views/Products/Products";
import './ProductCard.css'
const imagestyle={
    height:"250px",
    width:"270px"
    

}

//   function MovieCard({ img,name,rating}){
//     const ratinginfo = rating>=4 ? "superhit💖" : "👍";
    
//     // const ratingword = rating>=4 ? "superhit💖" : "👍";
//       return(
//         <>
//         <div className="moviecard">
//         <img src={img} style={imagestyle}></img>
//         <h1 className="title">{name}</h1>
//         <button className="btn"> buy now</button><br></br>
//         <div className="rating">
//         <b >ratings:{rating}</b>
//         <span className="color">  { ratinginfo }</span>
//         </div>
// </div>
//  </>
//  )}

  export function MovieCard ({ img,title,rating}){
    const ratinginfo = rating>=4 ? "famous😍" : "😻";
    
    return(
        <>
        <div className="moviecard" style={{backgroundColor: siteDetails.theme.cards}}>
        <img src={img} style={imagestyle}></img>
        <h1 className="title">{title}</h1>
        <button className="btn"> order now</button><br></br>
        <div className="rating">
        <b >ratings:{rating}</b>
        <span className="color">  { ratinginfo }</span>
        </div>
        </div>
        
        
        </>

    )
    
}
