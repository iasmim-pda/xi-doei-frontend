import React from "react";

const ProductCard = ({
   name,
   price,
   sizes,
   imgUrl,
  
})=>{

   

   return (
     <li>
        <div className="card-list"> 
           
               <div className="cards">
                <div className="card-img">
                      <img src={imgUrl} alt="round_neck" />
                      <p className="nome-marca">{name}</p>
                </div>
              
                 <div className="card-size-color">
                       <h3>DESCRIÇAO</h3>
                 </div>		
                 
                 <div className="size_wrap">
                         {sizes}
                 </div>
                                                 
                  <div className="price">
                       <p>{price}</p>
                 </div>
              </div>
        </div>
     </li>
  );
}
export default ProductCard