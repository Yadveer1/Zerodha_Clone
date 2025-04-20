import React from 'react';
import Footer from '../Footer';
import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Navbar from '../Navbar';
import Universe from './Universe';

function ProductPage(){
    return ( 
        <>
            <Hero/>
            <RightSection/>
            <LeftSection/>
            <Universe/>
        </>
     );
}

export default ProductPage;