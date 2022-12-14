import React from 'react'
import Navbar from './Navbar'
import ABanner from './image/bg_1.jpg';
import Image from './image/a-img.jpeg';
import whyimg from './image/why-choose-img1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';


export default function AboutUs() {
	return (
		<>
			<Navbar />
			<div className="about-banner">
				<img src={ABanner} alt="Banner" />
			</div>
			<div className="S-A">
				<Container>
					<Row>
						<h2>WELCOME TO Company</h2>
					</Row>
					<Row>
						{/* <Col> */}
						<div className="col-lg-8">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								quis impedit excepturi numquam neque facere accusamus possimus
								dolore fugiat labore ut, esse, ipsa maxime nesciunt ipsum
								facilis ducimus, quos ad porro laborum sequi quidem nobis.
								Perferendis, iure omnis ipsum soluta enim laudantium amet totam
								aperiam magnam architecto distinctio, dolores tempora?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								quis impedit excepturi numquam neque facere accusamus possimus
								dolore fugiat labore ut, esse, ipsa maxime nesciunt ipsum
								facilis ducimus, quos ad porro laborum sequi quidem nobis.
								Perferendis, iure omnis ipsum soluta enim laudantium amet totam
								aperiam magnam architecto distinctio, dolores tempora?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								quis impedit excepturi numquam neque facere accusamus possimus
								dolore fugiat labore ut, esse, ipsa maxime nesciunt ipsum
								facilis ducimus, quos ad porro laborum sequi quidem nobis.
								Perferendis, iure omnis ipsum soluta enim laudantium amet totam
								aperiam magnam architecto distinctio, dolores tempora?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								quis impedit excepturi numquam neque facere accusamus possimus
								dolore fugiat labore ut, esse, ipsa maxime nesciunt ipsum
								facilis ducimus, quos ad porro laborum sequi quidem nobis.
								Perferendis, iure omnis ipsum soluta enim laudantium amet totam
								aperiam magnam architecto distinctio, dolores tempora?
							</p>
						</div>

						{/* </Col> */}
						{/* <Col> */}
						<div className="col-lg-4">
							<div className="s-img">
								<img src={Image} alt="simage" />
							</div>
						</div>

						{/* </Col> */}
					</Row>
				</Container>

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
			</div>
		</>
	);
}
