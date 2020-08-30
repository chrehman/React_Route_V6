import React from 'react'
import { useParams } from 'react-router-dom'
import shoes from './shoes.json'
export const ProductDetails = () => {
    const {id}=useParams();
    const shoe=shoes[id];
   
    if(!shoe){
        return <h3>Page Not Found</h3>
    }
    
        
    return (
        <div>
            <h3>Welcome to Product Details</h3>
            <ul>
                <li>
                    <h3>{shoes[id].name}</h3>
                    <img src={shoes[id].img} alt="shoe-pic"/>
                </li>
            </ul>
        </div>
    )
}
