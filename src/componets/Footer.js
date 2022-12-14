import React from 'react';
import'./Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Footer() {
	return (
		<>
			<div className="boots">
				<div style={{ padding: 30 }}>
					<Row>
						<Col>
							<div className="footer-h">
								<h2>Company Name</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Architecto, sed praesentium! Vel voluptas fugiat assumenda
									natus perspiciatis, quibusdam sed exercitationem ipsum
									dignissimos adipisci quasi iusto, aspernatur necessitatibus
									fuga veniam deserunt.
								</p>
							</div>
						</Col>
						<Col>
							<div className="footer-h footer-list">
								<h2>Links</h2>
								<ul>
									<li>Home</li>
									<li>About Us</li>
									<li>Services</li>
									<li>Blok</li>
									<li>Contact Us</li>
								</ul>
							</div>
						</Col>
						<Col>
							<div className="footer-h">
								<h2>Contact</h2>
								<p>Mo:+91 8899776600</p>
								<p>Email:info@gmail.com</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
