import React from 'react';
import './Sideheader.css';


function SideHeader() {

    var toggle = document.getElementById("toggle");
var container = document.getElementById("container");

toggle.onclick = function(){
	container.classList.toggle('active');
}

    return (
        <>

            <div class="container" id="container">
                <div class="brand">
                    <div class="logo">
                        <ion-icon name="logo-snapchat"></ion-icon>
                    </div>
                    <h3>TechLab</h3>
                    <a href="#" id="toggle"><ion-icon name="menu"></ion-icon></a>
                </div>
                <div class="search">
                    <ion-icon name="search-outline"></ion-icon>
                    <input type="search" name="search" id="search" placeholder="Search" />
                </div>
                <div class="navbar">
                    <ul>
                        <li><a href="#"><ion-icon name="grid-outline"></ion-icon><span>DashBoard</span></a></li>
                        <li><a href="#"><ion-icon name="person-outline"></ion-icon><span>User</span></a></li>
                        <li><a href="#"><ion-icon name="chatbubbles-outline"></ion-icon><span>Message</span></a></li>
                        <li><a href="#"><ion-icon name="pie-chart-outline"></ion-icon><span>Analytics</span></a></li>
                        <li><a href="#"><ion-icon name="folder-open-outline"></ion-icon><span>file manager</span></a></li>
                        <li><a href="#"><ion-icon name="cart-outline"></ion-icon><span>Order</span></a></li>
                        <li><a href="#"><ion-icon name="heart-outline"></ion-icon><span>WishList</span></a></li>
                        <li><a href="#"><ion-icon name="settings-outline"></ion-icon><span>Setting</span></a></li>
                    </ul>
                </div>
                <div class="user">
                    <img src="1.jpg" alt="" />
                    <div class="name">
                        <h5>Akash Lakade</h5>
                        <span>web Designer</span>
                    </div>
                    <a href="#"><ion-icon name="log-out-outline"></ion-icon></a>
                </div>
            </div>
        </>
    )
}

export default SideHeader;