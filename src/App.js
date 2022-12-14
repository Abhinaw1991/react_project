import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componets/Home';
import AboutUs from './componets/AboutUs';
import Service from './componets/Service';
import ContactUs from './componets/ContactUs';

export const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/AboutUs" component={AboutUs} />
					<Route exact path="/Service" component={Service} />
					
					<Route exact path="/ContactUs" component={ContactUs} />
					
				</Switch>
			</Router>
		</>
	);
};
export default App;
