import React, { useEffect } from 'react'
import Product from '../Component/Product';
import Cart from '../Component/Cart';


const Home = () => {
    useEffect(()=>{
        document.title="Perfume || House";
    });
  return (
    <>
    <main className="container py-4">
        <h1></h1>
        <section className="row">
            <div className="col-lg-9">
                <Product/>
            </div>
            <div className="col-lg-4">
                <Cart/>
            </div>
        </section>
    </main>
    
    </>
  );
};

export default Home;
