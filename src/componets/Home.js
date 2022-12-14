import React from 'react';
import Banner from './image/banner.jpg';
import image from './image/h-1.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './image/img-1.png';
import img2 from './image/img-2.png';
import img3 from './image/img-3.png';

function Home() {
	return (
		<>
			<Navbar />
			<div className="Home-1">
				<img src={Banner} alt="Banner" />
			</div>

			<div className="section-2">
				<div className="Home-2">
					<div class="case-study--left__textslider__image"></div>
					<h1>React Project</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at vel
						nobis impedit temporibus, fuga delectus aliquid dolores saepe
						molestias, fugit quidem quis facere distinctio quaerat voluptatem!
						Blanditiis quidem tenetur id, non numquam eum debitis illo,
						quibusdam reprehenderit, nobis aliquam! Quos atque, officiis quas
						nam recusandae saepe dicta molestiae accusamus!
					</p>
					<a href="#" className="read-more">
						Read More
					</a>
				</div>
				<div className="Home-3">
					<img src={image} alt="home-img" />
				</div>
			</div>
			{/* section 3 */}
			<div className="s3">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="ser-s">Service</h2>
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="s4">
				<div className="container">
					<div className="row">
						<div className="row">
							<div className="col-lg-4">
								<img src={img1} alt="img-1" />
							</div>
							<div className="col-lg-4">
								<img src={img2} alt="img-2" />
							</div>
							<div className="col-lg-4">
								<img src={img3} alt="img-3" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="box41">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="box21 newsletter_box">
								<div className="let">
									<h1 className="let_text">Let Start Talk with Us</h1>
								</div>

								<div className="getquote_bt">
									<a href="https://wowbangalore.com/Abhinawkumar/index.html" target='_blank'>
										Get A Quote
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
