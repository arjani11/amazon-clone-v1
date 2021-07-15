import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/MDlkYWJiMzct/MDlkYWJiMzct-ZTdlNzAyNzYt-w1500._CB412127764_.jpg" 
                alt="" 
                />
                <div className="home__row">
                    <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)."
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />

                    <Product 
                    id="1581341"
                    title="iBUYPOWER Gaming PC Computer Desktop Element Mini 9300. 
                    (AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, WiFi ready, Windows 10 Home)"
                    price={634.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71CXtWQZ5iL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor."
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />

                    <Product 
                    id="458758983"
                    title="ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad,
                    Windows 10 Home in S Mode with One Year of Microsoft 365 Personal."
                    price={109.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/810BY5U9baL._AC_UY327_FMwebp_QL65_.jpg"
                    />

                    <Product 
                    id="175782256" 
                    title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (Latest Model, 4th Generation)." 
                    price={799.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/719UcXKzXHL._AC_UY327_FMwebp_QL65_.jpg"
                    
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440."
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />

                    <Product 
                    id="49538484"
                    title="SAMSUNG SM-T290NZKAXAR, Galaxy Tab A 8.0 32 GB Wifi Android 9.0 Pie Tablet Black 2020."
                    price={119.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41UPtXbP4LL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
