import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import cart from './foodbike-icon-phone-cart.png';
import location from './foodbike-icon-laptop-map-marker.png';
import gift from './foodbike-icon-box-lists.png';
import like from './foodbike-icon-thumb.png';
import pasta from './pasta.jpg';
import deliveryBoy from './delivery-boy.jpg';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className="container">
                <h2>OUR PROCESS</h2>
                <div className="row">
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={cart} alt="" />
                        <h3>Choose Food</h3>
                        <p>Fusce dapibus sit tellus ac cursus</p>
                    </div>
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={location} alt="" />
                        <h3>Order</h3>
                        <p>Commodo, tortor condimentum</p>
                    </div>
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={gift} alt="" />
                        <h3>Find Driver</h3>
                        <p>nibh ut fermentum massa justo sit</p>
                    </div>
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={like} alt="" />
                        <h3>Delivery</h3>
                        <p>Mauris por nibh ut fermentum massa</p>
                    </div>
                </div>
                <div className="article text-center">
                    <h2 className="py-4">Read The Latest News &amp; Articles</h2>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card h-100">
                            <img src={pasta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">How To Write A Restaurant Review To Promote Your Food Business</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                            <button className="btn btn-secondary">Read More</button>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src={deliveryBoy} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">What Is A Secret Menu &amp; How To Implement One In 5 Easy Steps</h5>
                                <p class="card-text">Get ready for some flippin' action! Perform insane stunts while you cruise through the never-ending world of Rider! Grab your motorcycle and start flipping</p>
                            </div>
                            <div class="card-footer">
                                <button className="btn btn-secondary">Read More</button>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Home;