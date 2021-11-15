import React from 'react'

const Navbar = ({setIsLoggedIn}) => {

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("userData");
        setIsLoggedIn(false)
    }
    return (
        <div>
         <nav>   
        <ul>
        <img src={"https://i.im.ge/2021/11/08/oxu9Ya.png"} height={50} width={50} />
            <li class="logo">PC Parts</li>
            <div class="items">
                <li> <a href="/Main">Home</a></li>
                <li> <a href="/Products">Products</a></li>
                <li> <a href="/hotDeals.html">Hot Deals</a></li>
                <li> <a href="/contactUs">Contact Us</a></li>
                <li> <button onClick={handleLogout}>Sign Out</button></li>
            </div>
            <li class="serch">
            

            </li>
        </ul>
        </nav>

        <div class="news">
        <ul>
            <li>Free Shipping on all orders over $100</li>
            <li>Worldwide Delivery and same day dispach</li>
            <li>Recive gifts when you subscribe</li>
        </ul>
        </div>

 </div>
        
    
    )
}

export default Navbar
