import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center">
                <img src="assets/images/homeHero.png" alt="Hero Image" className="img-fluid, mb-lg-5 mb-3" />
                <h1 className='mt-lg-5 my-heading'>Invest in everything</h1>
                <p className='my-p'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 mb-3 fs-5 btn btn-primary my-b-hero' style={{width: "30%", margin: "auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;