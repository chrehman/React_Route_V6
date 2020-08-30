import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Products } from './Products';
import { ProductDetails } from './ProductDetails';
import { ProductIndex } from './ProductIndex';


export const Routess = () => {
    return (
        <div>
            <Routes>
               
                <Route path="/" element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route>
                <Route path="products" element={<Products/>}>
                <Route path="/" element={<ProductIndex/>}></Route>
                    <Route path=":id" element={<ProductDetails/>}></Route>
                </Route>
                <Route path='*' element={<h3>Page Not Found 404!</h3>}></Route>

            </Routes>            
        </div>
    )
}
