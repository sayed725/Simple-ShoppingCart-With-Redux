import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './products/ProductCard';
import AddProduct from './products/AddProduct';

const Home = () => {

    const products = useSelector( (state )=> state.products);

    // console.log(products)





    return (
        <div className='py-8'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <div className='col-span-2'>
                <div className='grid lg:grid-cols-2 gap-4 gap-y-8'>
                  {
                    products.length ? products.map((product, index) => (
                      <ProductCard key={index} product={product}/>
                    ))  : <p>Sorry, No product Found!</p>
                  }
                </div>
            </div>


            <div className='col-span-1'>
            <AddProduct/>
            </div>
        </div>
    </div>
    );
};

export default Home;