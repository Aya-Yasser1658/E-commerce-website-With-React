import './Footer.css'; // Optional: If you want to include custom styling

// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div class="right">
                <h1>Exclusive</h1>
                <h4>Subscribe</h4>
                <p>Get 10% off your first order</p>
                <input type='email' placeholder='Enter Your email'></input>
        </div>
      
        <div class="middel1">
            <h1>Support</h1>
            <h4>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h4>
            <h4>exclusive@gmail.com</h4>
            <h4>+88015-88888-9999</h4>
        </div>
        <div class="middel2">
            <h1>Account</h1>
            <h4>My Account</h4>
            <h4>Login / Register</h4>
            <h4>Cart</h4>
            <h4>Wishlist</h4>
            <h4>Shop</h4>
        </div>
        <div class="middel3">
            <h1>Quick Link</h1>
            <h4>Privacy Policy</h4>
            <h4>Terms Of Use</h4>
            <h4>FAQ</h4>
            <h4>Contact</h4>
        </div>
        <div class="left">
            <div class="Icons">
                <a href="f"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="t"><i class="fa-brands fa-twitter"></i></a>
                <a href="i"><i class="fa-brands fa-instagram"></i></a>
                <a href="l"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
      
    </footer>
  );
};

export default Footer;
