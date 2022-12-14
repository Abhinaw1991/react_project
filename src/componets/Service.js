import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import ABanner from './image/bg_1.jpg';

export default function Service() {
	return (
		<>
			<Navbar />
			<div className="about-banner">
				<img src={ABanner} alt="Banner" />
			</div>
			<div className="three-box">
				<Container>
					<Row>
						<div className="col-lg-4">
							<div className="first-box">
								<h3>First Box</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempore eveniet harum quisquam amet temporibus porro laborum
									rerum similique ex nostrum.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="first-box">
								<h3>Second Box</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempore eveniet harum quisquam amet temporibus porro laborum
									rerum similique ex nostrum.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="first-box">
								<h3>Three Box</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempore eveniet harum quisquam amet temporibus porro laborum
									rerum similique ex nostrum.
								</p>
							</div>
						</div>
					</Row>
				</Container>
			</div>
			<div className="three-box">
				<Container>
					<Row>
						<div className="col-lg-4">
							<div className="first-box">
								<h3>First Box</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempore eveniet harum quisquam amet temporibus porro laborum
									rerum similique ex nostrum.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="first-box">
								<h3>Second Box</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempore eveniet harum quisquam amet temporibus porro laborum
									rerum similique ex nostrum.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="first-box">
								<h3>Three Box</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempore eveniet harum quisquam amet temporibus porro laborum
									rerum similique ex nostrum.
								</p>
							</div>
						</div>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
