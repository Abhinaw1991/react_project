import React from 'react';
import Navbar from './Navbar';
import ABanner from './image/bg_1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

export default function ContactUs() {
	return (
		<>
			<Navbar />
			<div className="about-banner">
				<img src={ABanner} alt="Banner" />
			</div>
			<div className="contact-p">
				<Container>
					<Row>
						<div className="col-lg-12">
							<h1 className="contact_taital">Request A Call Back</h1>
							<div className="email_text">
								<div className="form-group">
									<input
										type="text"
										className="email-bt"
										placeholder="Name"
										name="Email"
										spellcheck="false"
										data-ms-editor="true"
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="email-bt"
										placeholder="Phone Numbar"
										name="Email"
										spellcheck="false"
										data-ms-editor="true"
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="email-bt"
										placeholder="Email"
										name="Email"
										spellcheck="false"
										data-ms-editor="true"
									/>
								</div>
								<div className="form-group">
									<textarea
										className="massage-bt"
										placeholder="Massage"
										rows="5"
										id="comment"
										name="Massage"
										spellcheck="false"
										data-ms-editor="true"
									></textarea>
								</div>
								<div className="send_btn">
									<a
										href="https://wowbangalore.com/Abhinawkumar/index.html"
										target="_blank"
									>
										SEND
									</a>
								</div>
							</div>
						</div>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
