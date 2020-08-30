import React from 'react'
import { Link } from 'react-router-dom'
import shoes from './shoes.json'
import './Product.css'


export const ProductIndex = () => {

    return (
     
            <div className="container">
                {Object.keys(shoes).map((shoe) => {
                    const keyname=shoes[shoe];
                    console.log(shoe);
                    return (
                            
                            
                            <Link key={shoe} to={`/products/${shoe}`}>
                                <h3>
                                    {keyname.name}
                                </h3>
                                <img src={keyname.img} alt="Shoe " />
                            </Link>
                        



                    )



                })}
            </div>



            
    
    )
}
