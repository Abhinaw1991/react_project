import React from 'react';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaWhatsappSquare,
} from 'react-icons/fa';
import './navbar.css';
// import Blog from './Blog';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="main-nav">
				{/* 1st logo part */}
				<div className="logo">
					<h1>Logo</h1>
				</div>
				{/* 2st menu part */}
				<div className="menu-link">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/AboutUs">About Us</Link>
						</li>
						<li>
							<Link to="/Service">Service</Link>
						</li>
						
						<li>
							<Link to="/ContactUs">Contact Us</Link>
						</li>
						
					</ul>
				</div>
				{/* 3rd social media links */}
				<div className="social-media">
					<ul class="social-media-desktop">
						<li>
							<a href="facebook.com" target="_blank">
								<FaFacebookSquare />
							</a>
						</li>
						<li>
							<a href="www.instagram.com/" target="_blank">
								<FaInstagramSquare />
							</a>
						</li>
						<li>
							<a href="web.whatsapp.com/" target="_blank">
								<FaWhatsappSquare />
							</a>
						</li>
					</ul>
				</div>
			</nav>
			{/* hero section */}
			{/* <div className="hero-section">Hero Section</div> */}
		</>
	);
};

export default Navbar;
