import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-lg-5'>
            <div className="row">
                <div className="col-4">
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='text-decoration-none' href="">See <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2">

                </div>
                <div className="col-6 mb-lg-5">
                    <div className="row text-center ">
                        <div className='col-6 p-2 border'>
                            <h1>₹0</h1> 
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className='col-6 p-2 border'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                        </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;